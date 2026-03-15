function checkLogin(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let correctUsername = "admin";
let correctPassword = "12345";

if(username === correctUsername && password === correctPassword){
alert("Login Successful");
return true;
}
else{
alert("Invalid Username or Password");
return false;
}

}