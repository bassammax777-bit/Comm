/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { QuestionItem, Category } from '../types/quiz';
import { QUESTIONS_DATA, CATEGORIES } from '../data/questionsData';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Bookmark,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';

interface FlashcardsViewProps {
  initialCategory?: Category;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
  onExit: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  initialCategory,
  isBookmarked,
  onToggleBookmark,
  onExit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(initialCategory || 'all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<string[]>([]);

  // Filter pool
  const deck = useMemo(() => {
    let pool = [...QUESTIONS_DATA];
    if (selectedCategory !== 'all') {
      pool = pool.filter(q => q.category === selectedCategory);
    }
    return pool;
  }, [selectedCategory]);

  const [cards, setCards] = useState<QuestionItem[]>(deck);

  useEffect(() => {
    setCards(deck);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [deck]);

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const markMastered = () => {
    if (!currentCard) return;
    setMasteredIds(prev => [...new Set([...prev, currentCard.id])]);
    setReviewIds(prev => prev.filter(id => id !== currentCard.id));
    handleNext();
  };

  const markReview = () => {
    if (!currentCard) return;
    setReviewIds(prev => [...new Set([...prev, currentCard.id])]);
    setMasteredIds(prev => prev.filter(id => id !== currentCard.id));
    handleNext();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === '1') {
        markReview();
      } else if (e.key === '2') {
        markMastered();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, cards.length, isFlipped]);

  if (!currentCard) return null;

  const isCurrentMastered = masteredIds.includes(currentCard.id);
  const isCurrentReview = reviewIds.includes(currentCard.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Category selector & deck controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        
        {/* Module Filter */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Modules (120)
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleShuffle}
            title="Shuffle deck"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </div>
      </div>

      {/* Progress & Deck Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800">
            Card <span className="font-mono tabular-nums">{currentIndex + 1}</span> of{' '}
            <span className="font-mono tabular-nums">{cards.length}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{currentCard.category}</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
          <span className="text-emerald-700 font-semibold">{masteredIds.length} Mastered</span>
          <span className="text-amber-700 font-semibold">{reviewIds.length} Review</span>
        </div>
      </div>

      {/* Flashcard Box with 3D Flip */}
      <div className="perspective-1000 min-h-[380px] w-full cursor-pointer select-none" onClick={handleFlip}>
        <div
          className={`relative w-full min-h-[380px] transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT OF CARD */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-md backface-hidden flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                  {currentCard.category}
                </span>
                <div className="text-xs text-slate-400">
                  {currentCard.type === 'mcq' ? 'Multiple Choice' : 'True / False Statement'} · #{currentCard.sectionNumber}
                </div>
              </div>

              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  onToggleBookmark(currentCard.id);
                }}
                className={`p-2 rounded-lg border transition-colors ${
                  isBookmarked(currentCard.id)
                    ? 'bg-amber-50 border-amber-200 text-amber-600'
                    : 'border-slate-200 text-slate-400 hover:text-slate-600'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(currentCard.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
              </button>
            </div>

            {/* Question Text */}
            <div className="py-6 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                {currentCard.question}
              </h3>

              {currentCard.type === 'mcq' && currentCard.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2">
                  {currentCard.options.map(opt => (
                    <div key={opt.label} className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold font-mono mr-1.5">{opt.label})</span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Flip Indicator Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Click card or press Space to reveal answer</span>
              </span>
              <span className="font-mono">Use ← → to navigate</span>
            </div>
          </div>

          {/* BACK OF CARD */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 text-white rounded-2xl p-8 shadow-md backface-hidden rotate-y-180 flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  Correct Answer & Explanation
                </span>
                <div className="text-xs text-slate-400 mt-0.5">
                  Ref #{currentCard.sectionNumber} · {currentCard.category}
                </div>
              </div>

              <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-sm font-extrabold font-mono">
                {currentCard.correctAnswer}
                {currentCard.options && (
                  <span className="ml-1 text-xs font-normal">
                    - {currentCard.options.find(o => o.label === currentCard.correctAnswer)?.text}
                  </span>
                )}
              </div>
            </div>

            {/* Content Rationale */}
            <div className="py-4 space-y-4 overflow-y-auto max-h-[220px]">
              <div className="text-sm text-slate-200 leading-relaxed">
                {currentCard.explanation}
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-blue-200">
                <span className="font-semibold text-white">High-Yield Takeaway: </span>
                {currentCard.keyFact}
              </div>
            </div>

            {/* Spaced repetition marking actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                onClick={markReview}
                className="flex-1 py-2 px-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Needs Review (Key 1)
              </button>

              <button
                type="button"
                onClick={markMastered}
                className="flex-1 py-2 px-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                Mastered (Key 2)
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Card</span>
        </button>

        <button
          onClick={handleFlip}
          className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
        >
          {isFlipped ? 'Show Question' : 'Reveal Answer'}
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
        >
          <span>Next Card</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
