"use strict";

// initialize total variable
let total = 0;

//get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));
total += score1;

const score2 = parseInt(prompt("Enter test score"));
total += score2;

const score3 = parseInt(prompt("Enter test score"));
total += score3;

//calculate the average
const average = parseInt(total/3);

// display the scores
const html1 = "Score 1 =" + score1;
const html2 = "Score 2 =" + score2; 
const html3 = "Score 3 =" + score3; 
const html4 = "Average =" + average;

document.getElementById("output1").innerHTML = html1;
document.getElementById("output2").innerHTML = html2;
document.getElementById("output3").innerHTML = html3;
document.getElementById("output4").innerHTML = html4;