"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const image1 = $("#image1");
    const image2 = $("#image2");

    // preload images
    const links = $("#image_list").querySelectorAll("a");

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    for(let link of links){    
        image1.addEventListener("mouseover", () => {
            image1.src="images/hero.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src="images/release.jpg";
        });
        image2.addEventListener("mouseover", () => {
            image2.src="images/deer.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src="images/bison.jpg";
        });           
    }

});
