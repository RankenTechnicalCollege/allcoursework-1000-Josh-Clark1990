"use strict";





function convertTemp(){

if ($("#FtoC").checked){
  let F = parseInt(document.getElementById("fahrenheit").value);
  let C = (F -32) * 5/9;
  document.getElementById("celsius").value = C;
 } else alert("Please Enter a Temperature");

if ($("#CtoF").checked){
  let C = parseInt(document.getElementById("celsius").value);
  let F = (C * 5/9) - 32;
  document.getElementById("fahrenheit").value = F;
} else alert("Please Enter a Temperature");
 
}