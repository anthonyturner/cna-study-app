import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { CnaDataService, GlossaryTerm, Topic, StudyDay, phoneticize, highlightGlossaryTerms } from '../../../shared/services/cna-data';
import { GlossaryTooltipDirective } from '../../../shared/directives/glossary-tooltip.directive';

@Component({
  selector: 'app-study-days',
  templateUrl: './study-days.html',
  styleUrl: './study-days.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatChipsModule, MatBadgeModule, GlossaryTooltipDirective]
})
export class StudyDays implements OnInit {
  topicsByDay: Map<number, Topic[]> = new Map();
  selected: Topic | null = null;
  expandedDay: number | null = 1;
  glossaryTerms: GlossaryTerm[] = [];

  studyDays: StudyDay[] = [];

  constructor(private dataService: CnaDataService, private sanitizer: DomSanitizer) {}

  safeUrl(url: string): SafeResourceUrl {
    // Convert watch URL or short URL to embed URL
    let embedUrl = url
      .replace(/youtube\.com\/watch\?v=([^&]+).*/, 'youtube.com/embed/$1')
      .replace(/youtu\.be\/([^?]+).*/, 'youtube.com/embed/$1');
    if (!embedUrl.startsWith('http')) embedUrl = 'https://' + embedUrl;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  ngOnInit(): void {
    this.dataService.getStudyDays().subscribe(days => { this.studyDays = days; });
    this.dataService.getGlossary().subscribe(terms => { this.glossaryTerms = terms; });

    this.dataService.getTopics().subscribe(topics => {
      const map = new Map<number, Topic[]>();
      topics.forEach(t => {
        if (t.day) {
          if (!map.has(t.day)) map.set(t.day, []);
          map.get(t.day)!.push(t);
        }
      });
      this.topicsByDay = map;
    });
  }

  hasVideo(topic: Topic): boolean {
    return topic.sections.some(s => s.videoTitle !== undefined);
  }

  toggleDay(day: number): void {
    this.expandedDay = this.expandedDay === day ? null : day;
    this.selected = null;
  }

  selectedDay: number | null = null;

  get currentDayTopics(): Topic[] {
    return this.selectedDay ? this.topicsForDay(this.selectedDay) : [];
  }

  get currentTopicIndex(): number {
    return this.currentDayTopics.findIndex(t => t.id === this.selected?.id);
  }

  get hasPrev(): boolean { return this.currentTopicIndex > 0; }
  get hasNext(): boolean { return this.currentTopicIndex < this.currentDayTopics.length - 1; }

  prevTopic(): void {
    if (this.hasPrev) {
      this.selected = this.currentDayTopics[this.currentTopicIndex - 1];
      this.sectionQuery = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextTopic(): void {
    if (this.hasNext) {
      this.selected = this.currentDayTopics[this.currentTopicIndex + 1];
      this.sectionQuery = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ── Section search (within a topic) ─────────────────────
  sectionQuery = '';

  get filteredSections() {
    if (!this.selected) return [];
    const q = this.sectionQuery.trim().toLowerCase();
    if (!q) return this.selected.sections;
    return this.selected.sections.filter(s =>
      s.heading.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q)
    );
  }

  onSectionSearch(query: string): void { this.sectionQuery = query; }
  clearSectionSearch(): void { this.sectionQuery = ''; }

  select(topic: Topic): void {
    this.selected = topic;
    this.sectionQuery = '';
    if (topic.day) this.selectedDay = topic.day;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  back(): void {
    this.selected = null;
    this.selectedDay = null;
    this.sectionQuery = '';
  }

  // ── Search ───────────────────────────────────────────────
  searchQuery = '';
  searchResults: { topic: Topic; day: StudyDay }[] = [];

  onSearch(query: string): void {
    this.searchQuery = query;
    const q = query.trim().toLowerCase();
    if (!q) { this.searchResults = []; return; }

    const results: { topic: Topic; day: StudyDay }[] = [];
    for (const [dayNum, topics] of this.topicsByDay) {
      const studyDay = this.studyDays.find(sd => sd.day === dayNum);
      if (!studyDay) continue;
      for (const topic of topics) {
        const hit =
          topic.title.toLowerCase().includes(q) ||
          topic.summary.toLowerCase().includes(q) ||
          topic.sections.some(s =>
            s.heading.toLowerCase().includes(q) ||
            s.content.toLowerCase().includes(q)
          );
        if (hit) results.push({ topic, day: studyDay });
      }
    }
    this.searchResults = results;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
  }

  // ── Lightbox ─────────────────────────────────────────────
  lightboxSrc = '';
  lightboxAlt = '';

  openLightbox(src: string, alt: string): void {
    this.lightboxSrc = src;
    this.lightboxAlt = alt;
  }

  closeLightbox(): void {
    this.lightboxSrc = '';
    this.lightboxAlt = '';
  }

  speakingTerm = '';

  speak(term: string, event: Event): void {
    event.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    if (this.speakingTerm === term) {
      window.speechSynthesis.cancel();
      this.speakingTerm = '';
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phoneticize(term));
    utterance.rate = 0.85;
    utterance.onend = () => { this.speakingTerm = ''; };
    utterance.onerror = () => { this.speakingTerm = ''; };
    this.speakingTerm = term;
    window.speechSynthesis.speak(utterance);
  }

  topicsForDay(day: number): Topic[] {
    return this.topicsByDay.get(day) ?? [];
  }

  highlightTerms(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      highlightGlossaryTerms(html, this.glossaryTerms)
    );
  }

  formatContent(content: string): string {
    // Handle explicit \n line breaks — process each line independently
    if (content.includes('\n')) {
      return content.split('\n').map(l => l.trim()).filter(Boolean)
        .map(l => this.formatContent(l)).join('');
    }

    const text = content.trim();

    // Numbered list: (1) item (2) item ...
    if (/\(1\)/.test(text)) {
      return this.renderNumberedList(text);
    }

    // Sub-headings: "Label: content" (capital start, no commas/parens before colon)
    const subParts = text.split(/([A-Z][a-zA-Z0-9\s-]{1,50}):\s/);
    if (subParts.length > 1) {
      let html = '';
      if (subParts[0].trim()) html += this.renderSentences(subParts[0].trim());
      for (let i = 1; i < subParts.length; i += 2) {
        html += `<span class="content-subheading">${subParts[i]}</span>`;
        const body = (subParts[i + 1] || '').trim();
        if (body) html += this.renderSentences(body);
      }
      return html;
    }

    return this.renderSentences(text);
  }

  private renderNumberedList(text: string): string {
    const parts = text.split(/[;.]\s+(?=\(\d+\))/);
    let html = '';
    const items: string[] = [];

    for (const part of parts) {
      const m = part.match(/^(.*?)\(\d+\)\s+(.+)/);
      if (m) {
        if (m[1].trim()) html += `<p>${m[1].trim().replace(/:$/, '')}</p>`;
        items.push(m[2].trim());
      } else if (items.length > 0) {
        items[items.length - 1] += '. ' + part.trim();
      }
    }

    if (items.length) {
      html += '<ol>' + items.map(item => {
        const f = item.replace(/\.$/, '').replace(/^([^—]{3,60}?)\s—\s/, '<strong>$1</strong> — ');
        return `<li>${f}</li>`;
      }).join('') + '</ol>';
    }

    return html;
  }

  private renderSentences(text: string): string {
    const sentences = text.replace(/\.\s*$/, '').split(/\.\s+/).map(s => s.trim()).filter(Boolean);
    if (sentences.length < 2) return `<p>${text}</p>`;
    const items = sentences.map(s => {
      const f = s.replace(/^([^—]{3,60}?)\s—\s/, '<strong>$1</strong> — ');
      return `<li>${f}</li>`;
    }).join('');
    return `<ul>${items}</ul>`;
  }
}
