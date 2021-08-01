function validasi(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
    error_message.style.color = "Red";
  
    var text;
    if(email.indexOf("@") == -1 || email.length < 6 && email==""){
      text = "Please Enter valid Email*";
      error_message.innerHTML = text;
      return false;
    }
    if(password.length <= 8 && password==""){
    text = "Please Enter Correct Password*";
    error_message.innerHTML = text;
    return false;
    }
    alert("Welcome To Thrift Universe");
    return true;
  }