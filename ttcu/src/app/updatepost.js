$(function () {
<<<<<<< HEAD:ttcu/src/app/updatepost.js
$("input").prop("disabled", true);
$("textarea").prop("disabled", true);
$("select").prop("disabled", true);

    $(".edit").click(function () {
      $("html").addClass("active");
    $("input").prop("disabled", false);
    $("textarea").prop("disabled", false);
    $("select").prop("disabled", false);
  });
    $(".save").click(function () {
      $("html").removeClass("active");
    $("input").prop("disabled", true);
    $("textarea").prop("disabled", true);
    $("select").prop("disabled", true);
  });

    function resizeInput() {
      $(this).attr("size", $(this).val().length + 2);
    }
  $("input").keyup(resizeInput).each(resizeInput);

  

    function resizeTextArea() {
        $(this).attr("size", $(this).val().length + 8);
=======
  $("input").prop("disabled", true);
  $("textarea").prop("disabled", true);
  $("select").prop("disabled", true);
  
      $(".edit").click(function () {
        $("html").addClass("active");
      $("input").prop("disabled", false);
      $("textarea").prop("disabled", false);
      $("select").prop("disabled", false);
    });
      $(".save").click(function () {
        $("html").removeClass("active");
      $("input").prop("disabled", true);
      $("textarea").prop("disabled", true);
      $("select").prop("disabled", true);
    });
  
      function resizeInput() {
        $(this).attr("size", $(this).val().length + 2);
>>>>>>> 2a1e506244a495ef69ecf6260b3645dcd481d83f:ttcu/Pages/postpage/updatepost.js
      }
    $("input").keyup(resizeInput).each(resizeInput);
  
    
  
      function resizeTextArea() {
          $(this).attr("size", $(this).val().length + 8);
        }
      
      $("textarea").keyup(resizeTextArea).each(resizeTextArea);
  
    });
    
    