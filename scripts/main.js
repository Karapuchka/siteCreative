gsap.registerPlugin(ScrollTrigger);

const container          = document.querySelector('.container');
const mainGradientItem   = document.querySelector('.jsListCreativeIs');
const mainContentImageBg = document.querySelector('.main-content--image-bg');
const listCreativeIs     = document.querySelector('.jsListCreativeIs');
const mainTopOffer       = document.querySelector('.jsMainTopOffer');
const mainTopStairs      = document.querySelector('.jsMainTopStairs');
const footer             = document.querySelector('.footer');

const mainTopStairsTexts = document.querySelectorAll('.jsMainTopStairs .main-top__item-text');
const mainPartrensItems  = document.querySelectorAll('.jsMainPArtrensItem');

const btnApplication = document.getElementById('btn-application');

window.addEventListener('DOMContentLoaded', function(){

    gsap.from('.menu .menu__item ', {duration: 1, y:-30, opacity: 0});

    gsap.from('.header__bot', {duration: 1, y:30, opacity: 0});
    
    gsap.from('#jsArrayOfferTextOne', {duration: 1, opacity: 0, y:30, delay: 1});
    
    gsap.from('#jsArrayOfferTextTwo', {duration: 1, opacity: 0, y:-30, delay: 1});
    
    gsap.from('.header__offer-item-text', {duration: 1, y: 30, opacity: 0, delay: 1});
    
    gsap.from('.jsBtnApply', {duration: 1, y: -30, opacity: 0, delay: 1});
    
    gsap.from('.header__offer-item-caption', {duration: 1, opacity: 0, delay: 1});
    
    gsap.from('.header-bg', {duration: 2, x: -300, opacity: 0, delay: 2});
    
    gsap.from('.header__block-btn .btn', {duration: 1, x: -10, opacity: 0, delay: 1});
    
    gsap.from('.header__block-btn .btn-scroll', {duration: 1, x: 10, opacity: 0, delay: 1});

    mainContentImageBg.style.height = mainContentImageBg.offsetWidth * 75 / 100 + 'px'; 

    if( container.offsetWidth <= 1000){

        listCreativeIs.classList.remove('flex-row');
        listCreativeIs.classList.add('flex-cl');
    }
    else{

        listCreativeIs.classList.remove('flex-cl');
        listCreativeIs.classList.add('flex-row');
    }

    if( container.offsetWidth <= 650){

        mainTopOffer.classList.add('flex-wrap--reverse');

        mainTopStairs.classList.add('flex-wrap--wrap');

        mainTopStairsTexts.forEach(item =>{

            item.style.flexBasis = '100%';
        });

        mainPartrensItems.forEach(item =>{

            item.classList.add('flex-cl');
            item.classList.remove('flex-row');
        });
    }
    else{

        mainTopStairs.classList.remove('flex-wrap--wrap');

        mainTopOffer.classList.remove('flex-wrap--reverse');
    }

    if( container.offsetWidth <= 300){

        mainTopOffer.style.padding = '10px 5px';
    }

});

gsap.from(mainTopOffer, {duration: 1, opacity: 0, scrollTrigger: {trigger: mainTopOffer, toggleActions: 'restart none none none', start: '10% 100%', end: '100% 20%'}});

const wrapper = document.querySelector('.wrapper');

function scrollApplication(eventScroll){

    eventScroll.scrollIntoView({behavior: 'smooth'});
}

wrapper.addEventListener('click', function(event){

    if(event.target.closest('.btn')){

        scrollApplication(footer);
    }

    if(event.target.closest('.btn-scroll')){

        scrollApplication(footer);
    }
});

const modalApplicationInfo  = document.querySelector('.modal-application-info');
const modalApplicationError = document.querySelector('.modal-application-error');

const formApplication = document.forms.applicationForm;

let modalErrorText = document.querySelector('.modal-application-error .modal-application__text');

formApplication.addEventListener('click', function(event){

    if(formApplication.elements.nameCompany){
        formApplication.elements.nameCompany.style.boxShadow = 'none';
    }

    if(formApplication.elements.nameUser){
        formApplication.elements.nameUser.style.boxShadow    = 'none';
    }

    if(formApplication.elements.phoneUser){
        formApplication.elements.phoneUser.style.boxShadow   = 'none';
    }

    if(formApplication.elements.emailUser){
        formApplication.elements.emailUser.style.boxShadow   = 'none';
    }
    
    if(formApplication.elements.btnApplication){
        event.preventDefault();

         //Проверка на ввод названи компании
        if(   formApplication.elements.nameCompany.value == ''   || formApplication.elements.nameCompany.value == ' '
           || formApplication.elements.nameCompany.value == null || formApplication.elements.nameCompany.value == undefined
        ){

            modalErrorText.innerText = 'Введите название компании!';

            formApplication.elements.nameCompany.style.boxShadow = '0 0 10px red';
            
            gsap.to(modalApplicationError, {y: -80, duration: 1});
            
            gsap.to(modalApplicationError, {delay: 3, y: 80, duration: 2});
        }

        //Проверка на ввод имени
        if(    formApplication.elements.nameUser.value == ''   || formApplication.elements.nameUser.value == ' '
            || formApplication.elements.nameUser.value == null || formApplication.elements.nameUser.value == undefined
        ){

            modalErrorText.innerText = 'Введите ваше имя!';

            formApplication.elements.nameUser.style.boxShadow = '0 0 10px red';
            
            gsap.to(modalApplicationError, {y: -80, duration: 1});
            
            gsap.to(modalApplicationError, {delay: 3, y: 80, duration: 2});
        }

        //Проверка на ввод имени
        if(   formApplication.elements.phoneUser.value == ''      || formApplication.elements.phoneUser.value == ' '
           || formApplication.elements.phoneUser.value == null    || formApplication.elements.phoneUser.value == undefined
        ){

            modalErrorText.innerText = 'Введите ваш номер телефона!';

            formApplication.elements.phoneUser.style.boxShadow = '0 0 10px red';
            
            gsap.to(modalApplicationError, {y: -80, duration: 1});
            
            gsap.to(modalApplicationError, {delay: 3, y: 80, duration: 2});
        }


        if(    formApplication.elements.emailUser.value == ''       || formApplication.elements.emailUser.value == ' '
            || formApplication.elements.emailUser.value == null     || formApplication.elements.emailUser.value == undefined
         ){

            modalErrorText.innerText = 'Введите ваш адрес электронной почты!';
            
            formApplication.elements.emailUser.style.boxShadow = '0 0 10px red';

            gsap.to(modalApplicationError, {y: -80, duration: 1});
            
            gsap.to(modalApplicationError, {delay: 3, y: 80, duration: 2});
        }

        //Проверка на пустые поля (все)
        if((    formApplication.elements.nameCompany.value == ''    || formApplication.elements.nameCompany.value == ' '    || formApplication.elements.nameCompany.value == null    || formApplication.elements.nameCompany.value == undefined)
            && (formApplication.elements.nameUser.value    == ''    || formApplication.elements.nameUser.value    == ' '    || formApplication.elements.nameUser.value    == null    || formApplication.elements.nameUser.value    == undefined)
            && (formApplication.elements.phoneUser.value   == ''    || formApplication.elements.phoneUser.value   == ' '    || formApplication.elements.phoneUser.value   == null    || formApplication.elements.phoneUser.value   == undefined)
            && (formApplication.elements.emailUser.value   == ''    || formApplication.elements.emailUser.value   == ' '    || formApplication.elements.emailUser.value   == null    || formApplication.elements.emailUser.value   == undefined))
        { 
            modalErrorText.innerText = 'Введите данные!';

            formApplication.elements.nameCompany.style.boxShadow = '0 0 10px red';
            formApplication.elements.nameUser.style.boxShadow    = '0 0 10px red';
            formApplication.elements.phoneUser.style.boxShadow   = '0 0 10px red';
            formApplication.elements.emailUser.style.boxShadow   = '0 0 10px red';
        
            gsap.to(modalApplicationError, {y: -80, duration: 1});
            
            gsap.to(modalApplicationError, {delay: 3, y: 80, duration: 2});
        }

        if(    !formApplication.elements.nameCompany.value == ''    && !formApplication.elements.nameCompany.value == ' '    && !formApplication.elements.nameCompany.value == null    && !formApplication.elements.nameCompany.value == undefined
            && !formApplication.elements.nameUser.value    == ''    && !formApplication.elements.nameUser.value    == ' '    && !formApplication.elements.nameUser.value    == null    && !formApplication.elements.nameUser.value    == undefined
            && !formApplication.elements.phoneUser.value   == ''    && !formApplication.elements.phoneUser.value   == ' '    && !formApplication.elements.phoneUser.value   == null    && !formApplication.elements.phoneUser.value   == undefined
            && !formApplication.elements.emailUser.value   == ''    && !formApplication.elements.emailUser.value   == ' '    && !formApplication.elements.emailUser.value   == null    && !formApplication.elements.emailUser.value   == undefined)
        { 
        
            gsap.to(modalApplicationInfo, {y: -80, duration: 1});
            
            gsap.to(modalApplicationInfo, {delay: 3, y: 80, duration: 2});
        }
        /* 
        Добавить проверку на ввод номера телефона и email
        */
    }
});
