import './style.css'

// Add scroll effect to navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
    navbar.firstElementChild.classList.remove('md:bg-transparent', 'md:shadow-none');
    navbar.firstElementChild.classList.add('md:bg-white/90', 'md:shadow-sm');
  } else {
    navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
    navbar.firstElementChild.classList.add('md:bg-transparent', 'md:shadow-none');
    navbar.firstElementChild.classList.remove('md:bg-white/90', 'md:shadow-sm');
  }
});

document.documentElement.classList.add('js-active');

// Language Toggle Logic
const langEnBtns = document.querySelectorAll('.lang-en');
const langTrBtns = document.querySelectorAll('.lang-tr');

const translations = {
  EN: {
    brand_title: 'Voca: English Vocabulary',
    brand_title_short: 'Voca',
    headline: 'Master English<br/>Vocabulary with <span class="text-[var(--color-primary)]">Voca.</span>',
    hero_subheadline: 'An encouraging way to learn, built specifically for English learners.',
    beta_instructions: 'Voca is currently in its closed testing phase. To join the beta and start learning, please send an email to <a href="mailto:closedbeta@voca.com.tr" class="text-[var(--color-primary)] font-bold hover:underline">closedbeta@voca.com.tr</a> with the email address associated with your Google Play account.',
    contact_support: 'Contact Support',
    get_in_touch: 'Get in Touch',
    now_available: 'Now available on Android',
    key_features_header: 'See Voca in Action',
    features_subheadline: 'Explore features designed to make language learning intuitive, effective, and beautiful.',
    feature1_title: 'Comprehensive Word Library',
    feature1_desc: 'Access thousands of essential English words tailored for your level.',
    feature2_title: 'Effective and Permanent Learning',
    feature2_desc: 'Don\'t just memorize words, truly learn them. Our memory-based system ensures words stick in your mind.',
    feature3_title: 'Detailed Progress Tracking',
    feature3_desc: 'Track your progress daily and stay motivated as you learn.',
    here_to_help: 'We\'re here to help',
    prefer_email: 'Prefer direct email?',
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
    hero_subheadline: 'İngilizce öğrenenler için özenle tasarlanmış, motive edici bir deneyim.',
    beta_instructions: 'Voca şu anda kapalı test aşamasındadır. Beta grubuna katılmak ve öğrenmeye başlamak için, Google Play hesabınıza bağlı e-posta adresinizi <a href="mailto:closedbeta@voca.com.tr" class="text-[var(--color-primary)] font-bold hover:underline">closedbeta@voca.com.tr</a> adresine gönderebilirsiniz.',
    contact_support: 'İletişime Geçin',
    get_in_touch: 'Bize Ulaşın',
    now_available: 'Android\'de Yayında',
    key_features_header: 'Voca Sizin İçin Neler Yapabilir?',
    features_subheadline: 'Dil öğrenimini etkili ve eğlenceli bir deneyime dönüştürmek için tasarlanmış özelliklerimizi keşfedin.',
    feature1_title: 'Kapsamlı Kelime Kütüphanesi',
    feature1_desc: 'Seviyenize uygun binlerce temel İngilizce kelimeye erişin.',
    feature2_title: 'Kalıcı ve Etkili Öğrenim',
    feature2_desc: 'Kelime ezberlemek yerine onları gerçekten öğrenin. Hafıza tekniklerine dayalı sistemimizle kelimeler artık aklınızdan çıkmayacak.',
    feature3_title: 'Detaylı Gelişim Takibi',
    feature3_desc: 'Günlük gelişiminizi takip edin ve öğrenirken motive kalın.',
    here_to_help: 'Yardımcı olmaktan memnuniyet duyarız',
    prefer_email: 'Doğrudan e-posta mı tercih edersiniz?',
    support_email: 'destek@voca.com.tr',
    nav_about: 'Voca Nedir?',
    nav_privacy: 'Gizlilik Politikası',
    nav_back_voca: 'Voca\'ya Geri Dön',
    instagram_message: 'Herhangi bir sorunuz varsa, lütfen bana dm gönderin',
    about_title: 'Voca Nedir?',
    about_intro: 'Voca, öğrenmeye odaklanan bir yol arkadaşıdır. Günde sadece 10 dakika harcayarak İngilizcenizi kolayca geliştirebilirsiniz.',
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

  if (lang === 'EN') {
    langEnBtns.forEach(btn => {
      btn.classList.add('text-[var(--color-primary)]', 'font-bold');
      btn.classList.remove('text-slate-400', 'hover:text-slate-600');
    });
    langTrBtns.forEach(btn => {
      btn.classList.remove('text-[var(--color-primary)]', 'font-bold');
      btn.classList.add('text-slate-400', 'hover:text-slate-600');
    });
  } else {
    langTrBtns.forEach(btn => {
      btn.classList.add('text-[var(--color-primary)]', 'font-bold');
      btn.classList.remove('text-slate-400', 'hover:text-slate-600');
    });
    langEnBtns.forEach(btn => {
      btn.classList.remove('text-[var(--color-primary)]', 'font-bold');
      btn.classList.add('text-slate-400', 'hover:text-slate-600');
    });
  }

  // Apply Translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'IMG') {
        el.src = translations[lang][key];
      } else if (el.tagName === 'A' && el.hasAttribute('href') && el.getAttribute('href').startsWith('mailto:')) {
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

// Initialize language from localStorage
const savedLang = localStorage.getItem('voca_lang') || 'EN';
setLanguage(savedLang);

// Scroll Reveal Logic
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observerOptions = {
  root: null,
  rootMargin: window.innerWidth < 768 ? '0px 0px -10% 0px' : '0px 0px -20% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  if (!prefersReducedMotion) {
    document.querySelectorAll('.reveal-up').forEach(el => {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('active'));
  }
});


