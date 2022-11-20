const btnMenu    = document.querySelectorAll('.menu__list__item');
const btn        = document.querySelectorAll('.btn');

// Анимация для кнопок, если сайт открыт на ПК
if(detect.mobile() == null){

    //Анимация кнопок для скролла к форме обратной связи
    btn.forEach(item =>{

        item.onpointerover = ()=>{
            gsap.to(item,{
                duration: .7,
                background: 'linear-gradient(143.05deg, #dc6911 20.13%, #ef5149 85.02%)',
                ease: 'power2.out(1)',
            })
        }

        item.onpointerout = ()=>{
            gsap.to(item,{
                duration: .7,
                background: 'linear-gradient(143.05deg, #FCA82D 20.13%, #EFC449 85.02%)',
                ease: 'power2.out(1)',
            })
        }
    });

    //Анимация для кнопок меню
    btnMenu.forEach(item =>{
        let line = lineForMenuItem();

        item.appendChild(line);

        item.onpointerover = ()=>{
            gsap.to(line, {
                scaleX: 1,
                transformOrigin: 'right',
            })
        }

        item.onpointerout = ()=>{
            
            gsap.to(line, {
                scaleX: 0,
                transformOrigin: 'left',
            })
        }
    })
}
// Анимация для кнопок, если сайт открыт на мобильном устройстве или планшете
else{

    document.addEventListener('click', (event)=>{

        //Анимация кнопок для скролла к форме обратной связи
        if(event.target.closest('.btn')){

            gsap.to(event.target.closest('.btn'), {
                duration: .7,
                background: 'linear-gradient(143.05deg, #dc6911 20.13%, #ef5149 85.02%)',
                ease: 'power2.out(1)',
            })

            setTimeout(()=>{
                gsap.to(event.target.closest('.btn'),{
                    duration: .7,
                    background: 'linear-gradient(143.05deg, #FCA82D 20.13%, #EFC449 85.02%)',
                    ease: 'power2.out(1)',
                })
            }, 1200);
        }

        //Анимация для кнопок меню
        if(event.target.closest('.menu__list__item')){

            gsap.to(event.target.closest('.menu__list__item__link'), {
                duration: .7,
                color: '#FCA82D',
                ease: 'power2.out(1)',
            })

            setTimeout(()=>{
                gsap.to(event.target.closest('.menu__list__item__link'),{
                    duration: .7,
                    color: '#fff',
                    ease: 'power2.out(1)',
                })
            }, 1200);
        }
    })
}

function lineForMenuItem(){
    let div = document.createElement('div');
    gsap.to(div,{
        width: '100%',
        height: '2px',
        background: '#fff',
        position:  'absolute',
        bottom: '-80%',
        left: '0',
        scaleX: 0,
        transformOrigin: 'left',
        duration: .7,
        ease: 'power2.out(2)',
    })

    return div;
}