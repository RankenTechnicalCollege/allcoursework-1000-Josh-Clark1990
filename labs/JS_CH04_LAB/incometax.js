"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});


function findIncome() {
  const taxincome = parseFloat(document.getElementById("taxincome").value);
  let owed = 0;

  if (isNaN(taxincome) || taxincome <= 0) {
      window.alert("Please enter a valid positive number");
      return; 
  }

  if (taxincome <= 9875) {
      owed = taxincome * 0.10;
  } else if (taxincome <= 40125) {
      owed = (taxincome - 9875) * 0.12 + 987.50;
  } else if (taxincome <= 85525) {
      owed = (taxincome - 40125) * 0.22 + 4617.50;
  } else if (taxincome <= 163300) {
      owed = (taxincome - 85525) * 0.24 + 14605.50;
  } else if (taxincome <= 207350) {
      owed = (taxincome - 163300) * 0.32 + 33271.50;
  } else if (taxincome <= 518400) {
      owed = (taxincome - 207350) * 0.35 + 47367.50;
  } else {
      owed = (taxincome - 518400) * 0.37 + 156235;
  }

  document.getElementById("owed").value = owed.toFixed(2);
  console.log("Tax owed: ", owed.toFixed(2));
}