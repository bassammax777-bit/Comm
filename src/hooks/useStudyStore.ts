/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { StudyStore, AnswerRecord, QuizSession } from '../types/quiz';
import { QUESTIONS_DATA, CATEGORIES } from '../data/questionsData';

const STORAGE_KEY = 'med_env_parasitology_study_store_v1';

const defaultStore: StudyStore = {
  answers: {},
  bookmarks: [],
  notes: {},
  quizHistory: []
};

export function useStudyStore() {
  const [store, setStore] = useState<StudyStore>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultStore;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // ignore quota errors
    }
  }, [store]);

  const recordAnswer = useCallback((questionId: string, selected: string, isCorrect: boolean) => {
    setStore(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: {
          selected,
          isCorrect,
          timestamp: Date.now()
        }
      }
    }));
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setStore(prev => {
      const exists = prev.bookmarks.includes(questionId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter(id => id !== questionId)
          : [...prev.bookmarks, questionId]
      };
    });
  }, []);

  const isBookmarked = useCallback((questionId: string) => {
    return store.bookmarks.includes(questionId);
  }, [store.bookmarks]);

  const saveQuizSession = useCallback((session: Omit<QuizSession, 'id' | 'date'>) => {
    const newSession: QuizSession = {
      ...session,
      id: 'session-' + Date.now(),
      date: Date.now()
    };
    setStore(prev => ({
      ...prev,
      quizHistory: [newSession, ...prev.quizHistory].slice(0, 50)
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset your study progress and bookmarks?')) {
      setStore(defaultStore);
    }
  }, []);

  // Performance calculations
  const stats = useMemo(() => {
    const totalQuestions = QUESTIONS_DATA.length;
    const answeredEntries = Object.entries(store.answers);
    const attemptedCount = answeredEntries.length;
    const correctCount = answeredEntries.filter(([, val]) => val.isCorrect).length;
    const incorrectCount = attemptedCount - correctCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const completionRate = Math.round((attemptedCount / totalQuestions) * 100);

    const categoryStats = CATEGORIES.map(cat => {
      const catQuestions = QUESTIONS_DATA.filter(q => q.category === cat.name);
      const catAnswered = catQuestions.filter(q => store.answers[q.id]);
      const catCorrect = catQuestions.filter(q => store.answers[q.id]?.isCorrect);
      const catAccuracy = catAnswered.length > 0 ? Math.round((catCorrect.length / catAnswered.length) * 100) : 0;
      const catCompletion = Math.round((catAnswered.length / catQuestions.length) * 100);

      return {
        category: cat.name,
        total: catQuestions.length,
        answered: catAnswered.length,
        correct: catCorrect.length,
        accuracy: catAccuracy,
        completion: catCompletion
      };
    });

    const missedIds = answeredEntries.filter(([, val]) => !val.isCorrect).map(([id]) => id);

    return {
      totalQuestions,
      attemptedCount,
      correctCount,
      incorrectCount,
      accuracy,
      completionRate,
      categoryStats,
      bookmarkedCount: store.bookmarks.length,
      missedCount: missedIds.length,
      missedIds
    };
  }, [store.answers, store.bookmarks]);

  return {
    store,
    recordAnswer,
    toggleBookmark,
    isBookmarked,
    saveQuizSession,
    resetAllProgress,
    stats
  };
}
