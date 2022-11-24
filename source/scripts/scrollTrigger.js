const footer = document.querySelector('.footer');

document.addEventListener('click', (event)=>{
    if(event.target.closest('.js-btn-scroll-form')){
        scrollInto(footer);
    }
});

//Скрол до определенного элемента
function scrollInto(element){
    element.scrollIntoView({block: "center", behavior: "smooth"});
}