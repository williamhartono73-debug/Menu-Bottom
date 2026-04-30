const items = document.querySelectorAll('.item');
const pages = document.querySelectorAll('.page');

function updateSupportIcon() {
  items.forEach(item => {
    const svg = item.querySelector('svg[data-type="fill"]');
    if (!svg) return;
    if (item.classList.contains('active')) {
      svg.setAttribute('fill', '#F5F5F7');
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

updateSupportIcon();
