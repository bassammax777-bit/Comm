/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS_DATA, CATEGORIES } from '../src/data/questionsData.ts';

describe('Questions Dataset Integrity', () => {
  test('Total question count is exactly 120 (78 MCQs and 42 True/False)', () => {
    assert.equal(QUESTIONS_DATA.length, 120);

    const mcqs = QUESTIONS_DATA.filter(q => q.type === 'mcq');
    const tfQuestions = QUESTIONS_DATA.filter(q => q.type === 'true_false');

    assert.equal(mcqs.length, 78);
    assert.equal(tfQuestions.length, 42);
  });

  test('All MCQs have valid 4 options and valid answer key', () => {
    const mcqs = QUESTIONS_DATA.filter(q => q.type === 'mcq');
    for (const mcq of mcqs) {
      assert.ok(mcq.options, `MCQ ${mcq.id} must have options array`);
      assert.equal(mcq.options.length, 4, `MCQ ${mcq.id} must have exactly 4 options`);
      assert.ok(['A', 'B', 'C', 'D'].includes(mcq.correctAnswer), `MCQ ${mcq.id} answer must be A, B, C, or D`);
      assert.ok(mcq.question.length > 5, `MCQ ${mcq.id} question text too short`);
      assert.ok(mcq.explanation.length > 10, `MCQ ${mcq.id} explanation missing or too short`);
    }
  });

  test('All True/False questions have valid True or False answer key', () => {
    const tfQuestions = QUESTIONS_DATA.filter(q => q.type === 'true_false');
    for (const tf of tfQuestions) {
      assert.ok(['True', 'False'].includes(tf.correctAnswer), `T/F ${tf.id} answer must be True or False`);
      assert.ok(tf.question.length > 5, `T/F ${tf.id} question text too short`);
      assert.ok(tf.explanation.length > 5, `T/F ${tf.id} explanation missing`);
    }
  });

  test('All 5 curriculum categories have valid question allocations', () => {
    assert.equal(CATEGORIES.length, 5);
    const categoryNames = CATEGORIES.map(c => c.name);

    for (const cat of categoryNames) {
      const count = QUESTIONS_DATA.filter(q => q.category === cat).length;
      assert.ok(count > 0, `Category "${cat}" must have questions`);
    }

    const totalCountFromCategories = CATEGORIES.reduce((acc, cat) => acc + cat.count, 0);
    assert.equal(totalCountFromCategories, 120);
  });
});

describe('Filtering and Scoring Helper Logic', () => {
  test('Filter questions by category and search keyword', () => {
    const query = 'malaria';
    const filtered = QUESTIONS_DATA.filter(q =>
      q.question.toLowerCase().includes(query) ||
      q.explanation.toLowerCase().includes(query) ||
      q.keyFact.toLowerCase().includes(query) ||
      q.tags.some(t => t.toLowerCase().includes(query)) ||
      (q.options && q.options.some(o => o.text.toLowerCase().includes(query)))
    );
    assert.ok(filtered.length >= 3, `Should find questions mentioning malaria, found ${filtered.length}`);
  });

  test('Score accuracy calculation', () => {
    const total = 20;
    const correct = 17;
    const accuracy = Math.round((correct / total) * 100);
    assert.equal(accuracy, 85);
  });
});
