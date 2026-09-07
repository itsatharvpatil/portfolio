(() => {
  const html = document.documentElement;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  function applyTheme(theme) {
    html.dataset.theme = theme;
    const light = theme === 'light';
    if (themeIcon) themeIcon.textContent = light ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = light ? 'Light' : 'Dark';
    themeToggle?.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f4f6f2' : '#070b14');
  }
  const savedTheme = localStorage.getItem('atharv-theme');
  applyTheme(savedTheme || (prefersLight.matches ? 'light' : 'dark'));
  themeToggle?.addEventListener('click', () => {
    const next = html.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('atharv-theme', next);
  });
  prefersLight.addEventListener?.('change', e => {
    if (!localStorage.getItem('atharv-theme')) applyTheme(e.matches ? 'light' : 'dark');
  });

  // Mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.getElementById('navLinks');
  mobileMenu?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    mobileMenu.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reading progress
  const progress = document.getElementById('readingProgress');
  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Reveal animation
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Scrollspy
  const sections = [...document.querySelectorAll('main section[id]')];
  const navItems = [...document.querySelectorAll('.nav-links a[data-section]')];
  const navMap = new Map(navItems.map(a => [a.dataset.section, a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(a => a.classList.remove('active'));
      navMap.get(entry.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => spy.observe(section));

  // Project category filter
  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.project-card')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(/\s+/);
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  }));

  // Skill -> work highlighting
  const skillButtons = [...document.querySelectorAll('.skill-tag[data-skill]')];
  const skillBar = document.getElementById('skillFilter');
  const skillText = document.getElementById('skillFilterText');
  const clearSkill = document.getElementById('clearSkill');
  let activeSkill = null;
  function resetSkill() {
    activeSkill = null;
    cards.forEach(card => card.classList.remove('dimmed', 'matched'));
    document.querySelectorAll('.timeline-item[data-tech]').forEach(item => item.classList.remove('dimmed', 'matched'));
    skillButtons.forEach(btn => btn.classList.remove('selected'));
    skillBar.classList.remove('on');
  }
  function applySkill(skill, label) {
    if (activeSkill === skill) { resetSkill(); return; }
    activeSkill = skill;
    const allWork = [...cards, ...document.querySelectorAll('.timeline-item[data-tech]')];
    let count = 0;
    allWork.forEach(item => {
      const hit = (item.dataset.tech || '').split(/\s+/).includes(skill);
      item.classList.toggle('dimmed', !hit);
      item.classList.toggle('matched', hit);
      if (hit) count += 1;
    });
    skillButtons.forEach(btn => btn.classList.toggle('selected', btn.dataset.skill === skill));
    skillText.textContent = `${label} · highlighted in ${count} place${count === 1 ? '' : 's'}`;
    skillBar.classList.add('on');
    document.getElementById('projects')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
  skillButtons.forEach(btn => btn.addEventListener('click', () => applySkill(btn.dataset.skill, btn.textContent.trim())));
  clearSkill?.addEventListener('click', resetSkill);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') resetSkill(); });

  // Ventilator schematic replay: the green fallback line stays meaningful during the prolonged phase.
  const ventReplay = document.getElementById('ventReplay');
  const fallback = document.getElementById('fallbackTrace');
  const detect = document.getElementById('detectTrace');
  let dashTimer = null;
  ventReplay?.addEventListener('click', () => {
    if (dashTimer) cancelAnimationFrame(dashTimer);
    const start = performance.now();
    const duration = reduceMotion ? 1 : 2300;
    const greenLength = fallback.getTotalLength?.() || 1800;
    const redLength = detect.getTotalLength?.() || 1800;
    fallback.style.strokeDasharray = `${greenLength}`;
    detect.style.strokeDasharray = `${redLength}`;
    fallback.style.strokeDashoffset = `${greenLength}`;
    detect.style.strokeDashoffset = `${redLength}`;
    const step = now => {
      const t = Math.min((now - start) / duration, 1);
      fallback.style.strokeDashoffset = `${greenLength * (1 - t)}`;
      detect.style.strokeDashoffset = `${redLength * (1 - t)}`;
      if (t < 1) dashTimer = requestAnimationFrame(step);
      else { fallback.style.strokeDasharray = 'none'; detect.style.strokeDasharray = 'none'; }
    };
    requestAnimationFrame(step);
  });
})();
