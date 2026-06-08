// année (footer)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// modale espace client (présente uniquement sur espace-client.html)
const ov = document.getElementById('espace-modal');
if (ov) {
  const openModal  = () => ov.classList.add('show');
  const closeModal = () => ov.classList.remove('show');
  const link    = document.getElementById('espace-link');
  const xBtn    = document.getElementById('modal-close');
  const contact = document.getElementById('modal-contact');
  if (link)    link.addEventListener('click', openModal);
  if (xBtn)    xBtn.addEventListener('click', closeModal);
  if (contact) contact.addEventListener('click', closeModal);
  ov.addEventListener('click', e => { if (e.target === ov) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// révélation au scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  io.observe(el);
});
