"use strict";

    document.addEventListener("DOMContentLoaded", (event)); {
      console.log("DOM fully loaded and parsed");
    };

      function calcChange(){
        let amount = parseInt(document.getElementById("amount").value);

        if(amount >= 0 && amount <= 99){
          makeChange();
        }
        else{
          window.alert("Please enter a valid amount between 0 and 99")
          return
        }
       
        function makeChange(){
          const quarters = parseInt(amount / 25);
            amount = amount % 25;
          const dimes = parseInt(amount / 10);
            amount = amount % 10;
          const nickels = parseInt(amount / 5);
            amount = amount % 5;
          const pennies = parseInt(amount / 1);
        
          document.getElementById("quarters").value = quarters;
          document.getElementById("dimes").value = dimes;
          document.getElementById("nickels").value = nickels;
          document.getElementById("pennies").value = pennies;
        }

        }