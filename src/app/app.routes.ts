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
  {
    path: 'days',
    loadComponent: () => import('./features/study-days/study-days/study-days').then(m => m.StudyDays)
  },
  {
    path: 'wound-care',
    loadComponent: () => import('./features/wound-care/wound-care/wound-care').then(m => m.WoundCare)
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills/skills').then(m => m.Skills)
  },
  {
    path: 'care-plan-sets',
    loadComponent: () => import('./features/care-plan-sets/care-plan-sets/care-plan-sets').then(m => m.CarePlanSets)
  },
  { path: '**', redirectTo: '' }
];
