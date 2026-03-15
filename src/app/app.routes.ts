import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'glossary',
    loadComponent: () => import('./features/glossary/glossary/glossary').then(m => m.Glossary)
  },
  {
    path: 'flashcards',
    loadComponent: () => import('./features/flashcards/flashcards/flashcards').then(m => m.Flashcards)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./features/quiz/quiz/quiz').then(m => m.Quiz)
  },
  {
    path: 'topics',
    loadComponent: () => import('./features/topics/topics/topics').then(m => m.Topics)
  },
  { path: '**', redirectTo: '' }
];
