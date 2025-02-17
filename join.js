const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const mask = document.querySelector('.mask');
const groups = document.querySelectorAll('.group');
const ovals = document.querySelectorAll('.oval');
const carousel = document.querySelector('.carousel');
let currentGroupIndex = 0; //


function updateCarouselPosition() {
  groups.forEach((group, index) => {
    if (index === currentGroupIndex) {
      group.classList.add('active');
      
      switch (index) {
        case 0:
          carousel.style.backgroundColor = '#F8F8F8'; 
          break;
        case 1:
          carousel.style.backgroundColor = '#FDFDFD'; 
          break;
        case 2:
          carousel.style.backgroundColor = '#C8D3FF'; 
          break;
      }
    } else {
      group.classList.remove('active');
    }
  });

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
  window.location.href = 'login.html'; 
});

document.getElementById('registerButton').addEventListener('click', function() {
  window.location.href = 'register.html'; 
});


function toggleDetails() {
  
  const nextButton = document.querySelector('.nav-buttons .next');
  nextButton.click();
}


  function reloadPage() {
    location.reload();
}

function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
}

function hoverEffect(isHovering) {
    var uaLink = document.getElementById('uaLink');
    if (isHovering) {
        uaLink.style.color = 'blue'; 
        uaLink.style.cursor = 'pointer'; 
    } else {
        uaLink.style.color = ''; 
        uaLink.style.cursor = ''; 
    }
}

function scrollToCard1() {
  document.getElementById('card1').scrollIntoView({ behavior: 'smooth' });
}

function highlightBlock(element) {
  element.style.borderBottom = '2px solid black';
}

function scrollToSpore() {
  document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
}


function openGmail() {
  var email = "support@sporepay.com"; 
  var subject = "Пропозиція";       
  var body = "Текст вашої пропозиції"; 

  var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.open(mailtoLink, "_blank");
}


// Функція для зміни мови
let currentLanguage = 'uk'; // За замовчуванням українська мова

function changeLanguage() {
    if (currentLanguage === 'uk') {
        // Перемикаємо на англійську
        document.getElementById('uaLink').innerText = 'UA';
        
        document.querySelectorAll('.word-3').forEach(element => {
            element.innerText = 'Home'; // Заміна тексту на англійську
        });
        document.querySelectorAll('.word-4').forEach(element => {
            element.innerText = 'About'; // Заміна тексту на англійську
        });
        document.querySelectorAll('.word-5').forEach(element => {
            element.innerText = 'Bot'; // Заміна тексту на англійську
        });
        document.getElementById('loginButton').querySelector('span').innerText = 'Login';
        document.getElementById('registerButton').querySelector('span').innerText = 'Sign Up';

        document.getElementById('block1').innerText = 'Cards';
        document.getElementById('block2').innerText = 'Loans';
        document.getElementById('block3').innerText = 'Branches';
        document.getElementById('block4').innerText = 'Reviews';
        document.getElementById('block5').innerText = 'Payments';
        document.getElementById('block6').innerText = 'Transfers';
        document.getElementById('block7').innerText = 'SporePay';
        document.getElementById('block8').innerText = '.';

        // Текст для word-7
        document.querySelector('.word-7').innerText = 'A new branch has opened! We are hiring specialists to join our team. Contact us: +38 (098) 123-45-67';

        // Текст кнопки
        document.querySelector('.rounded-rectangle span').innerText = 'More details';

        // Перша група
        document.querySelector('.word-1_1').innerHTML = 'SporePay – your financial <br>step into the future!';
        document.querySelector('.word-1_2').innerHTML = 'A modern and convenient bank: quick account opening, <br>instant payments without commissions, reliable protection, <br>and favorable terms.';
        document.querySelectorAll('.rounded-rectangle1_1').forEach(element => {
          element.querySelector('span').innerText = 'More Details'; // Перевод кнопки
      });

        // Друга група
        document.querySelector('.word-2_1').innerHTML = 'SporePay opens its first branch! <br>We are inviting professionals to join the team.';
        document.querySelector('.word-2_2').innerHTML = 'Open vacancies:';
        document.querySelector('.word-2_3').innerHTML = '<ul><li>Client Relationship Manager</li><li>Credit Manager</li><li>Cashier-Operator</li><li>Branch Manager</li></ul>';
        document.querySelector('.word-2_4').innerHTML = 'Call us: +38 (098) 123-45-67';
        document.querySelector('.word-2_5').innerHTML = 'Address: Kyiv, Vasylkivska St, 45';
        
        // Третя група
        document.querySelector('.word-3_1').innerHTML = 'SporePay Support is always with you!';
        document.querySelector('.word-3_2').innerHTML = 'Got a question? Scan the QR code and contact our <br>Telegram support bot!';

        // Переклад тексту в блоці
        document.querySelector('.word-1g').innerText = 'Shopping with benefits with';
        document.querySelector('.word-2g').innerText = 'SporePay';
        document.querySelector('.word-3g').innerHTML = 'Buy more – spend less! With SporePay card, you get <br>cashback, discounts, bonuses and special offers <br>at partner stores. Shop smart and convenient!';
        document.querySelector('.word-4g').innerText = 'What do you get?';
        document.querySelector('.word-5g').innerText = 'Cashback on every purchase';
        document.querySelector('.word-6g').innerHTML = 'Discounts and bonuses at <br>partner stores';
        document.querySelector('.word-7g').innerHTML = 'Exclusive promotions for <br>SporePay cardholders';
        document.querySelector('.rounded-rectangle4 span').innerText = 'Get the card'; // Перевод кнопки

        document.querySelector('.word-sms1b').innerHTML = 'Thank you for your <br>prompt support! Always <br>a pleasure to work with <br>your bank';
        document.querySelector('.word-sms2b').innerText = 'Glad to help!';

        document.querySelector('.word-1b').innerText = 'Customer suport at';
        document.querySelector('.word-2b').innerText = 'SporePay';
        document.querySelector('.word-3b').innerText = 'Help is always near!';
        document.querySelector('.word-4b').innerHTML = 'Got questions or need consultation? Our <br>support team is always ready to help! <br>Contact us in one click via Telegram or <br>the website, and we will quickly <br>resolve your issue.';
        document.querySelector('.word-5b').innerHTML = 'We work for your comfort, so we <br>respond quickly and provide detailed <br>explanations about all services. Your <br>finances and time are in reliable hands!';
        document.querySelector('.word-6b').innerHTML = 'Click the link to the bot or open <br>the chat on the website to get <br>instant help.';
        

        document.querySelector('.word-1cb1').innerText = 'FreePay';
        document.querySelector('.word-2cb1').innerText = '— Card for everyday use 24/7';
        document.querySelector('.word-3cb1').innerHTML = 
            '<ul>' +
            '<li>Free service.</li>' +
            '<li>5% cashback on supermarket buys.</li>' +
            '<li>Free transfers between bank cards.</li>' +
            '<li>Cash withdrawals with no fees at ATMs.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle5 span').innerText = 'Open';
        document.querySelector('.rounded-rectangle6 span').innerText = 'Learn More';

        // Переклад тексту на другій картці
        document.querySelector('.word-1cb2').innerText = 'MaxCredit';
        document.querySelector('.word-2cb2').innerText = '— Smart сredit card';
        document.querySelector('.word-3cb2').innerHTML = 
            '<ul>' +
            '<li>Credit limit up to 200K UAH.</li>' +
            '<li>Up to 62 days interest-free on purchases.</li>' +
            '<li>Up to 10% cashback on entertainment.</li>' +
            '<li>12-month installments, no extra fees.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle7 span').innerText = 'Open';
        document.querySelector('.rounded-rectangle8 span').innerText = 'Learn More';

        // Переклад тексту на третій картці
        document.querySelector('.word-1cb3').innerText = 'StartJunior';
        document.querySelector('.word-2cb3').innerText = '— Safe card for kids and teens';
        document.querySelector('.word-3cb3').innerHTML = 
            '<ul>' +
            '<li>Expense control via parent app.</li>' +
            '<li>Free top-ups from parents’ cards.</li>' +
            '<li>3% cashback on entertainment and games.</li>' +
            '<li>Customizable card design.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle9 span').innerText = 'Open';
        document.querySelector('.rounded-rectangle11 span').innerText = 'Learn More';


        document.querySelector('.word-1f').innerText = 'About Us';
        document.querySelector('.word-2f').innerText = 'About the Bank';
        document.querySelector('.word-3f').innerText = 'Contacts';
        document.querySelector('.word-4f').innerText = 'Partners';
        document.querySelector('.word-5f').innerText = 'Special Offers';
        document.querySelector('.word-6f').innerText = 'Cashback and Bonuses';
        document.querySelector('.word-7f').innerText = 'Discounts';
        document.querySelector('.word-8f').innerText = 'Exclusive Promotions';
        document.querySelector('.word-9f').innerText = 'Online Support';
        document.querySelector('.word-10f').innerText = 'Chat with Operator';
        document.querySelector('.word-11f').innerText = 'Telegram Bot';
        document.querySelector('.word-12f').innerText = 'Contacts';
        document.querySelector('.word-13f').innerText = 'Bank Cards';
        document.querySelector('.word-14f').innerText = 'Debit Card';
        document.querySelector('.word-15f').innerText = 'Junior Card';
        document.querySelector('.word-16f').innerText = 'Credit Card';
        document.querySelector('.word-17f').innerText = 'Login/Register';
        document.querySelector('.word-18f').innerText = 'Authorization';
        document.querySelector('.word-19f').innerText = 'Create Account';
        document.querySelector('.word-20f').innerText = '2300';
        document.querySelector('.word-21f').innerText = 'Free from mobile';
        document.querySelector('.word-22f').innerText = '+38 067 212 22 23';
        document.querySelector('.word-23f').innerText = 'Intl calls/from landlines';
        document.querySelector('.word-24f').innerText = 'Questions and Suggestions';
        document.querySelector('.rounded-rectangle10 span').innerText = 'Write';
        document.querySelector('.word-25f').innerText = '© 2025 SporePay License No. 22 from 11.02.2025';
        document.querySelector('.word-26f').innerText = 'UA';

        // Оновлюємо стан мови
        currentLanguage = 'en';
    } else {
        
        document.getElementById('uaLink').innerText = 'EN';

        document.querySelectorAll('.word-3').forEach(element => {
            element.innerText = 'Головна'; 
        });
        document.querySelectorAll('.word-4').forEach(element => {
            element.innerText = 'Про банк'; 
        });
        document.querySelectorAll('.word-5').forEach(element => {
            element.innerText = 'Тг бот'; 
        });
        document.getElementById('loginButton').querySelector('span').innerText = 'Увійти';
        document.getElementById('registerButton').querySelector('span').innerText = 'Зареєструватись';

        document.getElementById('block1').innerText = 'Картки';
        document.getElementById('block2').innerText = 'Кредити';
        document.getElementById('block3').innerText = 'Відділення';
        document.getElementById('block4').innerText = 'Відгуки';
        document.getElementById('block5').innerText = 'Платежі';
        document.getElementById('block6').innerText = 'Перекази';
        document.getElementById('block7').innerText = 'SporePay';
        document.getElementById('block8').innerText = '.';

        document.querySelector('.word-7').innerText = 'Відкрито нове відділення банку! Запрошуємо в команду фахівців на відкриті вакансії. +38 (098) 123-45-67';

        document.querySelector('.rounded-rectangle span').innerText = 'Детальніше';
         
        document.querySelector('.word-1_1').innerHTML = 'SporePay – ваш фінансовий <br>прорив у майбутнє!';
        document.querySelector('.word-1_2').innerHTML = 'Сучасний і зручний банк: швидке відкриття <br>рахунку, миттєві платежі без комісій, надійний <br>захист і вигідні умови.';
        document.querySelectorAll('.rounded-rectangle1_1').forEach(element => {
          element.querySelector('span').innerText = 'Детальніше'; 
      });

        document.querySelector('.word-2_1').innerHTML = 'SporePay відкриває своє перше відділення! <br>Запрошуємо в команду професіоналів.';
        document.querySelector('.word-2_2').innerHTML = 'Відкриті вакансії:';
        document.querySelector('.word-2_3').innerHTML = '<ul><li>Менеджер по роботі з клієнтами</li><li>Кредитний менеджер</li><li>Касир-операціоніст</li><li>Керівник відділення</li></ul>';
        document.querySelector('.word-2_4').innerHTML = 'Телефонуйте: +38 (098) 123-45-67';
        document.querySelector('.word-2_5').innerHTML = 'Адреса: м. Київ, вул. Васильківська, 45';
        
        document.querySelector('.word-3_1').innerHTML = 'Підтримка SporePay завжди поруч!';
        document.querySelector('.word-3_2').innerHTML = 'Маєте питання? Відскануйте QR-код та зв’яжіться <br>з нашим Telegram-ботом техпідтримки!';

        document.querySelector('.word-1g').innerText = 'Шопінг із вигодою разом зі';
        document.querySelector('.word-2g').innerText = 'SporePay';
        document.querySelector('.word-3g').innerHTML = 'Купуйте більше – витрачайте менше! З карткою <br>SporePay ви отримуєте кешбек, знижки, бонуси <br>та спеціальні пропозиції у магазинах-партнерах. <br>Робіть покупки вигідно та зручно!';
        document.querySelector('.word-4g').innerText = 'Що ви отримуєте?';
        document.querySelector('.word-5g').innerText = 'Кешбек за кожну покупку';
        document.querySelector('.word-6g').innerHTML = 'Знижки та бонуси у <br>магазинах-партнерах';
        document.querySelector('.word-7g').innerHTML = 'Ексклюзивні акції для <br>власників карт SporePay';
        document.querySelector('.rounded-rectangle4 span').innerText = 'Оформити картку'; // Перевод кнопки назад на українську

        document.querySelector('.word-sms1b').innerHTML = 'Дякую за вашу швидку <br>підтримку! Завжди <br>приємно мати справу <br>з вашим банком';
        document.querySelector('.word-sms2b').innerText = 'Раді допомогти!';

        document.querySelector('.word-1b').innerText = 'Підтримка клієнтів в';
        document.querySelector('.word-2b').innerText = 'SporePay';
        document.querySelector('.word-3b').innerText = 'Допомога завжди поруч!';
        document.querySelector('.word-4b').innerHTML = 'Виникли питання чи потрібна консультація? <br>Наша служба підтримки завжди готова <br>допомогти! Зв’яжіться з нами в один клік <br>у Telegram або на сайті, і ми швидко <br>вирішимо ваше питання.';
        document.querySelector('.word-5b').innerHTML = 'Ми працюємо для вашого комфорту, тому <br>відповідаємо оперативно та надаємо <br>детальні роз’яснення щодо всіх послуг. <br>Ваші фінанси та час – у надійних руках!';
        document.querySelector('.word-6b').innerHTML = 'Натисніть на посилання на бота <br>або відкрийте чат на сайті, щоб <br>отримати миттєву допомогу.';

        document.querySelector('.word-1cb1').innerText = 'FreePay';
        document.querySelector('.word-2cb1').innerText = '— картка для щоденних витрат';
        document.querySelector('.word-3cb1').innerHTML = 
            '<ul>' +
            '<li>Безкоштовне обслуговування.</li>' +
            '<li>Кешбек до 5% на покупки в супермаркетах.</li>' +
            '<li>Безкоштовні перекази між картками банку.</li>' +
            '<li>Зняття готівки без комісії в банкоматах.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle5 span').innerText = 'Відкрити';
        document.querySelector('.rounded-rectangle6 span').innerText = 'Детальніше';

        document.querySelector('.word-1cb2').innerText = 'MaxCredit';
        document.querySelector('.word-2cb2').innerText = '— кредитна картка';
        document.querySelector('.word-3cb2').innerHTML = 
            '<ul>' +
            '<li>Кредитний ліміт до 200 000 грн.</li>' +
            '<li>До 62 днів без відсотків на покупки.</li>' +
            '<li>Кешбек до 10% на розваги та подорожі.</li>' +
            '<li>Розстрочка до 12 місяців без переплат.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle7 span').innerText = 'Відкрити';
        document.querySelector('.rounded-rectangle8 span').innerText = 'Детальніше';

        document.querySelector('.word-1cb3').innerText = 'StartJunior';
        document.querySelector('.word-2cb3').innerText = '— картка для дітей і підлітків';
        document.querySelector('.word-3cb3').innerHTML = 
            '<ul>' +
            '<li>Контроль витрат через додаток для батьків.</li>' +
            '<li>Безкоштовне поповнення з карток батьків.</li>' +
            '<li>Кешбек 3% на розваги та ігри.</li>' +
            '<li>Дизайн картки з можливістю кастомізації.</li>' +
            '</ul>';

        document.querySelector('.rounded-rectangle9 span').innerText = 'Відкрити';
        document.querySelector('.rounded-rectangle11 span').innerText = 'Детальніше';

        document.querySelector('.word-1f').innerText = 'Про нас';
        document.querySelector('.word-2f').innerText = 'Про банк';
        document.querySelector('.word-3f').innerText = 'Контакти';
        document.querySelector('.word-4f').innerText = 'Партнери';
        document.querySelector('.word-5f').innerText = 'Спеціальні пропозиції';
        document.querySelector('.word-6f').innerText = 'Кешбек та бонуси';
        document.querySelector('.word-7f').innerText = 'Знижки';
        document.querySelector('.word-8f').innerText = 'Ексклюзивні акції';
        document.querySelector('.word-9f').innerText = 'Підтримка онлайн';
        document.querySelector('.word-10f').innerText = 'Чат з оператором';
        document.querySelector('.word-11f').innerText = 'Тг бот';
        document.querySelector('.word-12f').innerText = 'Контакти';
        document.querySelector('.word-13f').innerText = 'Банківські картки';
        document.querySelector('.word-14f').innerText = 'Дебетова картка';
        document.querySelector('.word-15f').innerText = 'Юніор картка';
        document.querySelector('.word-16f').innerText = 'Кредитна картка';
        document.querySelector('.word-17f').innerText = 'Вхід/Реєстрація';
        document.querySelector('.word-18f').innerText = 'Авторизація';
        document.querySelector('.word-19f').innerText = 'Створити акаунт';
        document.querySelector('.word-20f').innerText = '2300';
        document.querySelector('.word-21f').innerText = 'безкоштовно з мобільного';
        document.querySelector('.word-22f').innerText = '+38 067 212 22 23';
        document.querySelector('.word-23f').innerText = 'для дзвінків із-за кордону/зі стаціонарних телефонів';
        document.querySelector('.word-24f').innerText = 'Питання та пропозиції';
        document.querySelector('.rounded-rectangle10 span').innerText = 'Написати';
        document.querySelector('.word-25f').innerText = '© 2025 SporePay Ліцензія № 22 від 11.02.2025';
        document.querySelector('.word-26f').innerText = 'EN';

        // Оновлюємо стан мови
        currentLanguage = 'uk';
    }
}
