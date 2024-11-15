"use strict";

function addToArray(){
$("#add").addEventListener("click", () => {
  const newParagraph = document.createElement("p"); 
  
  const text = document.createTextNode();
  newParagraph.appendChild(text);

  const firstParagraph = $("p");
  const parent = firstParagraph.parentNode;

  parent.insertBefore(newParagraph, firstParagraph.nextElementSibling);
});



}

function displayResults(){

}

function displayScores() {
  
}