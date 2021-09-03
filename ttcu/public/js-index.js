
// // Automatic Slideshow - change image every 4 seconds
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000);    
// }

// // Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//   var x = document.getElementById("navDemo");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else { 
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// // When the user clicks anywhere outside of the modal, close it
// var modal = document.getElementById('ticketModal');
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// //dark mode
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");}
  

//   /**sroll to top***/
// Get the button



var myscbutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myscbutton.style.display = "block";
  } else {
    myscbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**preloder***/


var myVar;

function loadingpage() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

}
/**Typing Animation***/

function typingEffect() {
  const contactTexts = shuffleArray([
    "اینجا راه تازه ای برای یادگیری است",
    "Want to tell me something?😊",
    "Ask me anything!😄",
    "Want to talk about an idea?",
    "Lets do something together!🤗",
    "Do you need help in something?👍"
  ]);
  const typedtext = document.getElementsByClassName("typedtext")[0];
  let removing = false;
  let idx = (char = 0);

  setInterval(() => {
    // We define the interval of the typing speed

    // If we do not reach the limit, we insert characters in the html
    if (char < contactTexts[idx].length)
      typedtext.innerHTML += contactTexts[idx][char];

    // 15*150ms = time before starting to remove characters
    if (char == contactTexts[idx].length + 15) removing = true;

    // Removing characters, the last one always
    if (removing)
      typedtext.innerHTML = typedtext.innerHTML.substring(
        0,
        typedtext.innerHTML.length - 1
      );

    char++; // Next character

    // When there is nothing else to remove
    if (typedtext.innerHTML.length === 0) {
      // If we get to the end of the texts we start over
      if (idx === contactTexts.length - 1) idx = 0;
      else idx++;

      char = 0; // Start the next text by the first character
      removing = false; // No more removing characters
    }
  }, 150); // Typing speed, 150 ms
}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
/***/
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
/****************step********/
