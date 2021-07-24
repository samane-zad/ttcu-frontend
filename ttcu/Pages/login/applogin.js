/*const form={
username:document.getElementById('username'),
password:document.getElementById('password'),
submit:document.getElementById('submit'),
messages:document.getElementById('form-messages')
};
const requestData =`username=${form.username.value}&password${form.password.value}`;

form.submit.addEventListener('click',( )=> {
const request= new XMLHttpRequest();
request.onload=()=>{
let responseObject =null;

try{
  responseObject=JSON.parse(request.responseText);
}catch(e){
  console.error('could not parse json')
}

if(responseObject){
  handleReeponse(responseObject);
}




console.log(request.responseText);
};
request.open('post','check-login.js');
request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
request.send(requestData);
});
function handleReeponse(responseObject){
if(responseObject){
location.href='dashbord.html';
}
else{
  while(form.messages.firstChild){
    form.messages.removeChild(form.messages.firstChild);

  }
  responseObject.messages.forEach(messages => {
    const li=document.createElement('li');
    li.textContent=messages;
    form.messages.appendChild(li);
  });
  form.messages.style.display="block";
}
}
*/