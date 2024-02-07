// close-icon reset datab of  input 
    document.getElementById("resetInput").addEventListener("click", function() {
        // Reload the page
        location.reload();
    });

// Get the sign-up button element
const signUpButton = document.querySelector('.register-link');

// Add event listener to the sign-up button
signUpButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Clear the input fields in the login form
  const loginEmailInput = document.getElementById('emailInput');
  const loginPasswordInput = document.getElementById('pswInput');
  loginEmailInput.value = '';
  loginPasswordInput.value = '';

  // Reset the styles of email and password input boxes
  const emailInputBox = document.querySelector('.input-box');
  const passwordInputBox = document.querySelector('.input-box-password');
  emailInputBox.classList.remove('valid', 'invalid');
  passwordInputBox.classList.remove('valid', 'invalid');

  // Reset the styles of email and password icons
  const emailIcon = document.getElementById('emailIcon');
  const passwordIcon1 = document.getElementById('hide1');
  const passwordIcon2 = document.getElementById('hide2');
  emailIcon.style.color = '';
  passwordIcon1.style.color = '';
  passwordIcon2.style.color = '';

  // Reset the styles of email and password labels
  const emailLabel = document.querySelector('.input-box label[for="email"]');
  const passwordLabel = document.querySelector('.input-box-password label[for="psw"]');
  emailLabel.style.marginTop = '';
  passwordLabel.style.marginTop = '';
  
  // Reload the page after clearing the input fields
  
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

// login form lock icon hide & show 
function myFunction() {
  var x = document.getElementById("pswInput");
var y = document.getElementById("hide1");
var z = document.getElementById("hide2");

if(x.type === 'password') {

x.type = "text";
y.style.display = "block";
z.style.display = "none";

}
else{

x.type = "password";
y.style.display = "none";
z.style.display = "block";

}

}


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
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjcVDRp8kWq-Obl9SwDhsBD_yuSg5fYen_DES7SJZ3YK4xTuxXFJGAfyIMtmcYhjCv/exec'
const form = document.forms['login-form']

form.addEventListener('submit', e => {
  e.preventDefault();

  // logn: Check if email and password are empty
  const emailInput = form.elements['emailInput'];
    const passwordInput = form.elements['pswInput'];

  if (emailInput.value.trim() === '' ||
   passwordInput.value.trim() === '') {   // Apply red border
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

// selecting  of  class  animation & class
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
  

// hide  & show  wrapper on click outside 
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



//---------------------------------//

// Register usrname validation
const usernameInput = document.getElementById('usernameInput');
const usernameIcon = document.getElementById('usernameIcon');
const inputBoxUsername = document.querySelector('.input-box-username');

usernameInput.addEventListener('input', validateRegisterUsername);

function validateRegisterUsername() {
   const usernamePattern = /^$|^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8}$/;
   const isValidUsername = usernamePattern.test(usernameInput.value);

   inputBoxUsername.classList.remove('invalid', 'valid');
   inputBoxUsername.classList.add(isValidUsername ? 'valid' : 'invalid');
}

// Register email validation
const registerEmailInput = document.getElementById('registerEmailInput');
const registerEmailIcon = document.getElementById('registerEmailIcon');
const inputBoxEmail = document.querySelector('.input-box-email');

registerEmailInput.addEventListener('input', validateRegisterEmail);

function validateRegisterEmail() {
   const emailPattern = /^$|^[a-zA-Z0-9._%+-]+@gmail\.com$/;
   const isValidEmail = emailPattern.test(registerEmailInput.value);

   inputBoxEmail.classList.remove('invalid', 'valid');
   inputBoxEmail.classList.add(isValidEmail ? 'valid' : 'invalid');
}


// Register password validation
const registerPasswordInput = document.getElementById('registerPswInput');
const registerPasswordIcon1 = document.getElementById('registerHide1');
const registerPasswordIcon2 = document.getElementById('registerHide2');

registerPasswordInput.addEventListener('input', validateRegisterPassword);

function validateRegisterPassword() {
   const passwordPattern = /^$|^.{8,}$/;
   const isValidPassword = passwordPattern.test(registerPasswordInput.value);

   const inputBoxPassword = document.querySelector('.form-box.register .input-box-password');

   inputBoxPassword.classList.remove('invalid', 'valid');
   inputBoxPassword.classList.add(isValidPassword ? 'valid' : 'invalid');
}



// register form lock icon hide & show 

function  registerLock() {
  var x = document.getElementById("registerPswInput");
var y = document.getElementById("registerHide1");
var z = document.getElementById("registerHide2");

if(x.type === 'password') {

x.type = "text";
y.style.display = "block";
z.style.display = "none";

}
else{

x.type = "password";
y.style.display = "none";
z.style.display = "block";

}

}



// user output || red-box & empty input valid 



// Register form submission
const registerForm = document.forms['register-form'];
registerForm.addEventListener('submit', e => {
  e.preventDefault();

  // Check if email and password are empty
  const usernameInput = registerForm.elements['usernameInput'];
  const emailInput = registerForm.elements['registerEmailInput'];
  const passwordInput = registerForm.elements['registerPswInput'];

if (usernameInput.value.trim() === '' ||
    emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    usernameInput.style.border = '1px solid #FF0000';
    usernameInput.style.boxShadow = '0 0 5px #FF0000';
    
    emailInput.style.border = '1px solid #FF0000';
    emailInput.style.boxShadow = '0 0 5px #FF0000';

    passwordInput.style.border = '1px solid #FF0000';
    passwordInput.style.boxShadow = '0 0 5px #FF0000';

    // Remove red border after 1 second
    setTimeout(() => {
      usernameInput.style.border = '';
      usernameInput.style.boxShadow = '';
      
      emailInput.style.border = '';
      emailInput.style.boxShadow = '';
      
      passwordInput.style.border = '';
      passwordInput.style.boxShadow = '';
    }, 1000);

    return; // Stop further execution if validation fails
  }
 
  // Validate email pattern
  const usernamePattern = /^$|^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8}$/;

  if (!usernamePattern.test(usernameInput.value)) {
    // Apply red border to invalid email
    usernameInput.style.border = '2px solid #FF0000';
    
    // Remove red border after 1 second
    setTimeout(() => {
      usernameInput.style.border = '';
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
  fetch(scriptURL, { method: 'POST', body: new FormData(registerForm) })
    .then(response => alert("Submitted Successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});
