export function initNavigation() {
  const navItems = document.querySelectorAll('nav > ul > li');

  navItems.forEach((item) => {
    const pTag = item.querySelector('p');
    const dropdown = item.querySelector('.nav-element-dropdown');

    if (dropdown && pTag) {
      pTag.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.nav-element-dropdown').forEach((d) => {
          if (d !== dropdown) d.style.display = 'none';
        });

        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
      });
    }
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-element-dropdown').forEach((d) => {
      d.style.display = 'none';
    });
  });
}
