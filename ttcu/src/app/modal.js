const button = document.querySelector(".btn-join");
const modal = document.querySelector(".overlay");
const close = document.querySelector(".btn-purple");
button.addEventListener("click",function(){
  modal.style.display="block"
})
close.addEventListener("click",function(){
  modal.style.display="none"
})

document.body.addEventListener("click",function(e){
  if(e.target.classList[0]=="overlay") {
    modal.style.display="none" 
  }
})