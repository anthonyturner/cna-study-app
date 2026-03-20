import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CnaDataService, Topic } from '../../../shared/services/cna-data';

export interface StudyDay {
  day: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-study-days',
  templateUrl: './study-days.html',
  styleUrl: './study-days.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatChipsModule, MatBadgeModule]
})
export class StudyDays implements OnInit {
  topicsByDay: Map<number, Topic[]> = new Map();
  selected: Topic | null = null;
  expandedDay: number | null = 1;

  studyDays: StudyDay[] = [
    {
      day: 1,
      title: 'BASICS',
      subtitle: 'What is it? Understanding the foundation of CNA care.',
      icon: 'school',
      color: '#6a1b9a'
    },
    {
      day: 2,
      title: 'OSHA & Safety',
      subtitle: 'Infection control, vital signs, safety procedures, and personal care.',
      icon: 'health_and_safety',
      color: '#1565C0'
    },
    {
      day: 3,
      title: "Promoting Resident's Independence",
      subtitle: 'Independence, abuse prevention, and circulatory & respiratory systems.',
      icon: 'self_improvement',
      color: '#00695C'
    },
    {
      day: 4,
      title: "Components & Care of the Resident's Environment",
      subtitle: 'Environment, admission/discharge, isolation, bedmaking, aging, pain, end-of-life care, and personal care skills & bathing.',
      icon: 'bed',
      color: '#E65100'
    },
    {
      day: 5,
      title: 'Grooming & Personal Hygiene',
      subtitle: 'AM & PM care, bathing, hair care, oral hygiene, denture care, shaving, and nail & foot care.',
      icon: 'spa',
      color: '#00695C'
    },
    {
      day: 6,
      title: 'Body Systems, Elimination & Specimen Collection',
      subtitle: 'Dressing, urinary system, reproductive system, perineal care, catheter care, digestive disorders, and specimen collection.',
      icon: 'biotech',
      color: '#0277BD'
    },
    {
      day: 7,
      title: 'Endocrine System, Nutrition & Skin Integrity',
      subtitle: 'Diabetes, nutrition, therapeutic diets, dining assistance, enteral feedings, integumentary system, and pressure injury prevention.',
      icon: 'restaurant',
      color: '#2E7D32'
    }
  ];

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

  toggleDay(day: number): void {
    this.expandedDay = this.expandedDay === day ? null : day;
    this.selected = null;
  }

  select(topic: Topic): void {
    this.selected = topic;
  }

  back(): void {
    this.selected = null;
  }

  topicsForDay(day: number): Topic[] {
    return this.topicsByDay.get(day) ?? [];
  }

  formatContent(content: string): string {
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
