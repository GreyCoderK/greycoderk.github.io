// ===== TRANSLATIONS =====
const translations = {
  en: {
    available: 'Available for opportunities',
    greeting: '&lt;hello world /&gt;',
    firstName: 'Alain',
    lastName: 'Kossonou',
    titleStatic: 'I build',
    heroDesc: 'Software Engineer with <strong>5+ years</strong> of experience crafting backend systems, REST APIs, and developer tools. Currently shipping production code with <strong>Java/Spring Boot</strong> while pursuing an Engineering degree at <strong>CNAM</strong>.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    hireMe: 'Hire Me',
    yearsExp: 'Years Exp.',
    companies: 'Companies',
    projects: 'Projects',
    // Sections
    about: 'About Me',
    experience: 'Experience',
    featuredProjects: 'Featured Projects',
    skills: 'Tech Stack',
    education: 'Education',
    contact: 'Contact',
    // About
    aboutP1: 'I started my journey in <strong>2017</strong> with PHP and quickly expanded into building full systems — from APIs to mobile apps to data pipelines.',
    aboutP2: 'Over the years, I\'ve shipped products at <strong>SaH Analytics</strong>, <strong>KeyOpsTech</strong>, and <strong>Adjemin</strong>. I also led data analysis at <strong>NaN</strong> using Python, R, and machine learning.',
    aboutP3: 'Today I write Java/Spring Boot services remotely and study engineering at CNAM. On the side, I build open-source tools like <a href="https://github.com/GreyCoderK/lore" target="_blank">lore</a> and dive into reverse engineering, blockchain, and WebAssembly.',
    // Highlights
    h1Title: 'Backend-first', h1Desc: 'APIs, microservices, clean architecture',
    h2Title: 'Data-aware', h2Desc: 'ML, analytics, data pipelines',
    h3Title: 'Security-minded', h3Desc: 'Reverse engineering, systems thinking',
    h4Title: 'Always learning', h4Desc: 'Engineering degree at CNAM',
    // Experience
    exp1Title: 'Software Engineer <span class="accent">@ Remote</span>',
    exp1Desc: 'Building and maintaining backend services and APIs in a distributed team environment.',
    exp2Title: 'Full-stack Developer <span class="accent">@ SaH Analytics International</span>',
    exp2Desc: 'Built fullstack web applications and internal tools for data analytics operations.',
    exp3Title: 'API Developer <span class="accent">@ KeyOpsTech / KOTscan</span>',
    exp3Desc: 'Designed REST APIs using Symfony with DDD, CQRS, and TDD. Implemented clean code practices, code reviews, and automated testing with Behat and Newman/Postman.',
    exp4Title: 'Backend & Mobile Developer <span class="accent">@ Adjemin</span>',
    exp4Desc: 'Shipped mobile apps with Flutter and built fullstack web services with Laravel. Developed SDK integrations and managed web project delivery.',
    exp5Title: 'Lead Data Analyst <span class="accent">@ NaN Digital Academy</span>',
    exp5Desc: 'Led data analysis projects using Python, R, and machine learning. Managed relational and NoSQL databases, built data visualizations and predictive models.',
    // Featured
    featuredLabel: 'Featured Project',
    loreDesc: 'A CLI tool that captures the <em>why</em> behind code changes. Your code knows what — Lore knows why. Built for teams that want to preserve institutional knowledge alongside their codebase.',
    // Contact
    contactTitle: "Let's Work Together",
    contactText: "I'm open to new opportunities, collaborations, and interesting conversations about technology. Whether you have a project in mind or just want to say hi — my inbox is always open.",
    sayHello: 'Say Hello',
    // Footer
    footerCredit: 'Designed & Built by',
    // Education
    inProgress: 'In Progress',
    engDegree: 'Engineering Degree',
    engDesc: 'Engineering cycle in computer science',
    dataSci: 'Data Scientist With Python',
    juniorDev: 'Junior Developer Certificate',
    bts: 'BTS in Programming',
    certTitle: 'Certifications',
    // Typing
    typingWords: ['backend systems.', 'REST APIs.', 'CLI tools.', 'data pipelines.', 'mobile apps.']
  },
  fr: {
    available: 'Disponible pour des opportunités',
    greeting: '&lt;bonjour monde /&gt;',
    firstName: 'Alain',
    lastName: 'Kossonou',
    titleStatic: 'Je construis',
    heroDesc: 'Ingénieur logiciel avec <strong>5+ ans</strong> d\'expérience dans la conception de systèmes backend, d\'APIs REST et d\'outils pour développeurs. Actuellement en production avec <strong>Java/Spring Boot</strong> tout en préparant un diplôme d\'ingénieur au <strong>CNAM</strong>.',
    viewProjects: 'Voir les Projets',
    getInTouch: 'Me Contacter',
    hireMe: 'Recruter',
    yearsExp: 'Ans d\'exp.',
    companies: 'Entreprises',
    projects: 'Projets',
    about: 'À Propos',
    experience: 'Expérience',
    featuredProjects: 'Projets Principaux',
    skills: 'Compétences',
    education: 'Formation',
    contact: 'Contact',
    aboutP1: 'J\'ai commencé mon parcours en <strong>2017</strong> avec PHP et j\'ai rapidement évolué vers la construction de systèmes complets — des APIs aux applications mobiles en passant par les pipelines de données.',
    aboutP2: 'Au fil des années, j\'ai livré des produits chez <strong>SaH Analytics</strong>, <strong>KeyOpsTech</strong> et <strong>Adjemin</strong>. J\'ai également dirigé l\'analyse de données chez <strong>NaN</strong> avec Python, R et le machine learning.',
    aboutP3: 'Aujourd\'hui, je développe des services Java/Spring Boot en remote et j\'étudie l\'ingénierie au CNAM. En parallèle, je construis des outils open-source comme <a href="https://github.com/GreyCoderK/lore" target="_blank">lore</a> et j\'explore le reverse engineering, la blockchain et WebAssembly.',
    h1Title: 'Backend-first', h1Desc: 'APIs, microservices, architecture propre',
    h2Title: 'Data-aware', h2Desc: 'ML, analytics, pipelines de données',
    h3Title: 'Sécurité', h3Desc: 'Reverse engineering, pensée systèmes',
    h4Title: 'Toujours apprendre', h4Desc: 'Diplôme d\'ingénieur au CNAM',
    exp1Title: 'Ingénieur Logiciel <span class="accent">@ Remote</span>',
    exp1Desc: 'Développement et maintenance de services backend et APIs dans une équipe distribuée.',
    exp2Title: 'Développeur Full-stack <span class="accent">@ SaH Analytics International</span>',
    exp2Desc: 'Construction d\'applications web fullstack et outils internes pour les opérations d\'analyse de données.',
    exp3Title: 'Développeur API <span class="accent">@ KeyOpsTech / KOTscan</span>',
    exp3Desc: 'Conception d\'APIs REST avec Symfony en DDD, CQRS et TDD. Pratiques de clean code, revues de code et tests automatisés avec Behat et Newman/Postman.',
    exp4Title: 'Développeur Backend & Mobile <span class="accent">@ Adjemin</span>',
    exp4Desc: 'Applications mobiles avec Flutter et services web fullstack avec Laravel. Développement d\'intégrations SDK et gestion de projets web.',
    exp5Title: 'Lead Data Analyst <span class="accent">@ NaN Digital Academy</span>',
    exp5Desc: 'Direction de projets d\'analyse de données avec Python, R et machine learning. Gestion de bases relationnelles et NoSQL, visualisations et modèles prédictifs.',
    featuredLabel: 'Projet Principal',
    loreDesc: 'Un outil CLI qui capture le <em>pourquoi</em> derrière les changements de code. Votre code sait quoi — Lore sait pourquoi. Conçu pour les équipes qui veulent préserver le savoir institutionnel.',
    contactTitle: 'Travaillons Ensemble',
    contactText: 'Je suis ouvert aux nouvelles opportunités, collaborations et conversations intéressantes sur la technologie. Que vous ayez un projet en tête ou que vous vouliez simplement dire bonjour — ma boîte de réception est toujours ouverte.',
    sayHello: 'Dire Bonjour',
    footerCredit: 'Conçu & Construit par',
    inProgress: 'En cours',
    engDegree: 'Diplôme d\'Ingénieur',
    engDesc: 'Cycle ingénieur en informatique',
    dataSci: 'Data Scientist With Python',
    juniorDev: 'Certificat Développeur Junior',
    bts: 'BTS en Programmation',
    certTitle: 'Certifications',
    typingWords: ['des systèmes backend.', 'des APIs REST.', 'des outils CLI.', 'des pipelines de données.', 'des apps mobiles.']
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  // Helper
  const setHTML = (sel, val) => { const el = document.querySelector(sel); if (el) el.innerHTML = val; };
  const setAll = (sel, vals) => { document.querySelectorAll(sel).forEach((el, i) => { if (vals[i] !== undefined) el.innerHTML = vals[i]; }); };

  setHTML('.hero__badge', `${t.available}`);
  // Re-add pulse dot
  const badge = document.querySelector('.hero__badge');
  if (badge && !badge.innerHTML.includes('::before')) {
    badge.innerHTML = t.available;
  }
  setHTML('.hero__greeting', t.greeting);
  setHTML('.hero__name-line:first-child', t.firstName);
  setHTML('.hero__name-line--gradient', t.lastName + '<span class="accent">.</span>');
  setHTML('.hero__title-static', t.titleStatic);
  setHTML('.hero__description', t.heroDesc);
  setHTML('.hero__cta .btn--primary', `<span class="btn__icon">&#9654;</span> ${t.viewProjects}`);
  setHTML('.hero__cta .btn--glass', t.getInTouch);
  setHTML('.nav__cta', t.hireMe);

  // Stats labels
  setAll('.hero__stat-label', [t.yearsExp, t.companies, t.projects]);

  // Nav links
  const navTexts = [t.about, t.experience, t.featuredProjects, t.skills, t.contact];
  document.querySelectorAll('.nav__links a').forEach((a, i) => { if (navTexts[i]) a.textContent = navTexts[i]; });

  // Section titles
  const sectionTitles = document.querySelectorAll('.section__title');
  const titleTexts = [t.about, t.experience, t.featuredProjects, t.skills, t.education];
  sectionTitles.forEach((el, i) => { if (titleTexts[i]) el.textContent = titleTexts[i]; });

  // About
  const aboutPs = document.querySelectorAll('.about__content p');
  if (aboutPs[0]) aboutPs[0].innerHTML = t.aboutP1;
  if (aboutPs[1]) aboutPs[1].innerHTML = t.aboutP2;
  if (aboutPs[2]) aboutPs[2].innerHTML = t.aboutP3;

  // Highlights
  const hCards = document.querySelectorAll('.highlight-card');
  const hData = [[t.h1Title,t.h1Desc],[t.h2Title,t.h2Desc],[t.h3Title,t.h3Desc],[t.h4Title,t.h4Desc]];
  hCards.forEach((c, i) => {
    if (hData[i]) {
      c.querySelector('h4').textContent = hData[i][0];
      c.querySelector('p').textContent = hData[i][1];
    }
  });

  // Experience
  const expItems = document.querySelectorAll('.timeline__card');
  const expData = [
    [t.exp1Title, t.exp1Desc],[t.exp2Title, t.exp2Desc],[t.exp3Title, t.exp3Desc],
    [t.exp4Title, t.exp4Desc],[t.exp5Title, t.exp5Desc]
  ];
  expItems.forEach((card, i) => {
    if (expData[i]) {
      card.querySelector('h3').innerHTML = expData[i][0];
      card.querySelector('p').innerHTML = expData[i][1];
    }
  });

  // Featured
  setHTML('.featured-project__label', t.featuredLabel);
  setHTML('.featured-project__desc p', t.loreDesc);

  // Contact
  setHTML('.contact__title', t.contactTitle);
  setHTML('.contact__text', t.contactText);
  setHTML('.section--contact .btn--primary', t.sayHello);

  // Footer
  setHTML('.footer__credit', `${t.footerCredit} <a href="https://github.com/GreyCoderK">Alain Kossonou</a>`);

  // Education
  setHTML('.edu-card__badge', t.inProgress);
  const eduCards = document.querySelectorAll('.edu-card h3');
  const eduTexts = [t.engDegree, t.dataSci, t.juniorDev, t.bts];
  eduCards.forEach((el, i) => { if (eduTexts[i]) el.textContent = eduTexts[i]; });
  setHTML('.edu-card__desc', t.engDesc);
  setHTML('.certifications h3', t.certTitle);

  // Lang button & html lang
  const langBtn = document.querySelector('.nav__lang');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  document.documentElement.lang = lang;

  // Restart typing
  startTypingHero(t.typingWords);

  // Restart terminal with correct language
  typeTerminal();
}

// ===== MOBILE NAV =====
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = toggle.querySelectorAll('span');
  const open = navLinks.classList.contains('active');
  spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = open ? '0' : '1';
  spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// ===== SCROLL PROGRESS + NAV STYLE =====
const nav = document.getElementById('nav');
const progressBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  // Progress bar
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / scrollHeight * 100) + '%';

  // Nav background
  nav.classList.toggle('scrolled', scrollTop > 50);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    navAnchors.forEach(a => {
      if (a.getAttribute('href') === '#' + id) {
        a.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  });
});

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.section__header, .about__content, .about__highlights, .highlight-card, ' +
  '.timeline__item, .project-card, .featured-project, .skill-group, ' +
  '.edu-card, .cert-item, .contact__inner, .hero__stat'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--i', i % 8);
  revealObserver.observe(el);
});

// ===== TYPING HERO TEXT =====
let typingTimeout;
function startTypingHero(words) {
  clearTimeout(typingTimeout);
  const el = document.getElementById('typingText');
  if (!el) return;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];
    if (!deleting) {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        deleting = true;
        typingTimeout = setTimeout(tick, 2000);
        return;
      }
      typingTimeout = setTimeout(tick, 80);
    } else {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      typingTimeout = setTimeout(tick, 40);
    }
  }
  tick();
}

// ===== TERMINAL TYPING =====
const terminalCommands = [
  {
    cmd: 'whoami',
    output: ['Software Engineer @ Remote']
  },
  {
    cmd: 'cat stack.conf',
    output: [
      'lang=Java,Go,Python,TypeScript',
      'framework=SpringBoot,NestJS',
      'infra=Docker,PostgreSQL,Redis'
    ]
  },
  {
    cmd: 'cat interests.txt',
    output: [
      'Reverse Engineering, Blockchain',
      'Machine Learning, WebAssembly'
    ]
  },
  {
    cmd: 'echo $LOCATION',
    output: ['Abidjan, Côte d\'Ivoire']
  }
];

let terminalTimers = [];

function clearTerminalTimers() {
  terminalTimers.forEach(t => clearTimeout(t));
  terminalTimers = [];
}

function typeTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;
  clearTerminalTimers();
  body.innerHTML = '';

  let cmdIdx = 0;
  let delay = 600;

  function scheduleCommand() {
    if (cmdIdx >= terminalCommands.length) {
      // Final blinking cursor
      const tid = setTimeout(() => {
        const cursorLine = document.createElement('p');
        cursorLine.innerHTML = '<span class="t-prompt">$</span> <span class="t-cursor">_</span>';
        body.appendChild(cursorLine);
      }, delay);
      terminalTimers.push(tid);
      return;
    }

    const command = terminalCommands[cmdIdx];
    const cmdText = command.cmd;

    // Create the command line element
    const cmdLine = document.createElement('p');
    cmdLine.innerHTML = '<span class="t-prompt">$</span> ';
    cmdLine.classList.add('t-line');

    // Add blinking cursor span that will be updated
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 't-typing-cursor';
    cursorSpan.textContent = '|';
    cmdLine.appendChild(cursorSpan);

    // Append line to body
    const tid1 = setTimeout(() => {
      body.appendChild(cmdLine);
      body.scrollTop = body.scrollHeight;

      // Type each character of the command
      let charIdx = 0;
      function typeChar() {
        if (charIdx < cmdText.length) {
          // Insert character before cursor
          const charNode = document.createTextNode(cmdText[charIdx]);
          cmdLine.insertBefore(charNode, cursorSpan);
          charIdx++;
          body.scrollTop = body.scrollHeight;
          const charDelay = 40 + Math.random() * 60; // Variable speed for realism
          const tid = setTimeout(typeChar, charDelay);
          terminalTimers.push(tid);
        } else {
          // Command fully typed — remove cursor, show output
          cursorSpan.remove();

          const tid = setTimeout(() => {
            // Show output lines one by one
            let outIdx = 0;
            function showOutput() {
              if (outIdx < command.output.length) {
                const outLine = document.createElement('p');
                outLine.className = 't-output';
                outLine.textContent = command.output[outIdx];
                // Fade in effect
                outLine.style.opacity = '0';
                outLine.style.transform = 'translateX(-5px)';
                outLine.style.transition = 'opacity 0.3s, transform 0.3s';
                body.appendChild(outLine);
                // Trigger animation
                requestAnimationFrame(() => {
                  outLine.style.opacity = '1';
                  outLine.style.transform = 'translateX(0)';
                });
                body.scrollTop = body.scrollHeight;
                outIdx++;
                const tid = setTimeout(showOutput, 150);
                terminalTimers.push(tid);
              } else {
                // Add empty line between commands
                const spacer = document.createElement('p');
                spacer.innerHTML = '&nbsp;';
                body.appendChild(spacer);
                cmdIdx++;
                const tid = setTimeout(scheduleCommand, 500);
                terminalTimers.push(tid);
              }
            }
            showOutput();
          }, 200);
          terminalTimers.push(tid);
        }
      }
      // Start typing after a small delay
      const tid = setTimeout(typeChar, 200);
      terminalTimers.push(tid);
    }, delay);
    terminalTimers.push(tid1);
    delay = 0; // Only first command has initial delay
  }

  scheduleCommand();
}

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 15 : 30;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = (100 + Math.random() * 20) + '%';
    particle.style.width = (1 + Math.random() * 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (6 + Math.random() * 10) + 's';
    particle.style.animationDelay = Math.random() * 8 + 's';
    container.appendChild(particle);
  }
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.hero__stat-number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero__stats');
if (statsSection) counterObserver.observe(statsSection);

// ===== LANGUAGE SWITCHER =====
document.querySelector('.nav__lang')?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
});

// ===== THEME TOGGLE =====
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  // Update meta theme-color
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'light' ? '#f8fafc' : '#0a0e17';
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  createParticles();
  typeTerminal();
  applyTranslations(currentLang);
});
