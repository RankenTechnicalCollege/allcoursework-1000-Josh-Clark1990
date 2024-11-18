"use strict";
document.addEventListener("DOMContentLoaded"), () =>{
  const $ = selector => document.querySelector(selector);

const names = [];
const scores = []; 

$(addToArray).onclick= () => {
  if(checkInput()){
    let name = $(name).value;
    let score = parseFLoat($(score).value);
    names.push(name);
    scores.push(score);
  }
else if(checkInput()== false);

}
}

$('#display').onclick = () => {
  let results = $("#results");
  resultsSpan1 = results.childNodes[3].lastChild;
  const max = Math.max(...scores);
  resultsSpan1.textContent = max;
  resultsSpan2 = results.childNodes[5].lastChild;
  watchIndex = scores.indexof(max);
  resultsSpan2.textContent = names[matchIndex];
}

$('#scores').onclick = () => {
  let section =$("section");
  section.innerHTML = "";
  for (let i = 0; i < names.length; i++){
    let pElement = document.createElement("p");
    let ScoresText = document.createTextNode(`${names[i]} ${scores[i]}`);
    pElement.appendChild(ScoresText);
    section.appendChild(pElement);
  }
}

