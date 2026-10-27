/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type QuestionType = 'mcq' | 'true_false';

export type Category =
  | 'Ventilation, Waste & Water'
  | 'Food Contamination'
  | 'Noise & Lighting'
  | 'Radiation'
  | 'Vectors & Parasites';

export interface Option {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionItem {
  id: string;
  sectionNumber: number;
  type: QuestionType;
  category: Category;
  question: string;
  options?: Option[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'True' | 'False';
  explanation: string;
  keyFact: string;
  tags: string[];
}

export interface AnswerRecord {
  selected: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface QuizSession {
  id: string;
  date: number;
  score: number;
  total: number;
  categoryFilter?: string;
  typeFilter?: string;
}

export interface StudyStore {
  answers: Record<string, AnswerRecord>;
  bookmarks: string[];
  notes: Record<string, string>;
  quizHistory: QuizSession[];
}

export type ViewMode = 'dashboard' | 'quiz' | 'flashcards' | 'browser' | 'analytics';
