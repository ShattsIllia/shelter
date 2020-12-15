function onClick() {
    const menu = document.getElementById('list');
    const button = document.getElementById('button');
    menu.className = (menu.className.includes('mobile-screen') ? 'menu__list' : 'menu__list mobile-screen');
    button.className = (button.className === 'menu-btn' ? 'menu-btn_active' : 'menu-btn');
}