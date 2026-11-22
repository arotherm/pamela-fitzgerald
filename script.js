/* Nurturing Roots Therapy — motion layer (lean, standard path)
   Static-first: the page reads perfectly with JS off. Every animation
   below uses gsap.from(), so nothing is hidden before JS runs.
   Reduced-motion users get no animation and no smooth scroll. */

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Smooth scroll (Lenis), wired to GSAP's ticker. */
  var lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* In-page anchors respect Lenis when it is running. */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -72 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Hero entrance — one quiet settle, no flash. */
  gsap.from('.hero-copy .eyebrow', { y: 14, opacity: 0, duration: 0.7, ease: 'power2.out' });
  gsap.from('.hero-copy h1', { y: 26, opacity: 0, duration: 0.9, delay: 0.08, ease: 'power3.out' });
  gsap.from('.hero-copy .lede', { y: 20, opacity: 0, duration: 0.8, delay: 0.18, ease: 'power2.out' });
  gsap.from('.hero-ctas, .hero-note', { y: 16, opacity: 0, duration: 0.7, delay: 0.28, stagger: 0.08, ease: 'power2.out' });
  gsap.from('.hero-figure', { y: 30, opacity: 0, duration: 1, delay: 0.15, ease: 'power3.out' });

  /* Hero image parallax — the one slow movement. */
  gsap.to('.hero-figure img', {
    yPercent: 6,
    scale: 1.04,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* The moment line — word-by-word scrub reveal. */
  var line = document.querySelector('[data-scrub-words]');
  if (line) {
    var words = line.textContent.trim().split(/\s+/);
    line.innerHTML = words.map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    gsap.fromTo('.moment-line .w',
      { opacity: 0.16 },
      {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
        scrollTrigger: { trigger: '.moment', start: 'top 78%', end: 'bottom 45%', scrub: true }
      });
  }

  /* Section entrances — small, once, staggered. */
  gsap.utils.toArray('.offering, .friday-callout, .about-copy, .about-photo, .area-list li, .contact-copy, .contact-form').forEach(function (el) {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
