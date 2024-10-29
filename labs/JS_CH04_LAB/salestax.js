"use strict";


document.addEventListener("DOMContentLoaded", (event)); {
  console.log("DOM fully loaded and parsed");
}



function calcTax() {
  const subtotal = parseFloat(document.getElementById("subtotal").value);

  if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000) {
    window.alert("Please enter a number between 0 and 10000");
    return
  }

  const taxrate = parseFloat(document.getElementById("taxrate").value);

  if (isNaN(taxrate) || taxrate < 0 || taxrate > 12) {
    window.alert("Please enter a number between 0 and 12");
    return
  }

  const salestax = (taxrate / 100) * subtotal;

  const total = salestax + subtotal;

  document.getElementById("salestax").value = salestax.toFixed(2);
  document.getElementById("total").value = total.toFixed(2);

  document.getElementById("calculate").onclick = function () {
    document.getElementById("subtotal").focus();
  };

  document.getElementById("clear").onclick = function () {
    document.getElementById("subtotal").focus();
  };

}