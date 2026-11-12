// Light/dark button. Every visitor starts on light; a click switches theme and the choice
// is remembered for all pages (a small script in each page's <head> applies it before the
// page is drawn, so there is no flash). The CV page has no button and always stays light.
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  function current() { return root.dataset.theme === 'dark' ? 'dark' : 'light'; }
  function sync() {
    var mode = current();
    btn.dataset.mode = mode;
    var label = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  sync();
})();
