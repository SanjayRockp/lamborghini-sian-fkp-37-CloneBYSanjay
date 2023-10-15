// Select the menu items and attach event listeners
const menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(item => {
  item.addEventListener('mouseenter', showSubmenu);
  item.addEventListener('mouseleave', hideSubmenu);
});

// Show the submenu when hovered
function showSubmenu() {
  const submenu = this.querySelector('ul');
  if (submenu) {
    submenu.style.display = 'block';
  }
}

// Hide the submenu when mouse leaves
function hideSubmenu() {
  const submenu = this.querySelector('ul');
  if (submenu) {
    submenu.style.display = 'none';
  }
}
