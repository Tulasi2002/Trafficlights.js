let stopbutton = document.getElementById("stopButton");
let readybutton = document.getElementById("readyButton");
let gobutton = document.getElementById("goButton");
let stopbulb = document.getElementById("stopLight");
let readybulb = document.getElementById("readyLight");
let gobulb = document.getElementById("goLight");

function stop() {
    stopbutton.style.backgroundColor = "red";
    readybutton.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#4b5069";
    stopbulb.style.backgroundColor = "red";
    readybulb.style.backgroundColor = "#4b5069";
    gobulb.style.backgroundColor = "#4b5069";
}

function ready() {
    stopbutton.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "yellow";
    gobutton.style.backgroundColor = "#4b5069";
    stopbulb.style.backgroundColor = "#4b5069";
    readybulb.style.backgroundColor = "yellow";
    gobulb.style.backgroundColor = "#4b5069";
}

function go() {
    stopbutton.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "Green";
    stopbulb.style.backgroundColor = "#4b5069";
    readybulb.style.backgroundColor = "#4b5069";
    gobulb.style.backgroundColor = "Green";
}