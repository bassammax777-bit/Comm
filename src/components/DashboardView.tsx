/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Category, ViewMode } from '../types/quiz';
import { CATEGORIES } from '../data/questionsData';
import {
  CheckCircle2,
  AlertCircle,
  Bookmark,
  Layers,
  ArrowRight,
  BookOpen,
  Sparkles,
  Droplets,
  UtensilsCrossed,
  Volume2,
  Radio,
  Bug,
  RotateCcw
} from 'lucide-react';

interface DashboardViewProps {
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
  };
  onStartQuiz: (options?: { category?: Category; count?: number; onlyMissed?: boolean; onlyBookmarked?: boolean }) => void;
  onOpenFlashcards: (category?: Category) => void;
  onOpenBrowser: (category?: Category) => void;
  onResetProgress: () => void;
}

const CATEGORY_ICONS: Record<Category, React.ComponentType<{ className?: string }>> = {
  'Ventilation, Waste & Water': Droplets,
  'Food Contamination': UtensilsCrossed,
  'Noise & Lighting': Volume2,
  'Radiation': Radio,
  'Vectors & Parasites': Bug
};

export const DashboardView: React.FC<DashboardViewProps> = ({
  stats,
  onStartQuiz,
  onOpenFlashcards,
  onOpenBrowser,
  onResetProgress
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Hero Welcome & Progress Snapshot */}
      <div className="relative overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
        {/* Subtle decorative medical laboratory backdrop */}
        <div className="absolute right-0 top-0 w-2/5 h-full pointer-events-none overflow-hidden opacity-[0.08] hidden md:block" aria-hidden="true">
          <img
            src="/src/assets/images/medical_science_background_1793086606963.jpg"
            alt=""
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span>Medical Environmental Health & Parasitology</span>
              <span aria-hidden="true">·</span>
              <span>120 Verified Questions</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Master Environmental Health & Clinical Parasitology
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Complete interactive examination suite based on the comprehensive university study guide. 
              Featuring 78 Multiple Choice Questions and 42 True/False assertions across all 5 clinical modules.
            </p>

            {/* Main Action Launchers */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onStartQuiz()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Full Quiz</span>
              </button>

              <button
                onClick={() => onStartQuiz({ count: 25 })}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <span>Quick 25 Exam</span>
              </button>

              <button
                onClick={() => onOpenFlashcards()}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4 text-slate-600" />
                <span>Active Flashcards</span>
              </button>
            </div>
          </div>

          {/* KPI strip with tabular numbers */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 border border-slate-200/60 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-semibold text-slate-700">Study Progress Overview</span>
              <span className="text-xs font-mono font-bold text-blue-600 tabular-nums">
                {stats.attemptedCount} / {stats.totalQuestions} ({stats.completionRate}%)
              </span>
            </div>

            {/* Overall Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(100, Math.max(3, stats.completionRate))}%` }}
                />
              </div>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
                  {stats.accuracy}%
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Accuracy</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                <div className="text-xl font-bold text-emerald-600 font-mono tabular-nums">
                  {stats.correctCount}
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Correct</div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                <div className="text-xl font-bold text-rose-600 font-mono tabular-nums">
                  {stats.incorrectCount}
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Incorrect</div>
              </div>
            </div>

            {/* Targeted drill shortcuts */}
            <div className="pt-1 flex items-center justify-between text-xs text-slate-600">
              {stats.missedCount > 0 ? (
                <button
                  onClick={() => onStartQuiz({ onlyMissed: true })}
                  className="inline-flex items-center gap-1.5 text-rose-700 hover:text-rose-800 font-semibold cursor-pointer underline decoration-rose-300"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  <span>Drill {stats.missedCount} Missed Questions</span>
                </button>
              ) : (
                <span className="text-slate-400">No missed questions yet</span>
              )}

              {stats.bookmarkedCount > 0 && (
                <button
                  onClick={() => onStartQuiz({ onlyBookmarked: true })}
                  className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold cursor-pointer underline decoration-amber-300"
                >
                  <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{stats.bookmarkedCount} Bookmarked</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Module Curriculum Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Core Curriculum Modules</h2>
            <p className="text-xs text-slate-500 mt-0.5">Choose a specific topic to launch targeted quizzes, flashcards, or study references</p>
          </div>
          <button
            onClick={() => onOpenBrowser()}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View All 120 Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.categoryStats.map((item, index) => {
            const Icon = CATEGORY_ICONS[item.category];
            const meta = CATEGORIES.find(c => c.name === item.category);

            return (
              <div
                key={item.category}
                className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-semibold text-slate-500 tabular-nums">
                        {item.total} Questions
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {item.category}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {meta?.description}
                    </p>
                  </div>

                  {/* Progress info */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Mastery</span>
                      <span className="font-mono tabular-nums font-semibold text-slate-700">
                        {item.answered > 0 ? `${item.accuracy}% (${item.correct}/${item.answered})` : 'Not started'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full transition-all ${
                          item.accuracy >= 80 ? 'bg-emerald-500' : item.accuracy >= 50 ? 'bg-amber-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${Math.max(2, item.completion)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-semibold">
                  <button
                    onClick={() => onStartQuiz({ category: item.category })}
                    className="py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    Quiz Module
                  </button>
                  <button
                    onClick={() => onOpenFlashcards(item.category)}
                    className="py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    Flashcards
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Utility Actions */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span>Data source: Medical Environmental Health & Parasitology Examination Material (PDF)</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>Automatic Local Offline Storage Enabled</span>
        </div>

        {stats.attemptedCount > 0 && (
          <button
            onClick={onResetProgress}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Local Progress</span>
          </button>
        )}
      </div>

    </div>
  );
};
