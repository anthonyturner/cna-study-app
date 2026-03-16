import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CnaDataService, GlossaryTerm } from '../../../shared/services/cna-data';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.html',
  styleUrl: './glossary.scss',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class Glossary implements OnInit {
  allTerms: GlossaryTerm[] = [];
  filteredTerms: GlossaryTerm[] = [];
  searchQuery = '';
  selectedCategory = 'All';
  categories: string[] = [];

  constructor(private dataService: CnaDataService) {}

  ngOnInit(): void {
    this.dataService.getGlossary().subscribe(terms => {
      this.allTerms = terms;
      this.filteredTerms = terms;
      const cats = [...new Set(terms.map(t => t.category))].sort();
      this.categories = ['All', ...cats];
    });
  }

  filter(): void {
    this.filteredTerms = this.allTerms.filter(term => {
      const matchesSearch =
        !this.searchQuery ||
        term.term.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory =
        this.selectedCategory === 'All' || term.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
    this.filter();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filter();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
