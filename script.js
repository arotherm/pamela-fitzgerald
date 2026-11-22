/* Nurturing Roots Therapy — motion layer (lean, standard path)
   Static-first: the page reads perfectly with JS off. Every animation
   below uses gsap.from() / fromTo(), so nothing is hidden before JS runs.
   Reduced-motion users get no animation and no smooth scroll.
   No extra libraries, no flagship pass — GSAP + ScrollTrigger + Lenis
   only, transform/opacity only, once-only entrances except the two
   scrubbed moments (hero image, moment line) and one slow sunflower
   breath. */

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

  /* Hero entrance — word-by-word headline, then the rest settles. */
  var h1 = document.querySelector('.hero-copy h1');
  if (h1) {
    var h1Words = h1.textContent.trim().split(/\s+/);
    h1.innerHTML = h1Words.map(function (w) { return '<span class="h1-w" style="display:inline-block">' + w + '</span>'; }).join(' ');
    gsap.from('.hero-copy h1 .h1-w', { y: 30, opacity: 0, rotate: 2, duration: 0.8, stagger: 0.09, ease: 'power3.out' });
  } else {
    gsap.from('.hero-copy h1', { y: 26, opacity: 0, duration: 0.9, ease: 'power3.out' });
  }
  gsap.from('.hero-copy .eyebrow', { y: 14, opacity: 0, duration: 0.7, ease: 'power2.out' });
  gsap.from('.hero-copy .lede', { y: 20, opacity: 0, duration: 0.8, delay: 0.28, ease: 'power2.out' });
  gsap.from('.hero-ctas, .hero-note', { y: 16, opacity: 0, duration: 0.7, delay: 0.4, stagger: 0.08, ease: 'power2.out' });
  gsap.from('.hero-figure', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
  gsap.from('.hero-figure figcaption', { y: 10, opacity: 0, duration: 0.7, delay: 0.7, ease: 'power2.out' });

  /* Hero image parallax — the one slow movement. */
  gsap.to('.hero-figure img', {
    yPercent: 6,
    scale: 1.04,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* Hero sunflower — slow breath, plus a gentle turn as you scroll away. */
  var sunflower = document.querySelector('.hero-sunflower');
  if (sunflower) {
    gsap.to(sunflower, { scale: 1.06, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, transformOrigin: '50% 50%' });
    gsap.to(sunflower, {
      rotation: 45,
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

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

  /* Section headings — eyebrow and title rise together, once. */
  gsap.utils.toArray('.offerings, .about, .areas, .events, .contact').forEach(function (section) {
    var heads = section.querySelectorAll(':scope > .wrap > .eyebrow, :scope > .wrap > h2, :scope > .wrap > .about-copy > .eyebrow, :scope > .wrap > .about-copy > h2, :scope > .wrap > .contact-copy > .eyebrow, :scope > .wrap > .contact-copy > h2');
    if (heads.length) {
      gsap.from(heads, {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true }
      });
    }
  });

  /* Staggered groups — cards, area pills, past events. */
  function batchIn(selector, vars) {
    ScrollTrigger.batch(selector, {
      start: 'top 88%',
      once: true,
      onEnter: function (batch) { gsap.from(batch, vars); }
    });
  }
  batchIn('.offering', { y: 28, opacity: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out' });
  batchIn('.area-list li', { y: 14, opacity: 0, scale: 0.94, duration: 0.5, stagger: 0.04, ease: 'power2.out' });
  batchIn('.event-item', { y: 24, opacity: 0, duration: 0.65, stagger: 0.09, ease: 'power2.out' });

  /* Single once-only entrances. */
  gsap.utils.toArray('.friday-callout, .about-copy, .about-photo, .contact-copy, .contact-form, .site-footer').forEach(function (el) {
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
