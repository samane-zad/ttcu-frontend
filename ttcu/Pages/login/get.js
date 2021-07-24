/*const { findByDisplayValue } = require("@testing-library/react");*/
/*get*/
document.getElementById('submit').addEventListener('click',loadUsers);

function loadUsers(){
  var xhr = new XMLHttpRequest();

xhr.open('GET','http://192.168.1.4:8082/auth/login',true);


xhr.onload = function(){
  if(this.status==200){
    
    var users = JSON.parse(this.responseText);
    var token=xhr.getResponseHeader['Authorization'];
    console.log(token);
    localStorage.setItem("Token",token);
    
 var output= '';
 for(var i in users){
output +=
'<div class="user">'+

'<img src="'+users[i].avatar_url+'" width="70" height="70">'+
'<ul>' +
'<li> ID!'+users[i].id+'</li>'+
'<li> Login!'+users[i].login+'</li>'+

'</ul>'+
'</div>';


 }
 document.getElementById('users').innerHTML = output;


  }
}

xhr.send();

}
/*******************************************************************/
/*document.getElementById('form').addEventListener('submit',getinfo);
function getinfo(e){
    e.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    var xhr =new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true)


    xhr.onload = function(){
        if(this.status==200){
          
          console.log(JSON.parse(this.responseText));
          
      
      
       }
      
      
      
      xhr.send();
      
      }
}*/
/*******************************************************************post*/
document.getElementById('form').addEventListener('submit',login);
document.getElementById('submit').addEventListener('click',login);

function login(){
    
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    var params="username"+username;
    
    var xhr =new XMLHttpRequest();
    xhr.open('POST','http://192.168.1.4:8082/auth/login',true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    xhr.onload = function(){
        if(this.status==200){
          var token=xhr.getResponseHeader['Authorization'];
          console.log(token);
          localStorage.setItem("Token",token);
      
      
       }
      
      
      
      xhr.send(params);
      
      }
}