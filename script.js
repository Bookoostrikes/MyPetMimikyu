import { Mimikyu } from "./mimikyu.js";

let mimikyu = new Mimikyu('Mimikyu', 100, 100, 100);

let feedButton = document.getElementById('feed');
let playButton = document.getElementById('play');
let renameButton = document.getElementById('rename');

setInterval(updateHunger, 1000);
setInterval(displayHunger, 100);
setInterval(updateBoredom, 1000);
setInterval(displayMood, 100);

let petHungerBox = document.getElementById('mimikyuHunger');
let petHungerText = document.createElement('p');
petHungerBox.append(petHungerText);


let petBoredomBox = document.getElementById('mimikyuBoredom');
let petBoredomText = document.createElement('p');
petBoredomBox.append(petBoredomText);


let petMoodBox = document.getElementById('mimikyuMood');
let petMoodText = document.createElement('p');
petMoodBox.append(petMoodText);

let actionBox = document.getElementById('actionBox');
let actionText = document.createElement('p');
actionBox.append(actionText);

let renameBox = document.getElementById('renameBox');
let renameText = document.createElement('p');

function displayHunger(){
if (mimikyu.hunger == 0){  
petHungerText.textContent = `${mimikyu.name}'s stomach is empty!`;
}
else if (mimikyu.hunger <= 10){
petHungerText.textContent = `${mimikyu.name} is feeling famished...`;
}
else if (mimikyu.hunger <= 25){
petHungerText.textContent = `${mimikyu.name} is starving.`;
}
else if (mimikyu.hunger <= 50){
petHungerText.textContent = `${mimikyu.name} is feeling hungry...`;
}
else if (mimikyu.hunger == 100){
petHungerText.textContent = `${mimikyu.name} is full`;
}
else if (mimikyu.hunger >= 75 || mimikyu.hunger <= 75){
petHungerText.textContent = `${mimikyu.name}'s stomach is content`;
}
}


function updateHunger(){

    if(mimikyu.hunger > 0){
    mimikyu.hunger -= 5;

    }
    if (mimikyu.hunger <= 50){
        updateMood();
    }
} //end of update hunger

feedButton.onclick = () =>{
if(mimikyu.hunger >= 100){
mimikyu.hunger = 100;
actionText.textContent = `${mimikyu.name} is already full!`;
setTimeout(function(){actionText.textContent = '';}, 3000);
return;
}

if(mimikyu.hunger < 100){
mimikyu.hunger += 100;
actionText.textContent = `${mimikyu.name} is happily eating the food!`;
setTimeout(function(){actionText.textContent = '';}, 3000);
    }


if(mimikyu.hunger >= 100){
mimikyu.hunger = 100;
}

}// end of feed onclick

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
}

playButton.onclick = () =>{
}

function displayMood(){
    if (mimikyu.mood <= 0){
petMoodText.textContent = `${mimikyu.name} hates you...`;
}
else if (mimikyu.mood <= 25){
petMoodText.textContent = `${mimikyu.name} is in a foul mood`;
}
else if (mimikyu.mood <= 50){
petMoodText.textContent = `${mimikyu.name} enjoys your prescene.`;
}
else if (mimikyu.mood <= 100 || mimikyu.mood >= 75){  
petMoodText.textContent = `${mimikyu.name} loves you!`;
}
}

function updateMood(){
    mimikyu.mood = mimikyu.mood + ( (mimikyu.hunger*1.5) + -75);
    if (mimikyu.mood <= 0){
        mimikyu.mood = 0;
    }
}

renameButton.onclick = () =>{
    let submitButton = document.createElement('button');
    submitButton.textContent = 'SUBMIT';

    let submitForm = document.createElement('input');

    renameBox.append(renameText);
    renameText.textContent = `What would you like to rename ${mimikyu.name} to?`;

    renameBox.append(submitButton);
    renameBox.append(submitForm);

    submitButton.onclick = () =>{
    let input = submitForm.value;
    renameText.textContent = `Congratulations! Your Mimikyu is now named ${input}!`;
    mimikyu.name = input;
   renameBox.removeChild(submitButton);
   renameBox.removeChild(submitForm);

   setTimeout(function(){renameBox.removeChild(renameText);}, 3000);
    }



}