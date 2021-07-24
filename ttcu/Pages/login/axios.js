
/**/

/*document.getElementById('postform').addEventListener('submit',postinfo);

function postinfo(e){
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var xhr =new XMLHttpRequest();
  xhr.open('POST','user.json',true)

  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xhr.onload=function(){
    console.log(this.responseText);



    var user=JSON.parse(this.responseText);







  }
  xhr.send();
}


*/
























/*// Send a POST request
const axios = require('axios').default;
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });



axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/












/*
$(document).ready(function() {

  $('#submit').click(function() {

      $.ajax({
          type: "POST",
          url: 'admin/login.php',
          dataType: "json",
           encode: true,
          data: {
              username: $("#username").val(),
              password: $("#password").val()
          },
          success: function(data)
          {
              if (data === 'Correct') {
                  window.location.replace('welcome.html');
              }
              else {
                  alert(data);
              }
          }
      });

  });

});

*/

/*
$(document).ready(function () {
  $('#submit').submit(function (event) {
    var formData = {
     username: $('#username').val(),
      password: $('#password').val(),
      
    };

    $.ajax({
      type: "POST",
      url: "",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});

*/





/*
var myAjaxRequst=new XMLHttpRequest();
myAjaxRequst.open("GET","ajax.js");
myAjaxRequst.onreadystatechange=function(){
if(this.readyState==XMLHttpRequest.DONE){
if(this.status==200){
   console.log("sucsses");
}
else if(this.status==404){
   console.log("feild");
}

}
};
myAjaxRequst.send();
*/

/*
$("#login").click(function(){
   $.ajax({
     type: 'GET', 
     url: 'login.php', 
     dataType: 'json',
     data: $('#Form').serialize(),
     success: function (x) {                
       $("#add_err").html(x.response);
     },
     beforeSend:function(){
       $("#add_err").html("Loading...")
     }
   });
   return false;
 });*/