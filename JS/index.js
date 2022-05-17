
var mediaButton = document.getElementById("mediaButton");
var topnavbarDiv = document.getElementById("navbar");
var icon = mediaButton.getElementsByClassName("fa-bars")


mediaButton.onclick = function () {

  topnavbarDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");


  if (icon.classList.contains("fa-bars")) {
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");
  }

  else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }

};



function validateForm() {
  //collect form data in JavaScript variables  
  var pw1 = document.getElementById("pswd1").value;
  var pw2 = document.getElementById("pswd2").value;
  var name1 = document.getElementById("fname").value;
  var email = document.getElementById("useremail").value;
  var emailformat = document.getElementById("useremail").value;
  var emailposition = email.indexOf("@");
  var emaildotposition = email.lastIndexOf(".");
  var phone = document.getElementById("userphonenumber").value;
  var gender = document.getElementById("gender").checked;
  var gendergroup = document.getElementById("gendergroup");
  var policy = document.getElementById("policy").checked;

  //check empty username field  
  if (name1 == "") {
    document.getElementById("fname").focus();
    document.getElementById("blankMsg").innerHTML = "**Username cannot be blank";
    document.getElementById("blankMsg").style.backgroundColor = "rgb(248, 204, 204)";
    return false;
  }



  //check empty email field
  if (email == "") {
    document.getElementById("useremail").focus();
    document.getElementById("emailmsg").innerHTML = "**Enter an email address";
    document.getElementById("emailmsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    return false;
  }

  if (emailposition<1 || emaildotposition<emailposition+2 || emaildotposition+2>=email.length){ 
    document.getElementById("useremail").focus(); 
    document.getElementById("emailmsg").innerHTML = "**Please enter a valid e-mail address";
    document.getElementById("emailmsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    //alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
    }  

  //check empty phone number field
  if (phone == "") {
    document.getElementById("userphonenumber").focus();
    document.getElementById("numbermsg").innerHTML = "**Enter your phone number";
    document.getElementById("numbermsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    return false;
  }

  if (phone.length < 5 ) {
    document.getElementById("userphonenumber").focus();
    document.getElementById("numbermsg").innerHTML = "**Enter a valid phone number";
    document.getElementById("numbermsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    return false;
  }  

  if (isNaN(phone)){
    document.getElementById("userphonenumber").focus();
    document.getElementById("numbermsg").innerHTML = "**Enter numeric values only";
    document.getElementById("numbermsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent"; 
    return false;
  }

  //check empty password field  
  if (pw1 == "") {
    document.getElementById("pswd1").focus();
    document.getElementById("message1").innerHTML = "**Enter a password";
    document.getElementById("message1").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    return false;
  }

  //password not equal to username
  if (pw1 == name1) {
    document.getElementById("pswd1").focus();
    document.getElementById("message1").innerHTML = "**Password cannot be the same with Username";
    document.getElementById("message1").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    return false;
  }

  //minimum password length validation  
  if (pw1.length < 8) {
    document.getElementById("pswd1").focus();
    document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
    document.getElementById("message1").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    return false;
  }

  //maximum length of password validation  
  if (pw1.length > 100) {
    document.getElementById("pswd1").focus();
    document.getElementById("message1").innerHTML = "**Password length must not exceed 100 characters";
    document.getElementById("message1").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    return false;
  }

  //check empty confirm password field  
  if (pw2 == "") {
    document.getElementById("pswd2").focus();
    document.getElementById("message2").innerHTML = "**Confirm your password";
    document.getElementById("message2").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message1").style.backgroundColor = "transparent";
    return false;
  }

  if (pw1 != pw2) {
    document.getElementById("pswd2").focus();
    document.getElementById("message2").innerHTML = "**Passwords are not the same";
    document.getElementById("message2").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message1").style.backgroundColor = "transparent";
    return false;
  }

  if (!gender) {
    document.getElementById("gendergroup").focus();
    document.getElementById("gendermsg").innerHTML = "**Pick a gender";
    document.getElementById("gendermsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message1").style.backgroundColor = "transparent";
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message2").style.backgroundColor = "transparent";
    return false;
  }


  if (!policy) {
    document.getElementById("policy").focus();
    document.getElementById("policymsg").innerHTML = "**Agree to privacy policy";
    document.getElementById("policymsg").style.backgroundColor = "rgb(248, 204, 204)";
    document.getElementById("blankMsg").innerHTML = "";
    document.getElementById("blankMsg").style.backgroundColor = "transparent";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("emailmsg").style.backgroundColor = "transparent";
    document.getElementById("numbermsg").innerHTML = "";
    document.getElementById("numbermsg").style.backgroundColor = "transparent";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message1").style.backgroundColor = "transparent";
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message2").style.backgroundColor = "transparent";
    document.getElementById("gendermsg").innerHTML = "";
    document.getElementById("gendermsg").style.backgroundColor = "transparent";
    return false;
  }

  else {
    document.write("Account created successfully");
  }
}


//visibility of password
var password1 = document.getElementById('pswd1');
var togglePassword1 = document.getElementById('togglePassword1');

showHidePassword1 = () => {
  if (password1.type == 'password') {
    password1.setAttribute('type', 'text');
    togglePassword1.classList.add('fa-eye-slash');
    togglePassword1.classList.remove('fa fa-eye');
  } else {
    password1.setAttribute('type', 'password');
    togglePassword1.classList.remove('fa-eye-slash');
    togglePassword1.classList.add('fa-eye');
  }
};

togglePassword1.addEventListener('click', showHidePassword1);


var password2 = document.getElementById('pswd2');
var togglePassword2 = document.getElementById('togglePassword2');

showHidePassword2 = () => {
  if (password2.type == 'password') {
    password2.setAttribute('type', 'text');
    togglePassword2.classList.add('fa-eye-slash');
    togglePassword2.classList.remove('fa fa-eye');
  } else {
    password2.setAttribute('type', 'password');
    togglePassword2.classList.remove('fa-eye-slash');
    togglePassword2.classList.add('fa-eye');
  }
};

togglePassword2.addEventListener('click', showHidePassword2);




