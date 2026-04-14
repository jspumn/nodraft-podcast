/* SCROLL HEADER */
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* PLAYER LOGIC */
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const currentTitle = document.getElementById('current-title');
let isPlaying = false;

function togglePlay() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playBtn.textContent = '⏸';
  } else {
    playBtn.textContent = '▶';
  }
}

playBtn.addEventListener('click', togglePlay);

function playEpisode(title) {
  currentTitle.textContent = title;
  if (!isPlaying) {
    togglePlay();
  }
  // Scroll to player
  document.querySelector('.player-section').scrollIntoView({ behavior: 'smooth' });
}

/* ACTIVE LINK ON SCROLL */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ANIMATION ON SCROLL (Simple) */
const sr = {
  reveal: function(selector, options) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = `all ${options.duration || 1}s ease-out`;
      observer.observe(el);
    });
  }
};

sr.reveal('.hero__data', { duration: 1 });
sr.reveal('.hero__img-container', { duration: 1.2 });
sr.reveal('.episode__card', { duration: 0.8 });
sr.reveal('.about__data', { duration: 1 });
sr.reveal('.about__img-box', { duration: 1 });
