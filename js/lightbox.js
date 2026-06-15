(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<div class="lightbox-backdrop"></div>' +
    '<div class="lightbox-dialog">' +
      '<button class="lightbox-close" aria-label="Fermer">&times;</button>' +
      '<img class="lightbox-img" alt="" />' +
    '</div>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var backdrop = overlay.querySelector('.lightbox-backdrop');

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    img.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var thumb = trigger.querySelector('img');
      openLightbox(trigger.dataset.lightbox, thumb ? thumb.alt : '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
