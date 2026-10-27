/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { QuestionItem, Category, QuestionType } from '../types/quiz';
import { QUESTIONS_DATA, CATEGORIES } from '../data/questionsData';
import {
  Search,
  Filter,
  Eye,
  EyeOff,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  X
} from 'lucide-react';

interface StudyBankViewProps {
  initialCategory?: Category;
  userAnswers: Record<string, { selected: string; isCorrect: boolean }>;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
  onLaunchQuizFromItem?: (question: QuestionItem) => void;
}

export const StudyBankView: React.FC<StudyBankViewProps> = ({
  initialCategory,
  userAnswers,
  isBookmarked,
  onToggleBookmark
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(initialCategory || 'all');
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(true);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter(q => {
      // Category filter
      if (selectedCategory !== 'all' && q.category !== selectedCategory) return false;

      // Type filter
      if (selectedType !== 'all' && q.type !== selectedType) return false;

      // Bookmark filter
      if (onlyBookmarked && !isBookmarked(q.id)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuestion = q.question.toLowerCase().includes(query);
        const matchesExplanation = q.explanation.toLowerCase().includes(query);
        const matchesKeyFact = q.keyFact.toLowerCase().includes(query);
        const matchesTags = q.tags.some(t => t.toLowerCase().includes(query));
        const matchesOptions = q.options?.some(o => o.text.toLowerCase().includes(query));

        if (!matchesQuestion && !matchesExplanation && !matchesKeyFact && !matchesTags && !matchesOptions) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedType, onlyBookmarked, isBookmarked]);

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: prev[id] !== undefined ? !prev[id] : !showAllAnswers
    }));
  };

  const isCardExpanded = (id: string) => {
    if (expandedCards[id] !== undefined) return expandedCards[id];
    return showAllAnswers;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Search and Filters Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        
        {/* Title and Global Answer Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Comprehensive Study Bank</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Browse, search, and study all 120 validated syllabus questions and clinical rationales
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllAnswers(prev => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {showAllAnswers ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                  <span>Hide Explanations</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>Reveal All Answers</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search keywords, diseases, vectors (e.g. malaria, listeria, 85 dB, 5 NTU, radiation)..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Modules
            </button>

            {CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Type toggles & Saved only */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  selectedType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Formats
              </button>
              <button
                onClick={() => setSelectedType('mcq')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  selectedType === 'mcq' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                MCQs
              </button>
              <button
                onClick={() => setSelectedType('true_false')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  selectedType === 'true_false' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                True / False
              </button>
            </div>

            <button
              onClick={() => setOnlyBookmarked(prev => !prev)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                onlyBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
              <span>Saved Only</span>
            </button>
          </div>
        </div>

      </div>

      {/* Result Count Status */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <span className="font-mono font-bold text-slate-800 tabular-nums">{filteredQuestions.length}</span> of 120 questions
        </span>
        {searchQuery && (
          <span className="text-blue-600 font-medium">
            Filtered by &quot;{searchQuery}&quot;
          </span>
        )}
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-bold text-slate-800">No questions found</h3>
            <p className="text-xs text-slate-500">Try loosening your search terms or clearing category filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedType('all');
                setOnlyBookmarked(false);
              }}
              className="mt-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            const expanded = isCardExpanded(q.id);
            const userHistory = userAnswers[q.id];

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-slate-300 transition-all space-y-4"
              >
                {/* Header & Meta */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-blue-700">{q.category}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500 font-mono text-[11px]">
                        {q.type === 'mcq' ? `MCQ #${q.sectionNumber}` : `True/False #${q.sectionNumber}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {userHistory && (
                      <span
                        className={`text-[11px] font-semibold flex items-center gap-1 ${
                          userHistory.isCorrect ? 'text-emerald-700' : 'text-rose-600'
                        }`}
                      >
                        {userHistory.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Passed</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Missed</span>
                          </>
                        )}
                      </span>
                    )}

                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isBookmarked(q.id)
                          ? 'bg-amber-50 border-amber-200 text-amber-600'
                          : 'border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(q.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Question Statement */}
                <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                  {q.question}
                </h3>

                {/* Options List */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isCorrect = opt.label === q.correctAnswer;
                      return (
                        <div
                          key={opt.label}
                          className={`p-2.5 rounded-lg border transition-colors flex items-start gap-2.5 ${
                            expanded && isCorrect
                              ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium'
                              : 'bg-slate-50/60 border-slate-200/80 text-slate-700'
                          }`}
                        >
                          <span
                            className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] shrink-0 ${
                              expanded && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="leading-relaxed">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Rationale and Explanations */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    {expanded ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Clinical Rationale</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Show Answer &amp; Rationale</span>
                      </>
                    )}
                  </button>

                  {expanded && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/70">
                        <span className="font-bold text-slate-800">
                          Correct Answer: <span className="font-mono text-emerald-700">{q.correctAnswer}</span>
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">VERIFIED ANSWER KEY</span>
                      </div>

                      <p className="text-slate-700 leading-relaxed pt-1">
                        {q.explanation}
                      </p>

                      <div className="pt-2 text-slate-600 border-t border-slate-200/60">
                        <span className="font-semibold text-slate-900">Key Fact: </span>
                        {q.keyFact}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
