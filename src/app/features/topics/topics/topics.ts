import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
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

  constructor(private dataService: CnaDataService) {}

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
}
