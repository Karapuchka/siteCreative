'use strict'

gsap.registerPlugin(ScrollTrigger);

let detect = new MobileDetect(window.navigator.userAgent);

//Изменение размера контейнера
let widthWindow = window.innerWidth;
let widthContainer = document.querySelector('.container').offsetWidth; //Размер первого контайнера

let widthContainerRight = widthContainer + ((((100 - (widthContainer * 100) / widthWindow)) / 2 * widthWindow) / 100); //Находим размер для контейнера с уклоном в правую сторону 

document.querySelector('.container--position-right').style.width = widthContainerRight+ 'px'; //Задаём размер для контейнера с уклоном в право

//Задаём стили для дочерних элементов контейнера
document.querySelector('.js-container-position-left-item').style.width = document.querySelector('.js-main-about-us-paragraf').offsetWidth + 'px'; 
document.querySelector('.js-container-position-left-item').style.margin = '0 20px 0 0';

if(window.innerWidth <= 980){
    document.querySelector('.js-margin-5').classList.add('double-columns__item__paragraf--m-bottom-5');
    document.querySelector('.js-btn-header').style.margin = '0 auto';

    document.querySelector('.js-header-offer').style.margin = '0 auto';

    document.querySelector('.js-no-padding').style.padding = '0';

    document.querySelector('.header').style.background = 'linear-gradient(45deg, rgb(102, 2, 55) 0, #010F29 10%, #010F29 80%,rgb(102, 2, 55) 95%)';
    
    document.querySelector('.js-main-about-us').style.display = 'none';

    document.querySelector('.double-columns__item--margin-left').classList.remove('double-columns__item--margin-left');

    document.querySelector('.js-container-position-left-item').style.margin = '0';
    document.querySelector('.js-container-position-left-item').style.width = '100%';

    document.querySelector('.container--position-right').classList.remove('container--position-right');
    
    document.querySelector('.double-columns__item--w-45').classList.remove('double-columns__item--w-45');
    
    document.querySelector('.js-footer__item__link-no-active').style.display = 'none';
    document.querySelector('.js-footer__item__link-active').style.display = 'flex';
}

if(window.innerWidth <= 380){
    document.querySelector('.js-btn-header').style.margin = '30px auto 0 auto';
}