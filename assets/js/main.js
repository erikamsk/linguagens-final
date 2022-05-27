const burger = document.getElementById('burger');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefaultprevent()
    const container = document.getElementById('container');
    container.classList.toggle('isactive');

    const isactive = container.classList.contains('isactive');
    event.currentTarget.setAttribute('aria-expanded', 'true');

    if (isactive) {
        event.currentTarget.setAttribute('aria-label', 'close menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'open menu');
    }
}

burger.addEventListener('click', toggleMenu);
burger.addEventListener('touchstart', toggleMenu);