import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CnaDataService, GlossaryTerm } from '../../../shared/services/cna-data';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.html',
  styleUrl: './flashcards.scss',
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatSelectModule, MatFormFieldModule, MatProgressBarModule]
})
export class Flashcards implements OnInit {
  allTerms: GlossaryTerm[] = [];
  deck: GlossaryTerm[] = [];
  currentIndex = 0;
  flipped = false;
  selectedCategory = 'All';
  categories: string[] = [];

  constructor(private dataService: CnaDataService) {}

  ngOnInit(): void {
    this.dataService.getGlossary().subscribe(terms => {
      this.allTerms = terms;
      const cats = [...new Set(terms.map(t => t.category))].sort();
      this.categories = ['All', ...cats];
      this.buildDeck();
    });
  }

  buildDeck(): void {
    const source =
      this.selectedCategory === 'All'
        ? [...this.allTerms]
        : this.allTerms.filter(t => t.category === this.selectedCategory);
    this.deck = this.shuffle(source);
    this.currentIndex = 0;
    this.flipped = false;
  }

  shuffle(arr: GlossaryTerm[]): GlossaryTerm[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  get current(): GlossaryTerm | null {
    return this.deck[this.currentIndex] ?? null;
  }

  get progress(): number {
    return this.deck.length ? ((this.currentIndex + 1) / this.deck.length) * 100 : 0;
  }

  flip(): void {
    this.flipped = !this.flipped;
  }

  next(): void {
    if (this.currentIndex < this.deck.length - 1) {
      this.currentIndex++;
      this.flipped = false;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.flipped = false;
    }
  }

  restart(): void {
    this.buildDeck();
  }
}
