(function () {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero-wrapper');

  const checkNavbar = () => {
    const threshold = hero.getBoundingClientRect().height - navbar.getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > threshold) {
      navbar.classList.replace('navbar-dark', 'navbar-light');
      navbar.classList.add('bg-light');
    } else {
      navbar.classList.replace('navbar-light', 'navbar-dark');
      navbar.classList.remove('bg-light');
    }
  };

  document.addEventListener('scroll', checkNavbar);
  document.addEventListener('orientationchange', checkNavbar);
}());
