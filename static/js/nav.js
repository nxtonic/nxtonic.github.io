(function(){
  var last_known_scroll_position = 0;
  var ticking = false;
  var nav_visible = false;

  var navEl = document.querySelector('header.min');
  var actuateHeight = navEl.clientHeight / 2;

  window.addEventListener('resize', function () {
    actuateHeight = navEl.clientHeight / 2;
  });

  function stickyToggle(scroll_pos) {
    if (scroll_pos > actuateHeight && !nav_visible) {
      navEl.classList.remove('unscrolled');
      void navEl.offsetWidth;
      navEl.classList.add('scrolled');
      nav_visible = true;
    } else if (scroll_pos <= actuateHeight && nav_visible) {
      navEl.classList.remove('scrolled');
      void navEl.offsetWidth;
      navEl.classList.add('unscrolled');
      nav_visible = false;
    }
  }

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        stickyToggle(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });
})();