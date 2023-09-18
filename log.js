$(document).ready(function(){
    $("#login").click(function(){
        var uname=$("#username").val();
        var pass=$("#password").val();

        
        if(uname==""){
        alert("please enter the username")
        }
        else if(pass==""){
        alert("please enter the passwrod")
        }

    });
});