"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} Read the instructions bozo ;)`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

const clearEntries = () => {
    document.getElementById("miles").reset;
    document.getElementById("gallons").reset;
    document.getElementById("mpg").reset; 
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
    $("#clearEntries").addEventListener("click",clearEntries);
});