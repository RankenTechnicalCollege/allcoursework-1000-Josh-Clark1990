"use strict";
const calculateFV(){
  const investment = parseFloat($('investment').value);
  const rate = parseFloat($('rate').value);
  const years = parseFloat($('years').value);

  const future_value = (investment * rate) * years;

}

const $ = selector => document.querySelector(selector);