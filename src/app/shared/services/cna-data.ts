import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PHONETIC_MAP: Record<string, string> = {
  'HIPAA': 'Hip-pay',
  'NPO': 'N-P-O',
  'PEG': 'peg',
  'ADA': 'A-D-A',
  'CNA': 'C-N-A',
  'ADL': 'A-D-L',
  'IV': 'I-V',
  'NG': 'N-G',
  'URI': 'U-R-I',
  'UTI': 'U-T-I',
  'DNR': 'D-N-R',
  'CPR': 'C-P-R',
  'PPE': 'P-P-E',
  'ROM': 'R-O-M',
  'OBRA': 'O-B-R-A',
};

export function phoneticize(text: string): string {
  return text.replace(/\b([A-Z]{2,})\b/g, (match) => PHONETIC_MAP[match] ?? match.split('').join('-'));
}

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
  category?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: string;
}

export interface CnaSkill {
  id: string;
  title: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  steps: string[];
  videoUrl?: string;
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

  getSkills(): Observable<CnaSkill[]> {
    return this.http.get<CnaSkill[]>('/assets/data/skills.json');
  }
}
