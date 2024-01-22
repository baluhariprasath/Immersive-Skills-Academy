//Enabling hidden header

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});