$(document).ready(function(){
    $("#submit").click(function(){
        var uname=$("#username").val();
        var pass=$("#pass").val();
        var conpassword=$("#cpass").val();
        var mail=$("#email").val();
   
        
        if(uname==""){
        alert("please enter the username")
        }
        else if(pass==""){
        alert("please enter the passwrod")
        }
        else if(conpassword != pass){
            alert("missmatching password")
        }
        else if(mail==""){
            alert("please enter the email")
        } 
  

    });
});