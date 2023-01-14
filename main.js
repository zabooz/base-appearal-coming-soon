const submitBtn = document.querySelector('button');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');
const userInput= document.querySelector('#email');
const heroPic   = document.querySelector('.hero-pic img');


const emailRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

heroPicChange = () =>{
    if(window.innerWidth >= 800){
        heroPic.src = './images/hero-desktop.jpg'
    }else{
        heroPic.src = './images/hero-mobile.jpg'
    }
}

heroPicChange();

userInput.addEventListener('input', e =>{

    const userInputText = document.querySelector('#email').value;
    if(emailRegex.test(userInputText)){
        submitBtn.disabled = false;
        errorIcon.classList.remove('error-icon-show');
        errorText.classList.remove('error-text-show')

    }else{
        errorText.classList.add('error-text-show');
        errorIcon.classList.add('error-icon-show');
        submitBtn.disabled = true;
    }
});

