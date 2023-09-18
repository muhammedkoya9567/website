function validate(){
    var firstname =document.getElementById("fname").value;
    var lastname =document.getElementById("lname").value;
    var email =document.getElementById("mail").value;
    var password =document.getElementById("password").value;
    var confirmpassword=document.getElementById("conpassword").value;
    var adress =document.getElementById("adress").value;


    if(firstname==""){
        alert("must have a username");
        document.form1.firstname.focus();
        return false;
    }
    if(lastname==""){
        alert("must have a lastnmae");
        document.form1.lastname.focus();
        return false;
    }
    if(email==""){
        alert("must have a email");
        document.form1.email.focus();
        return false;
    }
    if( password==""){
        alert("must have a password");
        document.form1.password.focus();
        return false;
    }
    if(confirmpassword!=password ){
        alert("mismacthing password");
        document.form1.conpassword.focus();
        return false;
    }
    if(adress==""){
        alert("must have adress");
        document.form1.adress.focus();
        return false;
    }
}
