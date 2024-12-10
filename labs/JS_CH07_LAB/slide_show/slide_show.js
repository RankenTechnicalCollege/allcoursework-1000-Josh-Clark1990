"use strict";

const $ = selector => document.querySelector(selector);
    
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;
let stop = false;

const mainImage = $("#main_image");   // the img element for the show
const caption = $("#caption");        // the h2 element for the caption

const runSlideShow = function() {
    if(stop){
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    caption.textContent = image.alt;
    }
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach start and pause event handlers
    $("#start").addEventListener("click", () => {
        const start = $("#start");
        start.disabled = true;
        pause.disabled = false;
        stop=true;
        runSlideShow();
        const slideInterval = setInterval(runSlideShow,2000);
   });
    $("#pause").addEventListener("click", () => {
        const pause =$("#pause");
        pause.disabled = false;
        start.disabled = false;
        stop = false;
    });
});
