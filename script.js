
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.textContent = open ? '✕' : '☰';
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

const copyBtn = document.getElementById('copyEmailBtn');
const copyStatus = document.getElementById('copyStatus');
const email = 'eshwarageoneesha@gmail.com';

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email copied ✓';
    setTimeout(() => copyStatus.textContent = '', 1800);
  } catch {
    copyStatus.textContent = email;
  }
});
