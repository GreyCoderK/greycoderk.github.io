// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  links.classList.toggle('active');
  const spans = toggle.querySelectorAll('span');
  spans[0].style.transform = links.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = links.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = links.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
  });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .project-card, .timeline__item, .skill-group').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = '';
      }
    }
  });
});
