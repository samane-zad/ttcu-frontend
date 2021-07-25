function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >10 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.fontSize = "10px";
  } else {
    document.getElementById("header").style.fontSize = "17px";
  }
}

