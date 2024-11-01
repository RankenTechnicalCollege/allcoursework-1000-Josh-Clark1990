"use strict";

let cardCollection = [];
 

function addCard() {
  event.preventDefault();
  let name=document.getElementById("cardName").value;
  let set=document.getElementById("setName").value;
  let price=document.getElementById("cardPrice").value;
  let card= [cardName],[setName],[cardPrice];

  if (card !== ""){
    cardCollection.push(card);
    cardCollection();
    document.getElementById("cardName").value ="";
  }
}

function displayCollection(){
  let listDiv = document.getElementById("list");
  listDiv.innerHTML = "";
}

for (let i=0; i < cardCollection.length; i++){
  let cardItem = document.createElement("p");
  cardItem.textContent= cardCollection[i];
  listDiv.appendChild(cardItem);

}