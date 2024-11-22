"use strict";

let again = "y";

do {
    let investment = 0;
    do {
        investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000));
    } while (isNaN(investment) || investment <= 0);

    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    } while (isNaN(rate) || rate < 0 || rate > 15);
    

    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    } while (isNaN(years) || years <= 0);


    let futureValue = investment;
    for (let i = 1; i <= years; i++) {
        let interestEarned = futureValue * rate / 100;
        futureValue += interestEarned;
    }

    document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
    document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
    document.write(`<p><label>Years:</label> ${years}</p>`);
    document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

    again = prompt("Repeat entries? (y/n?)", "y");

} while (again === "y");