 
  //////Sidbarrrrrrrrrrrr/////////
  var expander = $("#expander");
var expanderLeft = expander.attr("left");

function expandMenu() {
  $("#expander").fadeOut("150");
  $("#cssmenu")
    .animate(
      {
        left: 0
      },
      200
    )
    .addClass("expanded");
}

function unexpandMenu() {
  $("#cssmenu")
    .animate(
      {
        left: -250
      },
      200
    )
    .removeClass("expanded");
  $("#expander").fadeIn("150");
}

$("#unexpander").on("click", function () {
  unexpandMenu();
});

expander.on("click", function () {
  expandMenu();
});

function realign() {
  var topMenuHeight = $("nav").first().height();
  $("#cssmenu").css("top", topMenuHeight + "px");
}
$(document).ready(function () {
  $(window).resize(function () {
    realign();
  });
});

$(document).ready(function () {
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = $("nav").first().height(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href");
    var offsetObj = $(href);
    var offsetTop = offsetObj.offset().top;
    var scrollTo = offsetTop - topMenuHeight;
    $("html, body").stop().animate(
      {
        scrollTop: scrollTo
      },
      500
    );
    e.preventDefault();
  });

  // Bind to scroll

  function spyIt() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top - 5 < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href=#" + id + "]")
        .parent()
        .addClass("active");
    }
  }

  $(window).on("scroll resize load", function () {
    spyIt();
  });
});

/***/
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}