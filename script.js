const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});
