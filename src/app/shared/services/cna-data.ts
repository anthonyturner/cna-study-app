import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ── Glossary term highlighter ─────────────────────────────────────────────
// Wraps known glossary terms in the rendered HTML with a tooltip span.
// Safe to call on content we fully control (own JSON files).
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightGlossaryTerms(html: string, terms: GlossaryTerm[]): string {
  if (!terms.length || !html) return html;

  // Build term → definition map; also extract abbreviated forms like (ADLs)
  const termMap = new Map<string, string>();
  for (const t of terms) {
    const main = t.term.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const abbrMatch = t.term.match(/\(([A-Za-z]{2,}s?)\)/);
    if (main.length >= 4) termMap.set(main.toLowerCase(), t.definition);
    if (abbrMatch && abbrMatch[1].length >= 3) termMap.set(abbrMatch[1].toLowerCase(), t.definition);
  }

  // Sort entries longest-first so "medical asepsis" matches before "asepsis"
  const sorted = [...termMap.entries()].sort((a, b) => b[0].length - a[0].length);
  if (!sorted.length) return html;

  const pattern = new RegExp(
    `\\b(${sorted.map(([k]) => escapeRegex(k)).join('|')})\\b`,
    'gi'
  );

  // Only replace inside text nodes — skip content between < and >
  return html.replace(/(<[^>]+>|[^<]+)/g, chunk => {
    if (chunk.startsWith('<')) return chunk;
    return chunk.replace(pattern, match => {
      const def = (termMap.get(match.toLowerCase()) ?? '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
      return `<span class="gl-term" data-def="${def}">${match}</span>`;
    });
  });
}

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

export interface StudyDay {
  day: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  comingSoon?: boolean;
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

  getStudyDays(): Observable<StudyDay[]> {
    return this.http.get<StudyDay[]>('/assets/data/study-days.json');
  }
}
