import './style.css'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   NAVBAR — condense on scroll + scroll progress bar
   ============================================================ */
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scroll-progress');

let ticking = false;
function onScroll() {
  const y = window.scrollY;
  if (navbar) navbar.classList.toggle('scrolled', y > 24);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(y / max, 1) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });
onScroll();

/* ============================================================
   LANGUAGE TOGGLE + i18n  (logic preserved)
   ============================================================ */
const langEnBtns = document.querySelectorAll('.lang-en');
const langTrBtns = document.querySelectorAll('.lang-tr');

const translations = {
  EN: {
    brand_title: 'Voca: English Vocabulary',
    brand_title_short: 'Voca',
    headline: 'Master English<br/>Vocabulary with <span class="text-[var(--color-primary)]">Voca.</span>',
    hero_subheadline: 'An encouraging way to learn, built specifically for English learners.',

    contact_support: 'Contact Support',
    get_in_touch: 'Get in Touch',
    now_available: 'Now available on iOS & Android',
    key_features_header: 'See Voca in Action',
    features_subheadline: 'Explore features designed to make language learning intuitive, effective, and beautiful.',
    feature1_title: 'Comprehensive Word Library',
    feature1_desc: 'Access thousands of essential English words tailored for your level.',
    feature2_title: 'Effective and Permanent Learning',
    feature2_desc: 'Don\'t just memorize words, truly learn them. Our memory-based system ensures words stick in your mind.',
    feature3_title: 'Detailed Progress Tracking',
    feature3_desc: 'Track your progress daily and stay motivated as you learn.',
    here_to_help: 'We\'re here to help',
    click_to_copy: 'Click to copy',
    support_email: 'support@voca.com.tr',
    nav_about: 'What is Voca?',
    nav_privacy: 'Privacy Policy',
    nav_back_voca: 'Go back to Voca',
    instagram_message: 'If you have any questions, please feel free to send me a dm',
    about_title: 'What is Voca?',
    about_intro: 'Voca is a simple companion focused solely on learning. Improve your English easily by spending just 10 minutes a day.',
    tour_step1_title: 'Welcome to Voca',
    tour_step1_desc: 'Master English vocabulary through immersive, level-based practice.',
    tour_step2_title: 'Bite-Sized Learning',
    tour_step2_desc: 'Learn vocabulary in perfectly sized, manageable chunks.',
    tour_step3_title: 'Swipe to Learn',
    tour_step3_desc: 'Navigate through categories and favorite words for later review.',
    img_tour1: '/Screenshot_20260428_183018.png',
    img_tour2: '/Screenshot_20260428_183026.png',
    img_tour3: '/Screenshot_20260428_183031.png',
    img_hero: '/hero-app.jpg',
    img_feature1: '/feature1.jpg',
    img_feature2: '/feature2.jpg',
    img_feature3: '/feature3.jpg'
  },
  TR: {
    brand_title: 'Voca: English Vocabulary',
    brand_title_short: 'Voca',
    headline: '<span class="text-[var(--color-primary)]">Voca</span> ile İngilizcenizi Geliştirin',
    hero_subheadline: 'İngilizce öğrenenler için özenle tasarlanmış, eğlenceli ve sürükleyici bir deneyim için hemen Voca’yı indirin.',

    contact_support: 'İletişime Geçin',
    get_in_touch: 'Bize Ulaşın',
    now_available: 'iOS ve Android\'de Yayında',
    key_features_header: 'Voca Sizin İçin Neler Yapabilir?',
    features_subheadline: 'Dil öğrenimini etkili ve eğlenceli bir deneyime dönüştürmek için tasarlanmış özelliklerimizi keşfedin.',
    feature1_title: 'Kapsamlı Kelime Kütüphanesi',
    feature1_desc: 'Seviyenize uygun binlerce temel İngilizce kelimeye erişin.',
    feature2_title: 'Kalıcı ve Etkili Öğrenim',
    feature2_desc: 'Kelime ezberlemek yerine onları gerçekten öğrenin. Hafıza tekniklerine dayalı sistemimizle kelimeler artık aklınızdan çıkmayacak.',
    feature3_title: 'Detaylı Gelişim Takibi',
    feature3_desc: 'Günlük gelişiminizi takip edin ve öğrenirken motive kalın.',
    here_to_help: 'Size yardım etmek için buradayız',
    click_to_copy: 'Kopyalamak için tıklayın',
    support_email: 'destek@voca.com.tr',
    nav_about: 'Voca Nedir?',
    nav_privacy: 'Gizlilik Politikası',
    nav_back_voca: 'Voca\'ya Geri Dön',
    instagram_message: 'Herhangi bir sorunuz varsa, bana dm göndermekten çekinmeyin',
    about_title: 'Voca Nedir?',
    about_intro: 'Voca, öğrenme odaklı yol arkadaşınızdır. Günde sadece 10 dakika harcayarak İngilizcenizi kolayca geliştirebilirsiniz.',
    tour_step1_title: 'Voca\'ya Hoş Geldin!',
    tour_step1_desc: 'Seviyenize uygun alıştırmalarla İngilizce kelime bilginizi geliştirin.',
    tour_step2_title: 'Adım Adım Öğrenme',
    tour_step2_desc: 'Kelime öğrenmeyi yönetilebilir, küçük parçalara bölün.',
    tour_step3_title: 'Kaydırarak Öğren',
    tour_step3_desc: 'Kategoriler arasında gezinin ve daha sonra tekrar etmek için kelimeleri favorileyin.',
    img_tour1: '/Screenshot_20260428_183058.png',
    img_tour2: '/Screenshot_20260428_183102.png',
    img_tour3: '/Screenshot_20260428_183107.png',
    img_hero: '/hero-app-tr.jpg',
    img_feature1: '/feature1-tr.jpg',
    img_feature2: '/feature2-tr.jpg',
    img_feature3: '/feature3-tr.jpg'
  }
};

function setLanguage(lang) {
  localStorage.setItem('voca_lang', lang);

  langEnBtns.forEach(btn => btn.classList.toggle('is-active', lang === 'EN'));
  langTrBtns.forEach(btn => btn.classList.toggle('is-active', lang === 'TR'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'IMG') {
        el.src = translations[lang][key];
      } else if (el.tagName === 'A' && el.hasAttribute('href') && el.getAttribute('href').startsWith('mailto:') && key === 'support_email') {
        el.href = `mailto:${translations[lang][key]}`;
        el.innerHTML = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

langEnBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('EN')));
langTrBtns.forEach(btn => btn.addEventListener('click', () => setLanguage('TR')));

const savedLang = localStorage.getItem('voca_lang') || 'EN';
setLanguage(savedLang);

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (prefersReducedMotion) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay');
        if (delay) entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  items.forEach(el => io.observe(el));
}

/* ============================================================
   PARALLAX (scroll-driven)
   ============================================================ */
function initParallax() {
  if (prefersReducedMotion) return;
  const layers = [...document.querySelectorAll('[data-parallax]')];
  if (!layers.length) return;
  let raf = false;
  function update() {
    const vh = window.innerHeight;
    layers.forEach(el => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - vh / 2) / vh;
      const speed = parseFloat(el.getAttribute('data-speed')) || -0.08;
      el.style.transform = `translate3d(0, ${offset * speed * 100}px, 0)`;
    });
    raf = false;
  }
  window.addEventListener('scroll', () => {
    if (!raf) { requestAnimationFrame(update); raf = true; }
  }, { passive: true });
  update();
}

/* ============================================================
   POINTER TILT (3D)
   ============================================================ */
function initTilt() {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('[data-tilt]').forEach(el => {
    const max = 9;
    let frame;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    });
  });
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagnetic() {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = 0.3;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ============================================================
   EMAIL CARD — copy to clipboard (logic preserved)
   ============================================================ */
function initEmailCopy() {
  const emailCard = document.getElementById('email-card');
  if (!emailCard) return;
  emailCard.addEventListener('click', () => {
    const emailText = document.getElementById('email-text').textContent.trim();
    navigator.clipboard.writeText(emailText).then(() => {
      const emailIcon = document.getElementById('email-icon');
      const checkIcon = document.getElementById('check-icon');
      const tooltip = document.getElementById('copy-tooltip');
      const isTurkish = localStorage.getItem('voca_lang') === 'TR';

      emailIcon.classList.add('hidden');
      checkIcon.classList.remove('hidden');
      tooltip.textContent = isTurkish ? 'Kopyalandı!' : 'Copied!';
      tooltip.classList.add('text-green-600');

      setTimeout(() => {
        emailIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        tooltip.textContent = isTurkish ? 'Kopyalamak için tıklayın' : 'Click to copy';
        tooltip.classList.remove('text-green-600');
      }, 2000);
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  initReveal();
  initParallax();
  initTilt();
  initMagnetic();
  initEmailCopy();
  // Trigger hero entrance on next frame
  requestAnimationFrame(() => document.body.classList.add('hero-ready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
