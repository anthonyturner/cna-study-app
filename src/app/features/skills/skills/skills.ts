import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CnaDataService, CnaSkill } from '../../../shared/services/cna-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatChipsModule]
})
export class Skills implements OnInit {
  skills: CnaSkill[] = [];
  filtered: CnaSkill[] = [];
  selected: CnaSkill | null = null;
  activeCategory = 'All';

  constructor(private dataService: CnaDataService, private sanitizer: DomSanitizer) {}

  safeUrl(url: string): SafeResourceUrl {
    const embedUrl = url
      .replace(/youtube\.com\/watch\?v=([^&]+).*/, 'youtube.com/embed/$1')
      .replace(/youtu\.be\/([^?]+).*/, 'youtube.com/embed/$1');
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      embedUrl.startsWith('http') ? embedUrl : 'https://' + embedUrl
    );
  }

  get categories(): string[] {
    const cats = ['All', ...new Set(this.skills.map(s => s.category))];
    return cats;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.filtered = skills;
    });
  }

  filterBy(category: string): void {
    this.activeCategory = category;
    this.filtered = category === 'All' ? this.skills : this.skills.filter(s => s.category === category);
  }

  select(skill: CnaSkill): void {
    this.selected = skill;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  back(): void {
    this.selected = null;
  }
}
