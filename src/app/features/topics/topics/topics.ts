import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CnaDataService, Topic } from '../../../shared/services/cna-data';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.html',
  styleUrl: './topics.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatChipsModule]
})
export class Topics implements OnInit {
  topics: Topic[] = [];
  selected: Topic | null = null;

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
      this.topics = topics;
    });
  }

  select(topic: Topic): void {
    this.selected = this.selected?.id === topic.id ? null : topic;
  }

  back(): void {
    this.selected = null;
  }

  formatContent(content: string): string {
    const text = content.trim();

    if (/\(1\)/.test(text)) {
      return this.renderNumberedList(text);
    }

    const subParts = text.split(/([A-Z][a-zA-Z\s-]{1,50}):\s/);
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
