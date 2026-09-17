/**
 * IT INDUSTRY 2030 - Interactive Engine & UI Controller
 * Features: Multi-Theme Engine, Scroll Progress, Mobile Drawer, Scroll Reveal, Filter Engine, Decay Simulation, Readiness Assessment
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Engine (Emerald Obsidian [Default], Electric Violet, Crimson Tech, Deep Navy, Platinum Light)
  const THEME_KEY = 'it2030_selected_theme';
  const savedTheme = localStorage.getItem(THEME_KEY) || 'emerald';
  applyTheme(savedTheme);

  // Initialize Theme Switcher Dropdown in Header
  initThemePicker();

  function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);

    // Update active state on dropdown buttons
    const themeOptBtns = document.querySelectorAll('.theme-opt-btn');
    themeOptBtns.forEach(btn => {
      const themeVal = btn.getAttribute('data-theme-val');
      if (themeVal === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update palette dot indicator in picker button
    const indicator = document.getElementById('active-theme-indicator');
    if (indicator) {
      indicator.className = `color-dot ${themeName}`;
    }
  }

  function initThemePicker() {
    const pickerBtn = document.getElementById('theme-picker-btn');
    const dropdown = document.getElementById('theme-dropdown');

    if (pickerBtn && dropdown) {
      pickerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (dropdown.classList.contains('show') && !dropdown.contains(e.target) && !pickerBtn.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });

      const optBtns = document.querySelectorAll('.theme-opt-btn');
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const newTheme = btn.getAttribute('data-theme-val');
          applyTheme(newTheme);
          dropdown.classList.remove('show');
        });
      });
    }
  }

  // 2. Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    if (!progressBar) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const scrollPercent = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;

    // Sticky Header visual elevation
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // 4. Scroll Reveal via IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // 5. Challenges Page Interactive Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const challengeCards = document.querySelectorAll('.pis-card');

  if (filterBtns.length > 0 && challengeCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');

        challengeCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterVal === 'all' || category === filterVal) {
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.transition = 'all 0.3s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. World Without Developers - Decay Simulation Stepper
  const simBtns = document.querySelectorAll('.sim-nav-btn');
  const simPanes = document.querySelectorAll('.sim-content-pane');

  if (simBtns.length > 0 && simPanes.length > 0) {
    simBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        simBtns.forEach(b => b.classList.remove('active'));
        simPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // 7. Future Page - 2030 Developer Readiness Assessment
  const assessmentForm = document.getElementById('readiness-form');
  if (assessmentForm) {
    const optionBtns = document.querySelectorAll('.option-btn');
    const userAnswers = {};

    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const questionId = btn.getAttribute('data-q');
        const scoreVal = parseInt(btn.getAttribute('data-val'), 10);

        const siblings = document.querySelectorAll(`.option-btn[data-q="${questionId}"]`);
        siblings.forEach(s => s.classList.remove('selected'));

        btn.classList.add('selected');
        userAnswers[questionId] = scoreVal;
      });
    });

    const submitBtn = document.getElementById('calc-readiness-btn');
    const resultPanel = document.getElementById('assessment-result');
    const scoreValEl = document.getElementById('result-score-val');
    const tierTitleEl = document.getElementById('result-tier-title');
    const descEl = document.getElementById('result-desc');

    if (submitBtn && resultPanel) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const totalQuestions = 5;
        const answeredCount = Object.keys(userAnswers).length;

        if (answeredCount < totalQuestions) {
          alert(`Please answer all ${totalQuestions} questions to calculate your 2030 Developer Readiness score.`);
          return;
        }

        let totalScore = 0;
        for (let q in userAnswers) {
          totalScore += userAnswers[q];
        }

        const percent = Math.round((totalScore / 20) * 100);

        scoreValEl.textContent = `${percent}%`;

        if (percent >= 85) {
          tierTitleEl.textContent = 'Tier 1: 2030 Cognitive Systems Architect';
          tierTitleEl.style.color = '#34d399';
          descEl.innerHTML = `<strong>Outstanding Preparedness!</strong> You already think in terms of systems synthesis, critical verification, and algorithmic orchestration rather than rote syntax typing. In 2030, you will be in the top 5% of high-leverage engineering leaders who direct AI swarms.`;
        } else if (percent >= 60) {
          tierTitleEl.textContent = 'Tier 2: Transitional AI-Augmented Engineer';
          tierTitleEl.style.color = '#fbbf24';
          descEl.innerHTML = `<strong>Strong Foundation with Strategic Growth Potential.</strong> You are actively collaborating with AI copilots, but you must deepen your mastery of distributed architectures, formal verification, and domain modeling to insulate yourself from syntax commoditization.`;
        } else {
          tierTitleEl.textContent = 'Tier 3: At-Risk Syntax Specialist';
          tierTitleEl.style.color = '#f87171';
          descEl.innerHTML = `<strong>Immediate Evolution Recommended.</strong> Relying heavily on manual boilerplate code and basic CRUD scripting leaves you vulnerable to autonomous AI models. Start focusing on architectural design, security intuition, and business-domain translation today.`;
        }

        resultPanel.style.display = 'block';
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }
});
