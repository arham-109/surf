const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const lines = btn.querySelectorAll('.line');
const links = document.querySelectorAll('.link-item');

btn.addEventListener('click', () => {
    lines[0].classList.toggle('rotate-45');
    lines[0].classList.toggle('translate-y-2');
    lines[1].classList.toggle('opacity-0');
    lines[2].classList.toggle('-rotate-45');
    lines[2].classList.toggle('-translate-y-2');

    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-screen', 'opacity-100');
        
        links.forEach(link => {
            link.classList.remove('translate-x-[-20px]', 'opacity-0');
            link.classList.add('translate-x-0', 'opacity-100');
        });
    } else {
        menu.classList.add('max-h-0', 'opacity-0');
        menu.classList.remove('max-h-screen', 'opacity-100');
        
        links.forEach(link => {
            link.classList.add('translate-x-[-20px]', 'opacity-0');
            link.classList.remove('translate-x-0', 'opacity-100');
        });
    }
});
