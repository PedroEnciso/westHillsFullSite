"use strict"

//get the height of the game container to create equal increments
let gameContainer = document.getElementById('game-container');
let containerInfo = gameContainer.getBoundingClientRect();
const INCREMENT = (containerInfo.height - 25) / 9;


const input = document. querySelectorAll('input');
//add an event listener to each input box;
input[0].addEventListener('input', updateHeight);
input[1].addEventListener('input', updateHeight);
input[2].addEventListener('input', updateHeight);
input[3].addEventListener('input', updateHeight);
input[4].addEventListener('input', updateHeight);
input[5].addEventListener('input', updateHeight);
input[6].addEventListener('input', updateHeight);
input[7].addEventListener('input', updateHeight);


//the main function of the game
function updateHeight() {
    for(let i = 0; i < input.length; i++) {
        changeHeight(i);
        canSeeView(i);
    }
}


//initializing all variables to be used
let buildingId;
let number;
let building;
let buildingInfo;
let buildingHeight;
let buildingIncrement;

//change building height when input is changed
function changeHeight(i) {
    number = i + 1;
    buildingId = "building" + number;
    building = document.getElementById(buildingId);
    buildingInfo = building.getBoundingClientRect();
    buildingHeight = buildingInfo.height;
    buildingIncrement = parseInt(input[i].value) * INCREMENT + 35;

    if(input[i].value == 0) { 
        document.getElementById(buildingId).style.height = "35px";
    }
    else {
        document.getElementById(buildingId).style.height = buildingIncrement + "px";
    }
}

//determine the buildings color
let tallestBuilding;
function canSeeView(i) {
    //the first building will always see the view 
    if (i == 0) {
        tallestBuilding = input[0].value;
        return;
    }

    let value = input[i].value;
    if(value > tallestBuilding) {
        number = i + 1;
        buildingId = "building" + number;
        document.getElementById(buildingId).style.background = "rgb(5, 150, 105)";
        tallestBuilding = input[i].value;
    }
    else {
        number = i + 1;
        buildingId = "building" + number;
        document.getElementById(buildingId).style.background = "rgb(156, 163, 175)";
    }
}