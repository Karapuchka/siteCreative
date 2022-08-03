gsap.registerPlugin(ScrollTrigger);

const mainGradientItem = document.querySelector('.jsListCreativeIs');
const mainContentImageBg = document.querySelector('.main-content--image-bg');
const listCreativeIs = document.querySelector('.jsListCreativeIs');
const mainTopOffer = document.querySelector('.jsMainTopOffer');
const mainTopStairs = document.querySelector('.jsMainTopStairs');
const mainTopStairsText = document.querySelectorAll('.jsMainTopStairs .main-top__item-text');

window.addEventListener('DOMContentLoaded', function(){
    gsap.from('.menu .menu__item ', {duration: 1, y:-30, opacity: 0});

    gsap.from('.header__bot ', {duration: 1, y:30, opacity: 0});
    
    gsap.from('#jsArrayOfferTextOne', {duration: 1, opacity: 0, y:30, delay: 1});
    
    gsap.from('#jsArrayOfferTextTwo', {duration: 1, opacity: 0, y:-30, delay: 1});
    
    gsap.from('.header__offer-item-text', {duration: 1, y: 30, opacity: 0, delay: 1});
    
    gsap.from('.jsBtnApply', {duration: 1, y: -30, opacity: 0, delay: 1});
    
    gsap.from('.header__offer-item-caption', {duration: 1, opacity: 0, delay: 1});
    
    gsap.from('.header-bg', {duration: 2, x: -300, opacity: 0, delay: 2});
    
    gsap.from('.header__block-btn .btn', {duration: 1, x: -10, opacity: 0, delay: 1});
    
    gsap.from('.header__block-btn .btn-scroll', {duration: 1, x: 10, opacity: 0, delay: 1});

    mainContentImageBg.style.height = mainContentImageBg.offsetWidth * 75 / 100 + 'px'; 

    if(listCreativeIs.offsetWidth <= 1000){
        listCreativeIs.classList.remove('flex-row');
        listCreativeIs.classList.add('flex-cl');
    }
    else{
        listCreativeIs.classList.remove('flex-cl');
        listCreativeIs.classList.add('flex-row');
    }

    if(mainTopOffer.offsetWidth <= 650){
        mainTopOffer.classList.add('flex-wrap--reverse');
    }
    else{
        mainTopOffer.classList.remove('flex-wrap--reverse');
    }

    if(mainTopStairs.offsetWidth <= 650){
        mainTopStairs.classList.add('flex-wrap--wrap');
        mainTopStairsText.forEach(item =>{
            item.style.flexBasis = '100%';
        })
    }
    else{
        mainTopStairs.classList.remove('flex-wrap--wrap');
    }
});

gsap.from(mainTopOffer, {duration: 1, opacity: 0, scrollTrigger: {trigger: '.jsMainTopBlock', toggleActions: 'restart none none none', start: '10% 100%', end: '100% 20%'}});

const wrapper = document.querySelector('.wrapper');

function scrollApplication(){
    const btnApplication = document.querySelector('.footer');
    btnApplication.scrollIntoView({behavior: 'smooth'});
}

wrapper.addEventListener('click', function(event){
    if(event.target.closest('.btn')){
        scrollApplication();
    }

    if(event.target.closest('.btn-scroll')){
        scrollApplication();
    }
});