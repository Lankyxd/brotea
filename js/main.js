const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navbar = document.getElementById('navbar');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));

    if (menuIcon) {
      menuIcon.textContent = isHidden ? '☰' : '×';
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');

      if (menuIcon) {
        menuIcon.textContent = '☰';
      }
    });
  });
}

const heroElements = document.querySelectorAll('.hero-animate');

window.addEventListener('load', () => {
  heroElements.forEach((element, index) => {
    window.setTimeout(() => {
      element.classList.remove('opacity-0', 'translate-y-4', 'translate-y-5', 'translate-y-6', 'translate-y-8');
      element.classList.add('opacity-100', 'translate-y-0');
    }, 180 + index * 150);
  });
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('opacity-0', 'translate-y-10');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const updateNavbar = () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('bg-cream/90', 'backdrop-blur-xl', 'shadow-[0_8px_35px_rgba(22,59,44,0.08)]');
  } else {
    navbar.classList.remove('bg-cream/90', 'backdrop-blur-xl', 'shadow-[0_8px_35px_rgba(22,59,44,0.08)]');
  }
};

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });
