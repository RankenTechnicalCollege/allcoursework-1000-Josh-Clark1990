"use strict"

let clicks = 0;
let clicks2 = 0;
let score = 0;

function upDoot(){
  clicks += 1;
  document.getElementById('likes').innerHTML= clicks;
  score += 1;
  document.getElementById("totalScore").innerHTML= clicks - clicks2;
}

function downDoot(){
  clicks2 += 1;
  document.getElementById('dislikes').innerHTML= clicks2;
  score -= 1;
  document.getElementById("totalScore").innerHTML= clicks - clicks2;
}