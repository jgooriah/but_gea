document.querySelectorAll('.tabs').forEach(function (tabs) {
  var buttons = tabs.querySelectorAll('.tab-btn');
  var panels = tabs.querySelectorAll('.tab-panel');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.tab;

      buttons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      tabs.querySelector('#' + target).classList.add('active');
    });
  });
});
