window.addEventListener('scroll', customScroll);

function customScroll() {
  var ypos = window.pageYOffset;
  if(ypos > 90) {
    $('.top-header').css({
      'height': 50+'px'
    });
    $('.top-header h1').css({
      'font-size': '20px',
      'line-height': '50px'
    });
  }
  else {
    $('.top-header').css({
      'height': 100+'px'
    });
    $('.top-header h1').css({
      'font-size': '2em',
      'line-height': '100px'
    });
  }
}