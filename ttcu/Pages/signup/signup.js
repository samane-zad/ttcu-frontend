//compare pas
var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}



/*just for password 
  function myFunction() {
    var x = document.getElementById("comfirmPassword");
    if (x.type === "Password" ) {
      x.type = "text";
    } 
    
    else {
      x.type = "comfirmPassword";
    }
  }*/

  
  
/*const togglePassword = document.querySelector('#toggle_comfirmPassword');
const password = document.querySelector('#comfirmPassword');
togglePassword.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   // toggle the eye / eye slash icon
   this.classList.toggle('bi-eye');
});*/

     
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});