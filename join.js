const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const mask = document.querySelector('.mask');
const groups = document.querySelectorAll('.group');
const ovals = document.querySelectorAll('.oval');
const carousel = document.querySelector('.carousel');
let currentGroupIndex = 0; // Индекс текущей группы

// Функция для обновления позиции карусели и изменения фона
function updateCarouselPosition() {
  groups.forEach((group, index) => {
    if (index === currentGroupIndex) {
      group.classList.add('active');
      // Обновление фона в зависимости от активной группы
      switch (index) {
        case 0:
          carousel.style.backgroundColor = '#F8F8F8'; // Темно-серый для первой группы
          break;
        case 1:
          carousel.style.backgroundColor = '#FDFDFD'; // Светло-серый для второй группы
          break;
        case 2:
          carousel.style.backgroundColor = '#C8D3FF'; // Другой серый для третьей группы
          break;
      }
    } else {
      group.classList.remove('active');
    }
  });

  // Обновляем овалы
  ovals.forEach((oval, index) => {
    if (index === currentGroupIndex) {
      oval.classList.add('active');
    } else {
      oval.classList.remove('active');
    }
  });
}

// Перехід до попередньої групи
prevButton.addEventListener('click', () => {
  currentGroupIndex = (currentGroupIndex > 0) ? currentGroupIndex - 1 : groups.length - 1;
  updateCarouselPosition();
});

// Перехід до наступної групи
nextButton.addEventListener('click', () => {
  currentGroupIndex = (currentGroupIndex < groups.length - 1) ? currentGroupIndex + 1 : 0;
  updateCarouselPosition();
});

updateCarouselPosition(); // Инициализация начальной позиции

// Анміцаії для смс у чаті на телефоні 
document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.querySelector(".sms1b").parentElement;
  const sms1b = document.querySelector(".sms1b");
  const wordsms1b = document.querySelector(".word-sms1b");
  const sms2b = document.querySelector(".sms2b");
  const wordsms2b = document.querySelector(".word-sms2b");

  let animationRunning = false; // Флаг для отслеживания состояния анимации

  function startAnimation() {
    if (animationRunning) return;
    animationRunning = true;

    function animateCycle() {
      // Появляется первое сообщение
      sms1b.classList.add("show");
      wordsms1b.classList.add("show");

      setTimeout(() => {
        // Появляется второе сообщение
        sms2b.classList.add("show");
        wordsms2b.classList.add("show");
      }, 1500);

      setTimeout(() => {
        // Добавляем класс hide, чтобы оба сообщения исчезли плавно одновременно
        chatContainer.classList.add("hide");

        setTimeout(() => {
          // Убираем show и hide, чтобы цикл мог повториться
          sms1b.classList.remove("show");
          wordsms1b.classList.remove("show");
          sms2b.classList.remove("show");
          wordsms2b.classList.remove("show");
          chatContainer.classList.remove("hide");
        }, 1000); // Время совпадает с `fadeOut` в CSS (1 сек)
      }, 5000);
    }

    animateCycle();
    setInterval(animateCycle, 7000);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(chatContainer);
});
// Анміцаії для смс у чаті на телефоні 




document.getElementById('loginButton').addEventListener('click', function() {
  window.location.href = 'login.html'; // Переход на страницу входа
});

document.getElementById('registerButton').addEventListener('click', function() {
  window.location.href = 'register.html'; // Переход на страницу регистрации
});






function toggleDetails() {
  // Найти вторую кнопку "Next" по классу и симулировать нажатие
  const nextButton = document.querySelector('.nav-buttons .next');
  nextButton.click();
}
