"use strict";

    
        const radio1 = document.getElementById('radio1');
        const radio2 = document.getElementById('radio2');
        const textInputLabel = document.getElementById('textInputLabel');
        const textOutputLabel = document.getElementById('textOutputLabel');
        // changing the text when radio is selected
        radio1.addEventListener('change', function () {
            if (radio1.checked) {
                textInputLabel.textContent = 'Enter F Degrees:';
                textOutputLabel.textContent = 'Degrees Celsius:'
        }});

        radio2.addEventListener('change', function () {
            if (radio2.checked) {
                textInputLabel.textContent = 'Enter C Degrees:';
                textOutputLabel.textContent = 'Degrees Fahrenheit:'
            }
        });

        //converting the temps
  function convertTemp(){

if (radio1.checked){
  let F = parseInt(document.getElementById("textInput").value);
  let C = (F -32) * 5/9;
  document.getElementById("textOutput").value = C.toFixed(2);
 }

if (radio2.checked){
  let C = parseInt(document.getElementById("textInput").value);
  let F = (C * 9/5) + 32;
  document.getElementById("textOutput").value = F.toFixed(2);
}
  }