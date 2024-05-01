function checkPassword(){
    const pwd = document.getElementById("password");
    const cpwd = document.getElementById("confirm_password");
    const eMsg = document.getElementById("msg");
    if(pwd.value != cpwd.value){
        eMsg.innerHTML = "Passwords do not match!";
    }
    else{
        eMsg.innerHTML = "";
    }
}