const items = document.querySelectorAll('.item');
const pages = document.querySelectorAll('.page');

// Handle fill-type SVGs on init and on click
function updateSupportIcon() {
  items.forEach(item => {
    const svg = item.querySelector('svg[data-type="fill"]');
    if (!svg) return;
    if (item.classList.contains('active')) {
      svg.setAttribute('fill', '#c9a646');
    } else {
      svg.setAttribute('fill', '#555');
    }
  });
}

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    const target = item.getAttribute('data-page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    updateSupportIcon();
  });
});

// Set initial state
updateSupportIcon();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.daily-entry').forEach(el => {
    observer.observe(el);
  });
