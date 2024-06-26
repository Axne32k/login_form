// perfect apepar for login  loading spinner
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show the spinner
  document.getElementById('spinnerContainer').style.display = 'block';

  setTimeout(function() {
    // Hide the spinner after some time (Simulating processing)
    document.getElementById('spinnerContainer').style.display = 'none';
  }, 3000); // Change 2000 to the actual processing time of your form
});


// close-icon reset data  of  input 
document.getElementById("resetInput").addEventListener("click", function() {
  // Reload the page
  location.reload();
});

// Get the sign-up button element
const signUpButton = document.querySelector('.register-link');

// Add event listener to the sign-up button
signUpButton.addEventListener('click', function(event) {
  // Check if the spinner is currently displayed
  const spinnerContainer = document.getElementById('spinnerContainer');
  if (spinnerContainer.style.display === 'block') {
    event.preventDefault(); // Prevent the default behavior of the sign-up button
    event.stopPropagation(); // Stop the event from propagating to parent elements
  }
  else {


    // Clear the input fields in the login form or reset input onclick signup text

    const loginEmailInput = document.getElementById('emailInput');
    const loginPasswordInput = document.getElementById('pswInput');
    loginEmailInput.value = '';
    loginPasswordInput.value = '';


    // Clear the input fields in the sign-up form or reset input onclick login text

    const signUpEmailInput = document.getElementById('registerEmailInput');
    const signUpPasswordInput = document.getElementById('registerPswInput');
    signUpEmailInput.value = '';
    signUpPasswordInput.value = '';






    // login & sign up  Reset the styles of red icon  boxes

    const emailInputBox = document.querySelector('.input-box');
    const inputBoxEmail = document.querySelector('.input-box-email');

    const passwordInputBox = document.querySelector('.input-box-password');
    const inputBoxPassword = document.querySelector('.form-box.register .input-box-password');

    emailInputBox.classList.remove('valid', 'invalid');
    inputBoxEmail.classList.remove('valid', 'invalid');

    passwordInputBox.classList.remove('valid', 'invalid');
    inputBoxPassword.classList.remove('valid', 'invalid');


    // login & signup Reset the styles of  email and password icons when switching in between 




    const emailIcon = document.getElementById('emailIcon');
    const registerEmailIcon = document.getElementById('registerEmailIcon');

    const passwordIcon1 = document.getElementById('hide1');
    const passwordIcon2 = document.getElementById('hide2');
    const registerPasswordIcon1 = document.getElementById('registerHide1');
    const registerPasswordIcon2 = document.getElementById('registerHide2');


    emailIcon.style.color = '';

    registerEmailIcon.style.color = '';

    passwordIcon1.style.color = '';
    passwordIcon2.style.color = '';

    registerPasswordIcon1.style.color = '';
    registerPasswordIcon2.style.color = '';

    // Reset the styles of email and password labels
    const emailLabel = document.querySelector('.input-box label[for="email"]');
    const passwordLabel = document.querySelector('.input-box-password label[for="psw"]');
    emailLabel.style.marginTop = '';
    passwordLabel.style.marginTop = '';

    // Reload the page after clearing the input fields

  }
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

// login form lock icon hide & show 
function myFunction() {
  var x = document.getElementById("pswInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === 'password') {

    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";

  }
  else {

    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";

  }

}



// Proceed with form submission if validation passes
document.addEventListener("DOMContentLoaded", function() {
  const dialog = document.getElementById("dialog");

  // Function to show the dialog message
  function showDialog() {
    dialog.style.display = "block";
    // Automatically hide the dialog after 3 seconds
    setTimeout(function() {
      dialog.style.display = "none";
      location.reload(); // Reload the page
    }, 2000);
  }
})



// user output || red-box & empty input valid 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjcVDRp8kWq-Obl9SwDhsBD_yuSg5fYen_DES7SJZ3YK4xTuxXFJGAfyIMtmcYhjCv/exec';
const form = document.forms['login-register-form'];
const spinnerContainer = document.getElementById('spinnerContainer');
const loginButton = document.querySelector('.btnlogin-popup');

// Assuming spinner element is added to the HTML

form.addEventListener('submit', e => {
  e.preventDefault();

  spinnerContainer.style.display = 'none'; // Hide spinner if submission fails

  const emailInput = form.elements['emailInput'];
  const passwordInput = form.elements['pswInput'];
  const loginButton = document.getElementById('loginButton'); // Get a reference to the login button
  const loginText = document.getElementById('loginText'); // Get a reference to the login text span

  // Check if email and password are empty
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    // Apply red border
    emailInput.style.border = '1px solid #FF0000';
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

    // Do not proceed further
    return;
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

    // Do not proceed further
    return;
  }

  // Validate password length (minimum 8 characters)
  if (passwordInput.value.trim().length < 8) {
    // Apply red border to invalid password
    passwordInput.style.border = '2px solid #FF0000';

    // Remove red border after 1 second
    setTimeout(() => {
      passwordInput.style.border = '';
    }, 1000);

    // Do not proceed further
    return;
  }

  // Show spinner while processing form submission
  spinnerContainer.style.display = 'block';
  loginText.style.display = 'none'; // Hide the login text

  // Function to show the dialog message
  function showDialog() {
    dialog.style.display = "flex";
    // Automatically hide the dialog after 2 seconds
    setTimeout(function() {
      dialog.style.display = "none";
      location.reload(); // Reload the page
    }, 4000);
  }




  // Proceed with form submission if validation passes
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      spinnerContainer.style.display = 'none'; // Hide spinner after submission
      loginText.style.display = 'inline'; // Show the login text
      showDialog(); // Show the dialog message
    })
    .catch(error => {
      spinnerContainer.style.display = 'none'; // Hide spinner if submission fails
      loginText.style.display = 'inline'; // Show the login text
      console.error('Error!', error.message);
    })

});

// selecting  of  class  animation & class
const wrapper = document.querySelector('.wrapper');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// add & remove wrapper... 
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
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
};


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



//_-_-_-__-_-_-SIGN UP_-__-_-_-_-_-_//


// perfect apepar for signup  loading spinner 
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission



  // Show the spinner
  document.getElementById('spinnerSignupcontainer').style.display = 'block';

  setTimeout(function() {
    // Hide the spinner after some time (Simulating processing)
    document.getElementById('spinnerSignupcontainer').style.display = 'none';

  }, 3000); // Change 2000 to the actual processing time of your form
});


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

function registerLock() {
  var x = document.getElementById("registerPswInput");
  var y = document.getElementById("registerHide1");
  var z = document.getElementById("registerHide2");

  if (x.type === 'password') {

    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";

  }
  else {

    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";

  }

}


// Proceed with form submission if validation passes
document.addEventListener("DOMContentLoaded", function() {
  const dialogbox = document.getElementById("dialogbox");

  // Function to show the dialog message
  function showDialog() {
    dialogbox.style.display = "block";
    // Automatically hide the dialog after 3 seconds
    setTimeout(function() {
      dialogbox.style.display = "none";
      location.reload(); // Reload the page
    }, 2000);
  }
})




// user output || red-box & empty input valid 


// Register form submission
const registerForm = document.forms['register-form'];
const spinnerSignupcontainer = document.getElementById('spinnerSignupcontainer');
const signupButton = document.querySelector('.btnlogin-popup');

registerForm.addEventListener('submit', e => {
  e.preventDefault();

  spinnerSignupcontainer.style.display = 'none'; // Hide spinner if submission fails

  // Check if email and password are empty
  const emailInput = registerForm.elements['registerEmailInput'];
  const passwordInput = registerForm.elements['registerPswInput'];

  const signupButton = document.getElementById('signupButton'); // Get a reference to the login button
  const signupText = document.getElementById('signupText'); // Get a reference to the login text span


  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {

    emailInput.style.border = '1px solid #FF0000';
    emailInput.style.boxShadow = '0 0 5px #FF0000';

    passwordInput.style.border = '1px solid #FF0000';
    passwordInput.style.boxShadow = '0 0 5px #FF0000';

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

  // Show spinner while processing form submission
  spinnerSignupcontainer.style.display = 'block';
  signupText.style.display = 'none'; // Hide the login text

  // Function to show the dialog message 
  function showDialog() {
    dialogbox.style.display = "flex";
    // Automatically hide the dialog after 2 seconds
    setTimeout(function() {
      dialogbox.style.display = "none";
      location.reload(); // Reload the page
    }, 2000);
  }




  // Proceed with form submission if validation passes
  fetch(scriptURL, { method: 'POST', body: new FormData(registerForm) })
    .then(response => {
      spinnerSignupcontainer.style.display = 'none'; // Hide spinner after submission
      signupText.style.display = 'inline'; // Show the login text
      showDialog(); // Show the dialog message
    })
    .catch(error => {
      spinnerSignupcontainer.style.display = 'none'; // Hide spinner if submission fails
      signupText.style.display = 'inline'; // Show the login text
      console.error('Error!', error.message);
    });
});