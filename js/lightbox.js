(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<div class="lightbox-backdrop"></div>' +
    '<div class="lightbox-dialog">' +
      '<button class="lightbox-close" aria-label="Fermer">&times;</button>' +
      '<p class="lightbox-caption"></p>' +
      '<img class="lightbox-img" alt="" />' +
    '</div>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox-img');
  var caption = overlay.querySelector('.lightbox-caption');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var backdrop = overlay.querySelector('.lightbox-backdrop');

  function openLightbox(src, text) {
    img.src = src;
    img.alt = text || '';
    caption.textContent = text || '';
    caption.style.display = text ? 'block' : 'none';
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
      openLightbox(trigger.dataset.lightbox, trigger.dataset.caption || '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
