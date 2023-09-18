$(document).ready(function(){
  $("button").mouseover(function(){
    $("#btn").css("background-color", "yellow");
  });
  $("button").mouseout(function(){
    $("#btn").css("background-color", "lightgray");
  });
});