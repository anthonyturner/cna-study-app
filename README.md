# CNA Study App

An interactive study tool built to help students prepare for the **Certified Nursing Assistant (CNA)** exam. The app covers core CNA topics drawn directly from course materials, including infection control, patient rights, communication, safety, personal care, and the BASICS model of resident needs.

---

## Features

| Section | Description |
|---|---|
| **Study Topics** | In-depth topic guides organized into expandable sections covering all major CNA exam areas |
| **Glossary** | Searchable and filterable reference of 80+ CNA terms and definitions |
| **Flashcards** | Flip-card study tool with category filtering and shuffle for active recall |
| **Practice Quiz** | 65+ multiple-choice questions with instant feedback and answer explanations |

---

## Tech Stack

- **Angular 20** — standalone components, lazy-loaded routes
- **Angular Material 20** — UI component library (azure-blue M3 theme)
- **TypeScript**
- **SCSS**

---

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) v18 or higher (project uses v24)
- [npm](https://www.npmjs.com/) v9 or higher (comes with Node)
- [Angular CLI](https://angular.dev/tools/cli) v20

Install the Angular CLI globally if you haven't already:

```bash
npm install -g @angular/cli
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd cna-study-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
ng serve
```

Then open your browser to **http://localhost:4200**.
The app hot-reloads automatically on file changes.

---

## Project Structure

```
src/
├── app/
│   ├── app.ts                  # Root component
│   ├── app.routes.ts           # Route definitions (lazy-loaded)
│   ├── home/                   # Home / landing page
│   ├── shared/
│   │   ├── nav/                # Navigation bar
│   │   └── services/
│   │       └── cna-data.ts     # Data service (HTTP)
│   └── features/
│       ├── glossary/           # Glossary feature
│       ├── flashcards/         # Flashcards feature
│       ├── quiz/               # Practice quiz feature
│       └── topics/             # Study topics feature
└── assets/
    └── data/
        ├── glossary.json       # 80+ glossary terms
        ├── topics.json         # Topic guides with sections
        └── quiz.json           # 65+ quiz questions
```

---

## Building for Production

```bash
ng build
```

Output is placed in the `dist/` directory, optimized for performance.

---

## Running Tests

```bash
ng test
```
