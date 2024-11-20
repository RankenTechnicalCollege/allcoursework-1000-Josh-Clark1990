"use strict"

let email = document.getElementById('email');
let password = document.getElementById('password');

function login(){
  if (email.value == "admin@example.com"){
    document.getElementById('success').innerHTML="Welcome back Admin!";
  }
  else {document.getElementById('error').innerHTML="That email and password doesn't seem to be right. Try again"};
 
  if (password.value == "password"){
    document.getElementById('success').innerHTML="Welcome back Admin!";
  }
    else {document.getElementById('error').innerHTML="That email and password doesn't seem to be right. Try again"};
  event.preventDefault();  
  }
