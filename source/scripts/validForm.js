const formInfo = document.querySelector('.form');

formInfo.onclick = (event)=>{

    if(event.target.closest('#form-btn')){
        event.preventDefault();
    
        for (let i = 0; i < formInfo.length; i++) {
            if(formInfo.children[i].value == '' && formInfo.children[i].classList.contains('form__input')){
                validInput.error(formInfo.children[i])
            }        
        }
    }

    if(event.target.closest('.form__input') && event.target.closest('.error-valid')){
        validInput.checkPassed(event.target.closest('.form__input'));
    }
}

let validInput = {

    error(input){
        input.classList.add('error-valid');
        gsap.to(input, {
            duration: .7,
            boxShadow: '1px 1px red, -1px 1px red, 1px -1px red, -1px -1px red',
            ease: 'power2.out(2)',
        })
    },

    checkPassed(input){
        input.classList.remove('error-valid');
        gsap.to(input, {
            duration: .7,
            boxShadow: 'none',
            ease: 'power2.out(2)',
        })
    },
}