//Скрипт запуска слайдера

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    navigation:false, 
    grabCursor:true,
    pagination: false,
    scrollbar: false,
    slidesPerView: 5,
    spaceBetween: 32
  });


//Скрипт открывания меню

const sandwichMenu = document.querySelector('.header__button__menu');
const navigation = document.querySelector('.header__navigation');
const mainSection = document.querySelector('.main');
const footer = document.querySelector('footer');
const headerButtons = document.querySelector('.header__buttons');
const headerContacts = document.querySelector('header .contacts_phone');

sandwichMenu.addEventListener('click', function(e) {
  e.preventDefault();
  sandwichMenu.classList.toggle('open');
  navigation.classList.toggle('open');
  mainSection.classList.toggle('nav_open');
  footer.classList.toggle('nav_open');
  headerButtons.classList.toggle('nav_open');
  headerContacts.classList.toggle('nav_open');
});