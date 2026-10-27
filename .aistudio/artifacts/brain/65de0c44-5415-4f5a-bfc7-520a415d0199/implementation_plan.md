# Medical Environmental Health & Parasitology - Interactive Learning Platform

A modern, high-yield digital study platform and exam simulation suite converting the complete curriculum of 120 questions (78 MCQs and 42 True/False statements across 5 core environmental health and parasitology domains) into an engaging, responsive web application.

### User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following foundational preferences in Phase 1:
> - **Study Modes**: Interactive quiz with instant feedback, active-recall Flashcards, and a Comprehensive Study & Reference Browser.
> - **Language**: Complete English user interface and educational content aligned with medical parasitology and environmental health standards.
> - **Persistence**: Client-side storage (`localStorage`) for question bookmarks, test history, accuracy metrics, and mastery tracking without requiring user registration.

- **Confirmed Decision 1**: All 120 questions from the 20-page document are codified into structured, typed data with detailed clinical/scientific rationale, topic tagging, and question difficulty indicators.
- **Confirmed Decision 2**: Strict medical domain aesthetic with crisp typography, dual-coded visual feedback (never color alone), and responsive layout for desktop and tablet study.

---

### 1. Overview & Core Concept

- **What It Does**: Transforms static lecture slides and PDF question banks into an interactive, spaced-repetition-ready learning portal. Students can practice randomized exams, flip through digital flashcards by topic, drill flagged/missed questions, and review detailed answer explanations.
- **Target Audience / Persona**: Medical, public health, nursing, and biomedical students preparing for coursework exams, board certifications, and environmental sanitation assessments.
- **Key Value**: Replaces passive PDF scrolling with active recall, instant knowledge validation, performance analytics by sub-discipline (Ventilation, Waste & Water, Food Contamination, Noise & Lighting, Radiation, Vectors & Parasites), and exam-day confidence building.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Dashboard & Topic Hub**: High-level overview of overall progress, mastery percentage, quick-start buttons for "Smart Practice Quiz", "Flashcard Drill", and "Study Bank Browser".
  2. **Interactive Quiz Mode**:
     - Configurable question sets (All topics or specific chapters, 10 / 25 / 50 / All questions, timed or untimed).
     - Single-question focused view with keyboard shortcuts (keys `A`, `B`, `C`, `D` or `T`/`F`, `Enter` to submit, `Space` for next).
     - Immediate feedback reveal: clear indicator of correct vs chosen answer, explanatory note, and 1-click bookmarking for spaced repetition.
     - Final score breakdown with review of missed questions and retry options.
  3. **Flashcard Deck Mode**:
     - 3D-smooth flip cards with prompt on the front and answer + key clinical takeaway on the back.
     - "Got it" vs "Need Review" sorting to dynamically filter learning queues.
  4. **Study & Reference Browser**:
     - Filterable, searchable table/list of all 120 items with search query highlighting.
     - Filter by category (e.g. Radiation, Vectors, Water Quality, Food Contamination) and type (MCQ vs True/False).
     - Quick "Show/Hide All Answers" toggle for self-testing.
  5. **Bookmarks & Missed Questions Vault**:
     - Dedicated revision room for flagged items and historically incorrect answers.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Professional clinical / biomedical academic workstation. Clean, focused, and distraction-free.
  - *Color Palette & Mood*:
    - Canvas (60%): Slate clean light canvas (`#F8FAFC` to `#FFFFFF`) with crisp high-contrast slate text (`#0F172A`).
    - Structural Surfaces (30%): Pure white card surfaces (`#FFFFFF`), hairline borders (`#E2E8F0`), subtle neutral badges.
    - Semantic Accents (10%):
      - Primary Action / Indigo: `#2563EB` (Royal Medical Blue)
      - Correct / Nominal: Emerald `#059669` paired with explicit text indicator `✓ CORRECT`
      - Incorrect / Alert: Rose `#DC2626` paired with explicit text indicator `✗ INCORRECT`
      - Bookmarked / Flagged: Amber `#D97706`
  - *Typography*: Clean neo-grotesque display headers paired with highly legible body typography and tabular numerals for scores and timers.
  - *Component Styling*: Single elevation depth, generous padding (`py-3 px-5`), no arbitrary pill badges, no pulsing neon effects.

- **Interactive Feedback & Motion**:
  - Smooth card flip transition (300ms compositor-accelerated transform).
  - Subtle progress bar animation with numerical percentage.
  - Non-intrusive sound toggle (optional gentle audio cue on correct/incorrect) and full keyboard accessibility.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Embedded Question Data vs Remote API**
  - *Chosen Approach*: Embed the full 120 curated questions in a typed TypeScript repository (`src/data/questionsData.ts`).
  - *Why*: Guarantees instant sub-millisecond question switching, offline capability, zero API latency, and 100% data fidelity with the source PDF.
  - *Alternatives Considered*: Fetching from a mock backend, which introduces unnecessary network latency and failure points.
- **Decision 2: Progress Persistence via LocalStorage**
  - *Chosen Approach*: Local persistence hook (`useStudyStore`) managing completed question IDs, score history, and bookmarked questions.
  - *Why*: Frictionless immediate usage without registration walls; student progress persists across page refreshes and browser sessions.
  - *Alternatives Considered*: Cloud database requiring mandatory user accounts, creating unnecessary setup barriers for a study tool.
- **Decision 3: Multi-Mode Unified Architecture**
  - *Chosen Approach*: Single cohesive SPA with tab navigation between "Quiz Mode", "Flashcards Deck", "Full Study Bank", and "Performance Analytics".
  - *Why*: Accommodates diverse learning styles (active quiz taker vs flashcard memorizer vs quick reader).

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       App Container                         │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ Top Bar: Brand, Navigation (Modes), Stats Quick-look│   │
│   └─────────────────────────────────────────────────────┘   │
│                              │                              │
│       ┌──────────────────────┼──────────────────────┐       │
│       ▼                      ▼                      ▼       │
│  ┌───────────┐         ┌───────────┐          ┌───────────┐ │
│  │   Quiz    │         │Flashcards │          │Full Study │ │
│  │ Interactive│        │Active Flip│          │ Reference │ │
│  │  Engine   │         │  Decks    │          │  Browser  │ │
│  └─────┬─────┘         └─────┬─────┘          └─────┬─────┘ │
│        │                     │                      │       │
│        └─────────────────────┼──────────────────────┘       │
│                              ▼                              │
│         ┌─────────────────────────────────────────┐         │
│         │        useStudyStore (LocalStorage)     │         │
│         │ - Completed answers & scores            │         │
│         │ - Bookmarked / Flagged question IDs     │         │
│         │ - Category mastery percentages          │         │
│         └────────────────────┬────────────────────┘         │
│                              ▼                              │
│         ┌─────────────────────────────────────────┐         │
│         │         Curated Question Dataset        │         │
│         │ - 78 MCQs (options, correct, note)      │         │
│         │ - 42 True/False (statement, expl)       │         │
│         │ - 5 Categories & difficulty tags        │         │
│         └─────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

- **Data Models**:
  - `QuestionItem`: `id`, `number`, `type: 'mcq' | 'true_false'`, `category`, `question`, `options?`, `correctAnswer`, `explanation`, `tags`.
  - `UserProgress`: `answeredQuestions: Record<string, { selected: string, isCorrect: boolean, timestamp: number }>`, `bookmarks: string[]`, `quizSessions: QuizResult[]`.
- **Unit Testing Pure Logic**:
  - Test question extraction integrity (120 total items, valid answer keys, no orphaned options).
  - Test quiz scoring calculation, category breakdown algorithm, and bookmark toggling.
