import { Mimikyu } from "./mimikyu.js";

let mimikyu = new Mimikyu('Mimikyu', 100, 100, 100);

let feedButton = document.getElementById('feed');
let playButton = document.getElementById('play');

setInterval(hunger, 10000);
setInterval(updateHunger, 100);
setInterval(updateBoredom, 1000);

let petHungerBox = document.getElementById('mimikyuHunger');
let petHungerText = document.createElement('p');

let petBoredomBox = document.getElementById('mimikyuBoredom');
let petBoredomText = document.createElement('p');

function updateHunger(){
if (mimikyu.hunger == 0){  
petHungerText.textContent = `${mimikyu.name}'s stomach is empty!`;
}
else if (mimikyu.hunger < 10){
petHungerText.textContent = `${mimikyu.name} is feeling famished...`;
}
else if (mimikyu.hunger < 25){
petHungerText.textContent = `${mimikyu.name} is starving.`;
}
else if (mimikyu.hunger < 50){
petHungerText.textContent = `${mimikyu.name} is feeling hungry...`;
}
else if (mimikyu.hunger == 100){
petHungerText.textContent = `${mimikyu.name} is full`;
}
else if (mimikyu.hunger > 75 || mimikyu.hunger < 75){
petHungerText.textContent = `${mimikyu.name}'s stomach is content`;
}
petHungerBox.append(petHungerText);
}


function hunger(){
    if(mimikyu.hunger > 0){
    mimikyu.hunger -= 10;
    }
}

feedButton.onclick = () =>{
if(mimikyu.hunger < 100){
mimikyu.hunger += 5;
}
if(mimikyu.hunger > 100){
mimikyu.hunger == 100;
}
}

function updateBoredom(){
    mimikyu.boredom -= 1;
    displayBoredom();
}

function displayBoredom(){
if (mimikyu.boredom <= 0){
petBoredomText.textContent = `${mimikyu.name} is bored.`;
}
else if (mimikyu.boredom <= 25){
petBoredomText.textContent = `${mimikyu.name} is getting restless...`;
}
else if (mimikyu.boredom <= 50){
petBoredomText.textContent = `${mimikyu.name} is enjoying itself.`;
}
else if (mimikyu.boredom <= 100 || mimikyu.boredom >= 75){  
petBoredomText.textContent = `${mimikyu.name} is having so much fun!`;
}
petBoredomBox.append(petBoredomText);
}

playButton.onclick = () =>{


}

