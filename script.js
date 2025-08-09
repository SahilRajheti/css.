// script.js — gallery lightbox + mobile toggles + contact actions
document.addEventListener('DOMContentLoaded', function () {
  // hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger && hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.padding = '10px';
    nav.style.background = 'white';
    nav.style.position = 'absolute';
    nav.style.right = '24px';
    nav.style.top = '64px';
    nav.style.borderRadius = '8px';
    nav.style.boxShadow = '0 10px 30px rgba(16,24,40,0.08)';
  });

  // Lightbox
  const galleryImgs = document.querySelectorAll('.gallery-item img, .hero-image-frame img');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || 'Photo';
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  galleryImgs.forEach(img => {
    img.addEventListener('click', (e) => {
      const full = img.dataset.full || img.src;
      openLightbox(full, img.alt || '');
    });
  });
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  // WhatsApp action — open wa.me link
  const whatsappBtn = document.getElementById('whatsappBtn');
  const whLink = document.getElementById('whLink');
  const openWhats = document.getElementById('openWhats');

  // Using the raw number you gave. If you need a country code, add it (e.g. +91 for India)
  const rawNumber = '7078297357'; // provided by you
  const waUrl = `https://wa.me/${rawNumber}`;

  if (whatsappBtn) whatsappBtn.setAttribute('href', waUrl);
  if (whLink) {
    whLink.setAttribute('href', waUrl);
    whLink.textContent = rawNumber;
  }
  if (openWhats) openWhats.addEventListener('click', () => {
    window.open(waUrl, '_blank');
  });

  // small enhancement: copy email on click
  const emailChip = document.querySelector('.chip[href^="mailto:"]');
  // (optional) add copy to clipboard on email click: omitted for clarity
});
