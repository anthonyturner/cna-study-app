import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { CnaDataService, QuizQuestion } from '../../../shared/services/cna-data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatRadioModule, MatProgressBarModule, MatChipsModule]
})
export class Quiz implements OnInit {
  allQuestions: QuizQuestion[] = [];
  questions: QuizQuestion[] = [];
  currentIndex = 0;
  selectedAnswer: number | null = null;
  answered = false;
  score = 0;
  finished = false;
  results: { question: QuizQuestion; selected: number; correct: boolean }[] = [];

  constructor(private dataService: CnaDataService) {}

  ngOnInit(): void {
    this.dataService.getQuizQuestions().subscribe(qs => {
      this.allQuestions = qs;
      this.startQuiz();
    });
  }

  startQuiz(): void {
    this.questions = [...this.allQuestions].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.score = 0;
    this.finished = false;
    this.results = [];
  }

  get current(): QuizQuestion | null {
    return this.questions[this.currentIndex] ?? null;
  }

  get progress(): number {
    return this.questions.length ? ((this.currentIndex + 1) / this.questions.length) * 100 : 0;
  }

  get scorePercent(): number {
    return this.questions.length ? Math.round((this.score / this.questions.length) * 100) : 0;
  }

  submitAnswer(): void {
    if (this.selectedAnswer === null || !this.current) return;
    this.answered = true;
    const correct = this.selectedAnswer === this.current.answer;
    if (correct) this.score++;
    this.results.push({
      question: this.current,
      selected: this.selectedAnswer,
      correct
    });
  }

  next(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.selectedAnswer = null;
      this.answered = false;
    } else {
      this.finished = true;
    }
  }

  getLetterClass(q: QuizQuestion, i: number): string {
    if (!this.answered) return '';
    if (i === q.answer) return 'correct';
    if (i === this.selectedAnswer) return 'wrong';
    return '';
  }
}
