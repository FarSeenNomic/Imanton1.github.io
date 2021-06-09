"use strict";

/*
   Countdown Clock
   Author: Nomic
   Date:   2017-04-20
*/

/* Execute the function to run and display the countdown clock */

window.onload = startup

function startup() {
    runClock();
    setInterval("runClock()", 1000);

    let image = document.getElementById("logoImg");
    let marqueeP = createElement("p", {
        'class': 'marquee'
    });
    image.parentNode.insertBefore(marqueeP, image);

    let spans = [
        createElement("span"),
        createElement("span"),
        createElement("span"),
        createElement("span")
    ];
    let imgs = [
        image.cloneNode(true),
        image.cloneNode(true),
        image.cloneNode(true),
        image
    ]

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('id', `img${i}`);
        spans[i].appendChild(imgs[i]);
        marqueeP.appendChild(spans[i]);
    }
}

function createElement(type, props) {
    var $e = document.createElement(type);

    for (var prop in props) {
        $e.setAttribute(prop, props[prop]);
    }

    return $e;
}

/* Function to create and run the countdown clock */
function runClock() {
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML =
        dateStr + "<br />" + timeStr;

    /* Calculate the days until January 1st */
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

    /* Calculate the hours left in the current day */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    /* Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


    /* Display the time left until New Year's Eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}