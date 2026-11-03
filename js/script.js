
document.addEventListener('DOMContentLoaded', () => {
    
   
    const windowWidthEl = document.getElementById('window-width') || document.querySelector('.window-width');
    const scrollYEl = document.getElementById('scroll-y') || document.querySelector('.scroll-y');
    const focusStatusEl = document.getElementById('focus-status') || document.querySelector('.focus-status');
    const nameButtonEl = document.getElementById('name-button') || document.querySelector('.name-button');
    const greetingEl = document.getElementById('greeting') || document.querySelector('.greeting');

   
    function updateWidth() {
        if (windowWidthEl) {
            windowWidthEl.textContent = `Ширина окна: ${window.innerWidth}px`;
        }
    }
 
    updateWidth();
    window.addEventListener('resize', updateWidth);
    function updateScroll() {
        if (scrollYEl) {
            scrollYEl.textContent = `Прокрутка по Y: ${Math.round(window.scrollY)}px`;
        }
    }
    updateScroll();
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('focus', () => {
        if (focusStatusEl) focusStatusEl.textContent = 'Вкладка активна';
    });
    window.addEventListener('blur', () => {
        if (focusStatusEl) focusStatusEl.textContent = 'Вкладка неактивна';
    });
    if (nameButtonEl) {
        nameButtonEl.addEventListener('click', () => {
            const userName = prompt('Введите ваше имя:');
            if (userName !== null && userName.trim() !== '') {
                if (greetingEl) {
                    greetingEl.textContent = `Привет, ${userName.trim()}!`;
                }
            }
        });
    }
});
