
function whenLoadingThePage() {
    let Form = document.querySelector('form');


    Form.addEventListener('submit', function (event) {
        event.preventDefault();
        let inputEmail = document.querySelector('.container_newsletter_section_content_form_inputEmail');
        let messageErrorEmail = document.querySelector('#errorMessage')
        let valueOfInput = inputEmail.value;
        if (valueOfInput == "" || valueOfInput <= 6) {
            inputEmail.classList.add('container_newsletter_section_content_form_inputEmailError')
            messageErrorEmail.classList.add('errorMessageShow')

        } else {
            inputEmail.classList.remove('container_newsletter_section_content_form_inputEmailError')
            messageErrorEmail.classList.remove('errorMessageShow')
            sessionStorage.setItem('email', valueOfInput)
            window.location.href = "http://127.0.0.1:5500/sucessMessage.html?email="

          
        }



    })


    
}


