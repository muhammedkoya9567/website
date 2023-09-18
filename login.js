function Validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pd").value;
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);


    if (username == "") {
        alert("must have a username");
        document.form2.username.focus();
        return false;
    }

    if (password == "") {
        alert("must have a password");
        document.form2.password.focus();
        return false;
    }
    if (string1 == string2){
        document.getElementById('success').innerHTML = "Form is validated Successfully";
        //alert("Form is validated Successfully");
               return true;
             }
             else{       
        document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
        //alert("Please enter a valid captcha.");
               return false;
        
             }
}
function removeSpaces(string){
    return string.split(' ').join('');
  }