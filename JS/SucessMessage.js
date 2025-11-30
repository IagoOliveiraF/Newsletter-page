document.addEventListener('DOMContentLoaded', () => {
    let emailIndexValue = sessionStorage.getItem('email');
    let emailSucessPersistyChange = document.querySelector('.emailSucessPersisty');
      console.log(emailIndexValue);
    console.log(emailSucessPersistyChange);
    emailSucessPersistyChange.textContent = emailIndexValue;
  
})