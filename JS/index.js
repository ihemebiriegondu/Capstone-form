/*function handleSignupFormSubmit(e) {
    // prevent default browser behaviour
    e.preventDefault();
  
    const formDataEntries = new FormData(signupForm).entries();
    const { email, password } = Object.fromEntries(formDataEntries);
  
    // submit email and password to an API
  }

function validatePassword(password, minlength) {
    if (!password) return 'Password is required';
  
    if (password.length < minlength) {
      return `Please enter a password that's at least ${minlength} characters long`;
    }
  
    return '';
  }

  function validateEmail(email) {
    if (!email) return 'Email is required';
      
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
  
    return '';
  }

  function handleSignupFormSubmit(e) {
    // prevent default browser behaviour
    e.preventDefault();
  
    const formDataEntries = new FormData(signupForm).entries();
    const { email, password } = Object.fromEntries(formDataEntries);
  
    const emailErrorMessage = validateEmail(email);
    const passowrdErrorMessage = validatePassword(password);
  
    if (!emailErrorMessage) {
      // select the email form field message element
      const emailErrorMessageElement = document.querySelector('#useremail .form-field__messages');
      // show email error message to user
      emailErrorMessageElement.innerText = emailErrorMessage;
    }
  
    if (passowrdErrorMessage) {
      // select the email form field message element
      const passwordErrorMessageElement = document.querySelector('#password .form-field__messages');
      // show password error message to user
      passwordErrorMessageElement.innerText = passowrdErrorMessage;
    }
  }*/




/*const checkUsername = () => {

  let valid = false;
  const min = 3,
      max = 25;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
      showError(usernameEl, 'Username cannot be blank.');
  } 
  else {
      showSuccess(usernameEl);
      valid = true;
  }
  return valid;
}

const checkEmail = () => {
let valid = false;
const email = emailEl.value.trim();
if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
} else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.')
} else {
    showSuccess(emailEl);
    valid = true;
}
return valid;
}

const checkPassword = () => {

let valid = false;

const password = passwordEl.value.trim();

if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
} else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
} else {
    showSuccess(passwordEl);
    valid = true;
}

return valid;
};

const checkConfirmPassword = () => {
let valid = false;
// check confirm password
const confirmPassword = confirmPasswordEl.value.trim();
const password = passwordEl.value.trim();

if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, 'Please enter the password again');
} else if (password !== confirmPassword) {
    showError(confirmPasswordEl, 'Confirm password does not match');
} else {
    showSuccess(confirmPasswordEl);
    valid = true;
}

return valid;
};

form.addEventListener('submit', function (e) {
// prevent the form from submitting
e.preventDefault();

// validate forms
let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

// submit to the server if the form is valid
if (isFormValid) {

}
});*/




var password = document.getElementById('pswd1');
*/var password = document.getElementById('pswd2');*/
var togglePassword = document.getElementById('togglePassword');  

showHidePassword = () => {
  if (password.type == 'password') {
    password.setAttribute('type', 'text');
    togglePassword.classList.remove('fa fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  } else {
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
    password.setAttribute('type', 'password');
  }
};

togglePassword.addEventListener('click', showHidePassword);


 

 function validateForm() {  
  //collect form data in JavaScript variables  
  var pw1 = document.getElementById("pswd1").value;  
  var pw2 = document.getElementById("pswd2").value;  
  var name1 = document.getElementById("fname").value;  
  var togglePassword = document.getElementById('togglePassword');  
    
  //check empty first name field  
  if(name1 == "") {  
    document.getElementById("blankMsg").innerHTML = "Enter a Username";  
    return false;  
  }  
  
  //check empty password field  
  if(pw1 == "") {  
    document.getElementById("message1").innerHTML = "Enter a password";  
    return false;  
  }  
  
  //check empty confirm password field  
  if(pw2 == "") {  
    document.getElementById("message2").innerHTML = "Confirm your password";  
    return false;  
  }   
   
  //minimum password length validation  
  if(pw1.length < 8) {  
    document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
  }  

  //maximum length of password validation  
  if(pw1.length > 50) {  
    document.getElementById("message1").innerHTML = "**Password length must not exceed 50 characters";  
    return false;  
  }  
  
  if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Passwords are not same";  
    return false;  
  } else {  
    alert ("Your password created successfully");  
    document.write("JavaScript form has been submitted successfully");  
  }  
}  