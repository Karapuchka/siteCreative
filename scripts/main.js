'use strict';

gsap.registerPlugin(ScrollTrigger);

const windowWidth        = document.documentElement.clientWidth;
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

    if( windowWidth <= 1000){

        listCreativeIs.classList.remove('flex-row');
        listCreativeIs.classList.add('flex-cl');
    }
    else{

        listCreativeIs.classList.remove('flex-cl');
        listCreativeIs.classList.add('flex-row');
    }

    if( windowWidth <= 650){

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

    if( windowWidth <= 300){

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
const arryFormApplicationTitle = document.querySelectorAll('.jsFooterTitle');


let modalErrorText = document.querySelector('.modal-application-error .modal-application__text');
    
let widthForm = formApplication.offsetHeigh;

function formClear(formName, formTitile){
    formName.innerHTML = 'Нам ушло уведомление! Как только мы его получим, сразу выйдем на связь для уточнения деталей.';

    try {
        formTitile.forEach(item =>{
            item.innerText = 'Супер!';
        });
    } catch (error) {
        formTitile.innerText = 'Супер!';
    }
}

let inputErrors = {
    mainError: function(nameInput){
        if(   nameInput.value == ''   || nameInput.value == ' '
        || nameInput.value == null || nameInput.value == undefined
        ){
    
            nameInput.style.boxShadow = '0 0 10px red';
        }
        else{
            nameInput.style.boxShadow = 'none';
        }
    },

    blueShadow: function(nameInput){
        nameInput.style.boxShadow = '0 0 10px blue';
    },

    noneShadow: function(nameInput){
        nameInput.style.boxShadow = '';
    },
}

formApplication.addEventListener('click', function(event){
    
    if(event.target.closest('#btn-application')){
        event.preventDefault();
            inputErrors.mainError(formApplication.elements.nameCompany);
            inputErrors.mainError(formApplication.elements.nameUser);
            inputErrors.mainError(formApplication.elements.emailUser);
            inputErrors.mainError(formApplication.elements.phoneUser);
    }

    if(event.target.closest('#applicationInputNameCompany')){

        inputErrors.noneShadow(formApplication.elements.nameCompany);
    }

    if(event.target.closest('#applicationInputNameUser')){

        inputErrors.noneShadow(formApplication.elements.nameUser)
    }

    if(event.target.closest('#applicationInputPhoneUser')){

        inputErrors.noneShadow(formApplication.elements.phoneUser)
    }

    if(event.target.closest('#applicationInputEmailUser')){
       
        inputErrors.noneShadow(formApplication.elements.emailUser)
    }
});

formApplication.addEventListener('focus', function(event){

    if(event.target.closest('#applicationInputNameCompany')){

        inputErrors.blueShadow(formApplication.elements.nameCompany);
    }

    if(event.target.closest('#applicationInputNameUser')){

        inputErrors.blueShadow(formApplication.elements.nameUser)
    }

    if(event.target.closest('#applicationInputPhoneUser')){

        inputErrors.blueShadow(formApplication.elements.phoneUser)
    }

    if(event.target.closest('#applicationInputEmailUser')){
       
        inputErrors.blueShadow(formApplication.elements.emailUser)
    }
});

formApplication.addEventListener('blur', function(event){
    if(event.target.closest('#applicationInputNameCompany')){

        inputErrors.noneShadow(formApplication.elements.nameCompany);
    }

    if(event.target.closest('#applicationInputNameUser')){

        inputErrors.noneShadow(formApplication.elements.nameUser)
    }

    if(event.target.closest('#applicationInputPhoneUser')){

        inputErrors.noneShadow(formApplication.elements.phoneUser)
    }

    if(event.target.closest('#applicationInputEmailUser')){
       
        inputErrors.noneShadow(formApplication.elements.emailUser)
    }
});
