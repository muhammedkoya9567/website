$(document).ready(function(){
    $("textarea").keydown(function(){
      $("textarea").css("background-color", "yellow");
    });
    $("textarea").keyup(function(){
      $("textarea").css("background-color", "pink");
    });
  });