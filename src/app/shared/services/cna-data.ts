import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GlossaryTerm {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export interface SectionTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface TopicSection {
  heading: string;
  content: string;
  imageUrl?: string;
  table?: SectionTable;
  videoTitle?: string;
  videoUrl?: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  color: string;
  summary: string;
  sections: TopicSection[];
  day?: number;
  unit?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class CnaDataService {
  constructor(private http: HttpClient) {}

  getGlossary(): Observable<GlossaryTerm[]> {
    return this.http.get<GlossaryTerm[]>('/assets/data/glossary.json');
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('/assets/data/topics.json');
  }

  getQuizQuestions(): Observable<QuizQuestion[]> {
    return this.http.get<QuizQuestion[]>('/assets/data/quiz.json');
  }
}
