// Функція для зміни мови з анимацією
function toggleLanguage() {
    const currentLanguage = document.body.getAttribute('data-language');
    const newLanguage = currentLanguage === 'uk' ? 'en' : 'uk';

    // Перемикаємо мову
    document.body.setAttribute('data-language', newLanguage);

    // Оновлюємо текст на кнопках, формах та посиланнях в залежності від мови
    if (newLanguage === 'en') {
        document.getElementById('form-title').textContent = 'SporePay';
        document.getElementById('email').placeholder = 'Email';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('submit-btn').textContent = 'Log In';
        document.getElementById('register-text').innerHTML = 'Don\'t have an account? <a href="#" id="register-link">Sign up</a>';
    } else {
        document.getElementById('form-title').textContent = 'SporePay';
        document.getElementById('email').placeholder = 'Електронна пошта';
        document.getElementById('password').placeholder = 'Пароль';
        document.getElementById('submit-btn').textContent = 'Увійти';
        document.getElementById('register-text').innerHTML = 'Ще не маєш акаунта? <a href="#" id="register-link">Зареєструватися</a>';
    }

    // Анімація кнопки при кожному перемиканні мвои
    const languageToggle = document.querySelector('.language-toggle');
    languageToggle.classList.remove('show'); 
    void languageToggle.offsetWidth; // // Форсуємо повторне відтворення для скидання анімації
    languageToggle.classList.add('show'); // Добавляємо анімацію знову
}

// Встановлюємо початкову мову на українську
document.body.setAttribute('data-language', 'uk');

// Добавляємо класс для анимації появи кнопки при загрузці
window.addEventListener('load', () => {
    const languageToggle = document.querySelector('.language-toggle');
    languageToggle.classList.add('show');
});

console.log('Page "Увійти" loaded');


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("modal");
    const closeX = document.querySelector(".close");

    // Відкриття модального вікна при відправці форми
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        modal.style.display = "block"; // Показати модальне вікно
        setTimeout(() => {
            modal.classList.add("show"); // Додати клас для анімації
        }, 10); // Маленька затримка для запуску анімації
    });

    // Закриття модального вікна по хресту
    closeX.addEventListener("click", function () {
        modal.classList.remove("show"); 
        setTimeout(() => {
            modal.style.display = "none"; // Приховати модальне вікно після анімації
        }, 500); // Чекаємо завершення анімації
    });

    // Закриття модального вікна при кліку поза ним
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        }
    });
});
