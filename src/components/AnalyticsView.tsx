/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Category, QuizSession } from '../types/quiz';
import { CATEGORIES, QUESTIONS_DATA } from '../data/questionsData';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AnalyticsViewProps {
  stats: {
    totalQuestions: number;
    attemptedCount: number;
    correctCount: number;
    incorrectCount: number;
    accuracy: number;
    completionRate: number;
    categoryStats: {
      category: Category;
      total: number;
      answered: number;
      correct: number;
      accuracy: number;
      completion: number;
    }[];
    bookmarkedCount: number;
    missedCount: number;
    missedIds: string[];
  };
  quizHistory: QuizSession[];
  onStartQuiz: (options?: { category?: Category; onlyMissed?: boolean }) => void;
  onResetProgress: () => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  stats,
  quizHistory,
  onStartQuiz,
  onResetProgress
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Performance & Mastery Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Detailed breakdown of your comprehension, accuracy rates, and knowledge retention across all 5 modules
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Overall Accuracy</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="mt-3 text-3xl font-extrabold font-mono text-slate-900 tabular-nums">
            {stats.accuracy}%
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {stats.correctCount} correct of {stats.attemptedCount} attempted
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Course Coverage</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="mt-3 text-3xl font-extrabold font-mono text-slate-900 tabular-nums">
            {stats.completionRate}%
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {stats.attemptedCount} of {stats.totalQuestions} questions explored
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Incorrect Answers</span>
            <XCircle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="mt-3 text-3xl font-extrabold font-mono text-rose-600 tabular-nums">
            {stats.missedCount}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            {stats.missedCount > 0 ? (
              <button
                onClick={() => onStartQuiz({ onlyMissed: true })}
                className="text-rose-600 font-semibold underline hover:text-rose-800 cursor-pointer"
              >
                Drill missed questions now
              </button>
            ) : (
              'All attempted questions correct'
            )}
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Exam Sessions</span>
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="mt-3 text-3xl font-extrabold font-mono text-slate-900 tabular-nums">
            {quizHistory.length}
          </div>
          <div className="mt-1 text-xs text-slate-500">
            Completed practice tests
          </div>
        </div>

      </div>

      {/* Module-by-Module Diagnostic Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">Module Proficiency & Diagnostic Matrix</h2>
          <p className="text-xs text-slate-500 mt-0.5">Identify weak areas to focus revision time effectively</p>
        </div>

        <div className="space-y-5">
          {stats.categoryStats.map(cat => {
            const isWeak = cat.answered > 0 && cat.accuracy < 70;
            const isMastered = cat.answered > 0 && cat.accuracy >= 85;

            return (
              <div key={cat.category} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{cat.category}</h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {cat.answered} answered out of {cat.total} total · {cat.correct} correct
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        cat.answered === 0
                          ? 'bg-slate-200 text-slate-700'
                          : isMastered
                          ? 'bg-emerald-100 text-emerald-800'
                          : isWeak
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {cat.answered === 0 ? 'Untested' : `${cat.accuracy}% Accuracy`}
                    </span>

                    <button
                      onClick={() => onStartQuiz({ category: cat.category })}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Drill Module</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Accuracy & Completion Dual Bar */}
                <div className="space-y-1">
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden flex">
                    <div
                      className={`h-2 transition-all duration-500 ${
                        isMastered ? 'bg-emerald-500' : isWeak ? 'bg-rose-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(3, cat.accuracy))}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz Sessions History */}
      {quizHistory.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Recent Exam History</h2>
            <span className="text-xs text-slate-500 font-mono">Last {quizHistory.length} attempts</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Filter / Module</th>
                  <th className="py-2.5 px-3">Score</th>
                  <th className="py-2.5 px-3">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {quizHistory.map(session => {
                  const percent = Math.round((session.score / session.total) * 100);
                  const dateStr = new Date(session.date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={session.id} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 font-mono text-slate-500">{dateStr}</td>
                      <td className="py-2.5 px-3 font-medium text-slate-900">
                        {session.categoryFilter === 'all' || !session.categoryFilter
                          ? 'Mixed Examination'
                          : session.categoryFilter}
                      </td>
                      <td className="py-2.5 px-3 font-mono tabular-nums">
                        {session.score} / {session.total}
                      </td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`font-mono font-bold ${
                            percent >= 80 ? 'text-emerald-700' : percent >= 60 ? 'text-amber-700' : 'text-rose-600'
                          }`}
                        >
                          {percent}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reset Progress Action */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onResetProgress}
          className="text-xs font-semibold text-rose-600 hover:text-rose-800 flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Study Statistics</span>
        </button>
      </div>

    </div>
  );
};
