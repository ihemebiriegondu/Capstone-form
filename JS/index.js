function handleSignupFormSubmit(e) {
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
  
    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
      return 'Please use at least one capital letter.';
    }
  
    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
      return 'Please use at least one number.';
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
      const emailErrorMessageElement = document.querySelector('.email .form-field__messages');
      // show email error message to user
      emailErrorMessageElement.innerText = emailErrorMessage;
    }
  
    if (passowrdErrorMessage) {
      // select the email form field message element
      const passwordErrorMessageElement = document.querySelector('.password .form-field__messages');
      // show password error message to user
      passwordErrorMessageElement.innerText = passowrdErrorMessage;
    }
  }


var password = document.getElementById('password');
      var togglePassword = document.getElementById('togglePassword');

      showHidePassword = () => {
        if (password.type == 'password') {
          password.setAttribute('type', 'text');
          togglePassword.classList.remove('fa fa-eye-slash');
          togglePassword.classList.add('fa-eye');
        } else {
          togglePassword.classList.remove('fa-eye');
          password.setAttribute('type', 'password');
        }
      };

      togglePassword.addEventListener('click', showHidePassword);


      