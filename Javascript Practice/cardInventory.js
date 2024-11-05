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

/*
"use strict";

let cardCollection = [];

function addCard(event) {
  event.preventDefault(); // Prevents the form from refreshing the page
  let name = document.getElementById("cardName").value;
  let set = document.getElementById("setName").value;
  let price = document.getElementById("cardPrice").value;

  // Create a card object with name, set, and price
  let card = {
    name: name,
    set: set,
    price: price
  };

  // Add the card to the collection if fields are filled
  if (name !== "" && set !== "" && price !== "") {
    cardCollection.push(card);
    displayCollection(); // Call displayCollection to update the displayed list
    document.getElementById("cardName").value = "";
    document.getElementById("setName").value = "";
    document.getElementById("cardPrice").value = "";
  }
}

function displayCollection() {
  let listDiv = document.getElementById("list");
  listDiv.innerHTML = ""; // Clear the previous list

  // Display each card in the collection
  cardCollection.forEach(card => {
    let cardItem = document.createElement("p");
    cardItem.textContent = `Name: ${card.name}, Set: ${card.set}, Price: $${card.price}`;
    listDiv.appendChild(cardItem);
  });
}

  */