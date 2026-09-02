/**
 * Common utilities and shared functionality for DevMaster Learning Hub
 */

// LocalStorage Keys
const STORAGE_PREFIX = 'devmaster_';
const PROGRESS_KEY = `${STORAGE_PREFIX}progress`;
const THEME_KEY = `${STORAGE_PREFIX}theme`;

// Toast Notification
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium shadow-2xl backdrop-blur-xl border ${
    type === 'success' 
      ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/30' 
      : type === 'error'
      ? 'bg-rose-950/90 text-rose-200 border-rose-500/30'
      : 'bg-indigo-950/90 text-indigo-200 border-indigo-500/30'
  }`;

  const icon = type === 'success' 
    ? '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
    : type === 'error'
    ? '<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
    : '<svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Copy Code to Clipboard
function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Code copied to clipboard!');
    if (buttonElement) {
      const originalText = buttonElement.innerHTML;
      buttonElement.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg> Copied!
      `;
      setTimeout(() => {
        buttonElement.innerHTML = originalText;
      }, 2000);
    }
  }).catch(() => {
    showToast('Failed to copy code', 'error');
  });
}

// Progress Management
const ProgressTracker = {
  getProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
        html: [],
        css: [],
        javascript: [],
        tailwind: []
      };
    } catch (e) {
      return { html: [], css: [], javascript: [], tailwind: [] };
    }
  },

  isCompleted(category, topicId) {
    const progress = this.getProgress();
    return progress[category]?.includes(topicId) || false;
  },

  toggleTopic(category, topicId) {
    const progress = this.getProgress();
    if (!progress[category]) progress[category] = [];

    const index = progress[category].indexOf(topicId);
    let completed = false;
    if (index > -1) {
      progress[category].splice(index, 1);
      showToast('Topic marked as uncompleted', 'info');
    } else {
      progress[category].push(topicId);
      completed = true;
      showToast('🎉 Topic marked as completed!', 'success');
    }

    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    this.updateUI(category);
    return completed;
  },

  getCategoryStats(category, totalTopics) {
    const progress = this.getProgress();
    const completedCount = progress[category]?.length || 0;
    const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    return { completedCount, totalTopics, percentage };
  },

  getAllStats(totals) {
    const progress = this.getProgress();
    let totalCompleted = 0;
    let grandTotal = 0;

    for (const key in totals) {
      const completed = progress[key]?.length || 0;
      totalCompleted += completed;
      grandTotal += totals[key];
    }

    const percentage = grandTotal > 0 ? Math.round((totalCompleted / grandTotal) * 100) : 0;
    return { totalCompleted, grandTotal, percentage };
  },

  updateUI(category) {
    const counterEl = document.getElementById('completed-count');
    const percentEl = document.getElementById('progress-percentage');
    const barEl = document.getElementById('progress-bar-fill');

    if (window.topicsData && category) {
      const stats = this.getCategoryStats(category, window.topicsData.length);
      if (counterEl) counterEl.textContent = `${stats.completedCount} / ${stats.totalTopics}`;
      if (percentEl) percentEl.textContent = `${stats.percentage}%`;
      if (barEl) barEl.style.width = `${stats.percentage}%`;
    }
  }
};

// Interactive Quiz Runner Modal
function openQuizModal(categoryName, quizQuestions) {
  if (!quizQuestions || quizQuestions.length === 0) return;

  let modal = document.getElementById('quiz-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quiz-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  let currentIdx = 0;
  let score = 0;
  let selectedAnswers = [];

  function renderQuestion() {
    const q = quizQuestions[currentIdx];
    const isAnswered = selectedAnswers[currentIdx] !== undefined;

    modal.innerHTML = `
      <div class="glass-panel w-full max-w-2xl rounded-2xl p-6 md:p-8 border border-slate-700/60 shadow-2xl relative animate-scale">
        <button id="close-quiz-btn" class="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div>
            <span class="text-xs uppercase tracking-wider font-semibold text-indigo-400">${categoryName} Skill Check</span>
            <h3 class="text-xl font-bold text-white">Question ${currentIdx + 1} of ${quizQuestions.length}</h3>
          </div>
          <div class="bg-indigo-500/10 text-indigo-300 font-mono text-xs px-3 py-1.5 rounded-full border border-indigo-500/20">
            Score: ${score}
          </div>
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-medium text-slate-100 mb-4">${q.question}</h4>
          ${q.codeSnippet ? `<pre class="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 mb-4 overflow-x-auto"><code>${escapeHTML(q.codeSnippet)}</code></pre>` : ''}

          <div class="space-y-3">
            ${q.options.map((opt, idx) => {
              let btnClass = "w-full text-left p-4 rounded-xl border border-slate-700/60 bg-slate-900/50 hover:bg-slate-800/60 transition flex items-center gap-3";
              if (isAnswered) {
                if (idx === q.correctAnswer) {
                  btnClass = "w-full text-left p-4 rounded-xl border border-emerald-500/80 bg-emerald-950/40 text-emerald-200 transition flex items-center gap-3";
                } else if (idx === selectedAnswers[currentIdx]) {
                  btnClass = "w-full text-left p-4 rounded-xl border border-rose-500/80 bg-rose-950/40 text-rose-200 transition flex items-center gap-3";
                } else {
                  btnClass = "w-full text-left p-4 rounded-xl border border-slate-800 bg-slate-900/20 opacity-50 transition flex items-center gap-3";
                }
              }
              return `
                <button ${isAnswered ? 'disabled' : ''} onclick="window.__selectQuizAnswer(${idx})" class="${btnClass}">
                  <span class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs bg-slate-800 border border-slate-700 text-slate-300">
                    ${String.fromCharCode(65 + idx)}
                  </span>
                  <span class="text-sm">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        ${isAnswered ? `
          <div class="p-4 rounded-xl mb-6 ${selectedAnswers[currentIdx] === q.correctAnswer ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300' : 'bg-rose-950/30 border border-rose-500/30 text-rose-300'} text-sm">
            <p class="font-semibold mb-1">${selectedAnswers[currentIdx] === q.correctAnswer ? '✅ Correct Answer!' : '❌ Not quite right'}</p>
            <p class="text-slate-300 text-xs">${q.explanation}</p>
          </div>
        ` : ''}

        <div class="flex items-center justify-between pt-4 border-t border-slate-800">
          <button ${currentIdx === 0 ? 'disabled' : ''} onclick="window.__prevQuizQuestion()" class="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white disabled:opacity-30">
            Previous
          </button>
          ${isAnswered ? (
            currentIdx === quizQuestions.length - 1 ? `
              <button onclick="window.__finishQuiz()" class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 transition">
                View Final Score
              </button>
            ` : `
              <button onclick="window.__nextQuizQuestion()" class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 transition">
                Next Question →
              </button>
            `
          ) : `
            <span class="text-xs text-slate-500">Select an option to proceed</span>
          `}
        </div>
      </div>
    `;

    document.getElementById('close-quiz-btn')?.addEventListener('click', () => modal.remove());
  }

  window.__selectQuizAnswer = (idx) => {
    selectedAnswers[currentIdx] = idx;
    if (idx === quizQuestions[currentIdx].correctAnswer) {
      score += 1;
    }
    renderQuestion();
  };

  window.__nextQuizQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      currentIdx++;
      renderQuestion();
    }
  };

  window.__prevQuizQuestion = () => {
    if (currentIdx > 0) {
      currentIdx--;
      renderQuestion();
    }
  };

  window.__finishQuiz = () => {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    modal.innerHTML = `
      <div class="glass-panel w-full max-w-md rounded-2xl p-8 border border-slate-700/60 shadow-2xl text-center">
        <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${percentage >= 70 ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400' : 'bg-amber-500/20 border border-amber-500/30 text-amber-400'}">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Quiz Completed!</h3>
        <p class="text-slate-400 text-sm mb-6">You scored <span class="font-bold text-white">${score} out of ${quizQuestions.length}</span> (${percentage}%)</p>
        
        <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-4 mb-6">
          <p class="text-xs text-slate-300 font-medium">
            ${percentage >= 80 ? '🌟 Outstanding work! You have mastered these concepts.' : percentage >= 50 ? '👍 Good job! Review the topics below to solidify your understanding.' : '💪 Keep practicing! Go through the code playgrounds and retry.'}
          </p>
        </div>

        <button onclick="document.getElementById('quiz-modal').remove()" class="w-full py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition">
          Back to Topics
        </button>
      </div>
    `;
  };

  renderQuestion();
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Global Nav Active Link Highlighter
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-indigo-400', 'border-b-2', 'border-indigo-500');
    }
  });
});
