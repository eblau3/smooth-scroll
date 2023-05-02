const smoothScroll = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  const urlHash = location.hash;
  const headerHeight = document.querySelector('header').offsetHeight;

  const scroll = (el) => {
    const scrollPos = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    });
  };

  if(urlHash) {
    const target = document.querySelector(urlHash);

    setTimeout(() => {
      window.scrollTo({top: 0});
      scroll(target);
    });
  };

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const anchorLink = anchor.getAttribute('href');
      const target = document.querySelector(anchorLink);

      scroll(target);
    });
  });
};

window.addEventListener('DOMContentLoaded', () => smoothScroll());
window.addEventListener('hashchange', () => smoothScroll());