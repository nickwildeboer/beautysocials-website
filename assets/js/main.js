/* ============================================================
   BeautySocials — interactie en motion
   ============================================================ */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const $ = (sel, root = document) => root.querySelector(sel);

  /* ----------------------------------------------------------
     Bubble SVG library — inline 3D-look met radial gradients
     ---------------------------------------------------------- */
  const bubbleSVG = {
    heart: (id) => `
      <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stop-color="oklch(0.97 0.05 6)"/>
            <stop offset="35%" stop-color="oklch(0.82 0.18 4)"/>
            <stop offset="75%" stop-color="oklch(0.62 0.23 358)"/>
            <stop offset="100%" stop-color="oklch(0.45 0.25 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="32%" cy="22%" r="35%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.85)"/>
            <stop offset="60%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
          <radialGradient id="rim-${id}" cx="80%" cy="80%" r="40%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.4)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M100 165 C30 110, 10 65, 40 35 C60 15, 88 22, 100 50 C112 22, 140 15, 160 35 C190 65, 170 110, 100 165Z" fill="url(#bg-${id})"/>
        <path d="M100 165 C30 110, 10 65, 40 35 C60 15, 88 22, 100 50 C112 22, 140 15, 160 35 C190 65, 170 110, 100 165Z" fill="url(#rim-${id})"/>
        <ellipse cx="68" cy="55" rx="22" ry="14" fill="url(#hl-${id})" transform="rotate(-22 68 55)"/>
        <ellipse cx="125" cy="48" rx="10" ry="6" fill="oklch(1 0 0 / 0.6)" transform="rotate(-15 125 48)"/>
      </svg>`,

    thumb: (id) => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="35%" cy="30%" r="85%">
            <stop offset="0%" stop-color="oklch(0.97 0.05 6)"/>
            <stop offset="40%" stop-color="oklch(0.85 0.16 6)"/>
            <stop offset="100%" stop-color="oklch(0.55 0.24 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="30%" cy="22%" r="30%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.85)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M70 88 L70 160 L60 160 C45 160 40 152 40 140 L40 105 C40 95 48 88 60 88 Z M75 165 L75 92 L100 50 C108 35 122 30 130 38 C140 48 132 70 128 80 L165 80 C175 80 180 88 178 96 L165 150 C162 160 154 165 144 165 Z" fill="url(#bg-${id})"/>
        <ellipse cx="105" cy="65" rx="14" ry="9" fill="url(#hl-${id})" transform="rotate(-30 105 65)"/>
        <circle cx="55" cy="105" r="7" fill="oklch(1 0 0 / 0.45)"/>
      </svg>`,

    arrow: (id) => `
      <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="30%" cy="30%" r="85%">
            <stop offset="0%" stop-color="oklch(0.97 0.05 6)"/>
            <stop offset="40%" stop-color="oklch(0.84 0.18 4)"/>
            <stop offset="100%" stop-color="oklch(0.50 0.24 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="28%" cy="22%" r="32%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.85)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M30 90 L30 60 C30 45 40 38 55 38 L120 38 L120 18 C120 10 128 7 134 12 L182 60 C188 65 188 75 182 80 L134 128 C128 133 120 130 120 122 L120 102 L100 102 C75 102 60 115 55 140 C53 152 38 152 35 140 C32 125 30 110 30 90 Z" fill="url(#bg-${id})"/>
        <ellipse cx="80" cy="55" rx="20" ry="9" fill="url(#hl-${id})" transform="rotate(-12 80 55)"/>
      </svg>`,

    quote: (id) => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="32%" cy="28%" r="85%">
            <stop offset="0%" stop-color="oklch(0.98 0.04 6)"/>
            <stop offset="40%" stop-color="oklch(0.86 0.17 4)"/>
            <stop offset="100%" stop-color="oklch(0.55 0.24 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="28%" cy="20%" r="30%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.9)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M50 30 C25 30 15 50 15 75 C15 110 50 130 60 165 C62 170 70 170 72 165 C82 130 100 100 100 70 C100 50 80 30 50 30 Z M140 30 C115 30 105 50 105 75 C105 110 140 130 150 165 C152 170 160 170 162 165 C172 130 190 100 190 70 C190 50 170 30 140 30 Z" fill="url(#bg-${id})"/>
        <ellipse cx="40" cy="55" rx="14" ry="9" fill="url(#hl-${id})" transform="rotate(-25 40 55)"/>
        <ellipse cx="130" cy="55" rx="14" ry="9" fill="url(#hl-${id})" transform="rotate(-25 130 55)"/>
      </svg>`,

    blob: (id) => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="32%" cy="32%" r="80%">
            <stop offset="0%" stop-color="oklch(0.98 0.03 6)"/>
            <stop offset="45%" stop-color="oklch(0.85 0.15 4)"/>
            <stop offset="100%" stop-color="oklch(0.56 0.24 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="30%" cy="25%" r="35%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.85)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M100 8 C150 8 192 50 192 100 C192 150 150 192 100 192 C50 192 8 150 8 100 C8 50 50 8 100 8 Z" fill="url(#bg-${id})"/>
        <ellipse cx="68" cy="55" rx="28" ry="14" fill="url(#hl-${id})" transform="rotate(-22 68 55)"/>
        <ellipse cx="135" cy="60" rx="10" ry="5" fill="oklch(1 0 0 / 0.55)" transform="rotate(-18 135 60)"/>
      </svg>`,

    plus: (id) => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <radialGradient id="bg-${id}" cx="32%" cy="32%" r="85%">
            <stop offset="0%" stop-color="oklch(0.97 0.05 6)"/>
            <stop offset="55%" stop-color="oklch(0.85 0.16 4)"/>
            <stop offset="100%" stop-color="oklch(0.58 0.24 0)"/>
          </radialGradient>
          <radialGradient id="hl-${id}" cx="30%" cy="25%" r="32%">
            <stop offset="0%" stop-color="oklch(1 0 0 / 0.85)"/>
            <stop offset="100%" stop-color="oklch(1 0 0 / 0)"/>
          </radialGradient>
        </defs>
        <path d="M40 8 L60 8 C63 8 65 10 65 13 L65 35 L87 35 C90 35 92 37 92 40 L92 60 C92 63 90 65 87 65 L65 65 L65 87 C65 90 63 92 60 92 L40 92 C37 92 35 90 35 87 L35 65 L13 65 C10 65 8 63 8 60 L8 40 C8 37 10 35 13 35 L35 35 L35 13 C35 10 37 8 40 8 Z" fill="url(#bg-${id})"/>
        <ellipse cx="33" cy="28" rx="11" ry="6" fill="url(#hl-${id})" transform="rotate(-22 33 28)"/>
      </svg>`,
  };

  let bubbleId = 0;

  function renderBubbles() {
    $$('[data-bubble]').forEach((el) => {
      const kind = el.dataset.bubble;
      if (!bubbleSVG[kind]) return;
      const id = `b${bubbleId++}`;
      el.innerHTML = bubbleSVG[kind](id);
    });
  }

  /* ----------------------------------------------------------
     Header scroll detection
     ---------------------------------------------------------- */
  function header() {
    const header = $('.site-header');
    if (!header) return;

    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ----------------------------------------------------------
     Mobile menu
     ---------------------------------------------------------- */
  function mobileMenu() {
    const toggle = $('.nav-toggle');
    const menu = $('.mobile-menu');
    if (!toggle || !menu) return;

    const close = () => {
      toggle.classList.remove('is-open');
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('is-open');
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    $$('a', menu).forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ----------------------------------------------------------
     Title split — woord-voor-woord reveal
     ---------------------------------------------------------- */
  function splitTitles() {
    $$('[data-split]').forEach((el) => {
      if (el.dataset.splitDone === 'true') return;
      const text = el.textContent.trim();
      const words = text.split(/\s+/);
      el.innerHTML = words
        .map((w) => `<span class="split-word"><span class="split-word-inner">${w}</span></span>`)
        .join(' ');
      el.dataset.splitDone = 'true';
      el.classList.add('split-ready');
    });
  }

  function revealSplit(el, delay = 0) {
    const words = $$('.split-word-inner', el);
    words.forEach((w, i) => {
      w.style.transitionDelay = `${delay + i * 60}ms`;
    });
    el.classList.add('split-revealed');
  }

  /* ----------------------------------------------------------
     IntersectionObserver — globale reveal
     ---------------------------------------------------------- */
  function observe() {
    if (reduced) {
      $$('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      $$('[data-split]').forEach((el) => revealSplit(el));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('is-visible');

          if (el.matches('[data-split]')) {
            revealSplit(el, parseInt(el.dataset.splitDelay || '0', 10));
          }

          if (el.matches('[data-reveal-stagger]')) {
            $$(':scope > *', el).forEach((child, i) => {
              setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translate3d(0,0,0)';
                child.style.transition = 'opacity 1s var(--ease-out), transform 1s var(--ease-out)';
              }, i * 90);
            });
          }

          io.unobserve(el);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -80px 0px' }
    );

    $$('[data-reveal], [data-split], [data-reveal-stagger]').forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     Hero entrance — gechoreografeerde sequence
     ---------------------------------------------------------- */
  function heroEntrance() {
    if (reduced) return;
    const hero = $('[data-hero-enter]');
    if (!hero) return;

    const eyebrow = $('[data-hero-eyebrow]', hero);
    const title = $('[data-hero-title]', hero);
    const lead = $('[data-hero-lead]', hero);
    const cta = $('[data-hero-cta]', hero);
    const meta = $('[data-hero-meta]', hero);
    const visual = $('[data-hero-visual]', hero);

    const apply = (el, t = 0, dist = 24) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = `translate3d(0,${dist}px,0)`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.transition = 'opacity 1.05s var(--ease-out), transform 1.05s var(--ease-out)';
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0,0,0)';
        }, t);
      });
    };

    apply(eyebrow, 100, 14);
    if (title && title.matches('[data-split]')) {
      revealSplit(title, 240);
    } else {
      apply(title, 240, 32);
    }
    apply(lead, 700, 22);
    apply(cta, 880, 18);
    apply(meta, 1020, 12);

    if (visual) {
      visual.style.opacity = '0';
      visual.style.transform = 'translate3d(0,40px,0) scale(0.96)';
      visual.style.filter = 'blur(8px)';
      requestAnimationFrame(() => {
        setTimeout(() => {
          visual.style.transition =
            'opacity 1.4s var(--ease-out), transform 1.4s var(--ease-out), filter 1.4s var(--ease-out)';
          visual.style.opacity = '1';
          visual.style.transform = 'translate3d(0,0,0) scale(1)';
          visual.style.filter = 'blur(0)';
        }, 200);
      });
    }
  }

  /* ----------------------------------------------------------
     Page transitions — wipe op interne links
     ---------------------------------------------------------- */
  function pageTransitions() {
    if (reduced) return;
    const wipe = document.createElement('div');
    wipe.className = 'page-wipe';
    wipe.innerHTML = `<span class="page-wipe-mark">BS</span>`;
    document.body.appendChild(wipe);

    requestAnimationFrame(() => {
      wipe.classList.add('is-arriving');
      setTimeout(() => {
        wipe.classList.remove('is-arriving');
        wipe.style.transform = 'translateY(-100%)';
      }, 600);
    });

    const internal = (a) => {
      if (!a.href) return false;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return false;
      if (a.target === '_blank') return false;
      if (a.hasAttribute('download')) return false;
      if (a.dataset.noTransition === 'true') return false;
      if (url.pathname === location.pathname) return false;
      return true;
    };

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a || !internal(a)) return;
      e.preventDefault();
      wipe.style.transform = 'translateY(100%)';
      wipe.classList.remove('is-arriving');
      requestAnimationFrame(() => {
        wipe.classList.add('is-leaving');
        setTimeout(() => { window.location.href = a.href; }, 540);
      });
    });
  }

  /* ----------------------------------------------------------
     Parallax bubbles op scroll
     ---------------------------------------------------------- */
  function parallax() {
    if (reduced) return;
    const items = $$('[data-parallax]');
    if (!items.length) return;

    const update = () => {
      const y = window.scrollY;
      items.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        el.style.transform = `translate3d(0, ${y * speed * -1}px, 0)`;
      });
    };

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      },
      { passive: true }
    );
    update();
  }

  /* ----------------------------------------------------------
     Magnetic buttons — lichte attractie naar cursor
     ---------------------------------------------------------- */
  function magnetic() {
    if (reduced) return;
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.22}px, 0)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ----------------------------------------------------------
     FAQ — exclusieve open
     ---------------------------------------------------------- */
  function faq() {
    const items = $$('.faq-item');
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  /* ----------------------------------------------------------
     Boot
     ---------------------------------------------------------- */
  function boot() {
    renderBubbles();
    splitTitles();
    header();
    mobileMenu();
    observe();
    heroEntrance();
    parallax();
    magnetic();
    faq();
    pageTransitions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
