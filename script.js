import { Mimikyu } from "./mimikyu.js";

let mimikyu = new Mimikyu('Mimikyu', 100, 100, 100, 1);

let feedButton = document.getElementById('feed');
let playButton = document.getElementById('play');
let renameButton = document.getElementById('rename');
let gameButton = document.getElementById('gameButton');

let gameStatus = 0;

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

let gameBox = document.getElementById('gameBox');
let gameText = document.createElement('p');

let playerRoll;
let compRoll;




setInterval(updateHunger, 10000);
setInterval(displayHunger, 100);
setInterval(updateBoredom, 1000);
setInterval(displayMood, 100);


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
    mimikyu.hunger -= 10;

    }
    if (mimikyu.hunger <= 50){
        updateMood('hunger1');
    }
} //end of update hunger

feedButton.onclick = () =>{

if (mimikyu.numFood <= 0){
    actionText.textContent = `You dont have any food! Go win some at the games parlor!`
    setTimeout(function(){actionText.textContent = '';}, 3000);
    return;
}
if(mimikyu.hunger >= 100){
mimikyu.hunger = 100;
actionText.textContent = `${mimikyu.name} is already full!`;
setTimeout(function(){actionText.textContent = '';}, 3000);
return;
}

if(mimikyu.hunger < 100){
 mimikyu.numFood--;
mimikyu.hunger += 10;
actionText.textContent = `${mimikyu.name} is happily eating the food!`;
setTimeout(function(){actionText.textContent = '';}, 3000);
updateMood('feed1');
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

function updateMood(moodUpdate){
    switch(moodUpdate){
    case'hunger1': //when mimikyu's hunger 50 >
    mimikyu.mood = mimikyu.mood + ( (mimikyu.hunger*1.5) + -75);
    if (mimikyu.mood <= 0){mimikyu.mood = 0;}
    break;
    case'feed1': //when pet is fed
        mimikyu.mood = mimikyu.mood += 5;
        if(mimikyu.mood > 100){mimikyu.mood = 100;}
    break;
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

gameButton.onclick = () =>{
    if (gameStatus > 0){
            gameText.textContent = "You're already in a game! Finish the current game!";
        return;
    } 

    gameStatus = (Math.floor(Math.random()*2)+1);
    switch(gameStatus){
    case 1: //rock paper scissors
    rpsChoice();
    break;
    case 2:
    blackJack();
    break;
    } //end of game status

}

function rpsChoice(){
let choices = ['rock', 'paper', 'scissors'];
    gameText.textContent = 'Welcome! Beat me in rock paper scissors and win some food!';
    gameBox.append(gameText);

    for(let i = 0; i < 3; i++){
        let choiceButton = document.createElement('button');
        choiceButton.textContent = choices[i];

    choiceButton.addEventListener("click", function() {
    const compChoices = ['rock', 'paper', 'scissors'];
    let choice = choices[i];
    let compChoice = compChoices[(Math.floor(Math.random()*compChoices.length))];

    if (compChoice == choice){
        gameText.textContent = `You chose ${choice}, I chose ${compChoice}. It's a tie! `;
    }
    else if ((choice == 'rock' && compChoice == 'paper') ||
        (choice == 'scissors' && compChoice == 'rock') ||
        (choice == 'paper' && compChoice == 'scissors')){
        gameText.textContent = `You chose ${choice}, I chose ${compChoice}. You lose! `;
        mimikyu.numFood++;
        }
    else{gameText.textContent = `You chose ${choice}, I chose ${compChoice}. You win! You won 1 food for ${mimikyu.name}! `;}
        for( let i = 0; i < 3; i++){
        gameBox.removeChild(gameBox.lastElementChild);
        }
     gameStatus = 0;
  });
        gameBox.append(choiceButton);

    }
}

function blackJack(){
        playerRoll = 0;
        gameText.textContent = 'Welcome! You may roll 1 or 2 dies. Roll higher than me and you win! Go over 7, tie with me or lower than me and you lose!';
        gameBox.append(gameText);

        let rollButton = document.createElement('button');
        rollButton.textContent = 'Roll';
        gameBox.append(rollButton);

        rollButton.onclick = () =>{
                    gameBox.removeChild(rollButton);
                playerRoll = Math.floor((Math.random()*6)+1);
                gameText.textContent = `You rolled a ${playerRoll}!`;
                setTimeout(blackjackComp, 2000);
        
        }

}

function blackjackComp(){
    compRoll = 0;
    let reRoll = document.createElement('button');
    let hold = document.createElement('button');

    reRoll.textContent = 'Reroll';
    hold.textContent = 'hold';

    gameText.textContent = `Alright, its my turn...`;
    
    compRoll = Math.floor((Math.random()*6)+1);
    setTimeout(function() {gameText.textContent = `I rolled a ${compRoll}!`}, 2000);
    setTimeout(function() {gameText.textContent = `Will you roll or hold?`;
        gameBox.append(reRoll);
        gameBox.append(hold);
    }, 4000);

    hold.onclick = () =>{
        gameBox.removeChild(reRoll);
        gameBox.removeChild(hold);
        if (playerRoll > compRoll){
            gameText.textContent = `Heh, good choice. I guess I'll roll...`;
            let doubleRoll = Math.floor((Math.random()*6)+1);
            let totalRoll = doubleRoll + compRoll;
            setTimeout(function () {gameText.textContent = `I rolled a ${doubleRoll} and my total is ${totalRoll}!`}, 2000);
                if(totalRoll > 7 || totalRoll < playerRoll){
                setTimeout(function () {gameText.textContent = `Oh no! I lost!`}, 4000);
                setTimeout(function () {gameStatus = 0}, 4000);

                }
                else{
                    setTimeout(function () {gameText.textContent = `Heh, I win!`}, 4000);
                    setTimeout(function () {gameStatus = 0}, 4000);
                    }

        }
        else{
            gameText.textContent = `Heh, I will abstain from rolling. With my total at ${compRoll} and yours at ${playerRoll}`;
            setTimeout(function () {gameText.textContent = `I win!`}, 2000);
            setTimeout(function () {gameStatus = 0}, 2000);

        }
    }

    reRoll.onclick = () =>{
    gameBox.removeChild(reRoll);
    gameBox.removeChild(hold);
    let playerReRoll = Math.floor((Math.random()*6)+1);
    let totalPlayerRoll = playerReRoll + playerRoll;
    gameText.textContent = `You rolled a ${playerReRoll}! and your total is ${totalPlayerRoll}`;
    
    if (totalPlayerRoll > compRoll && totalPlayerRoll <= 7){
    let compReRoll = Math.floor((Math.random()*6)+1);
    let totalCompReRoll = compRoll + compReRoll;
    setTimeout(function () {gameText.textContent = `Damnit, I guess I'll reroll...`}, 2000);
    setTimeout(function () {gameText.textContent = `I rolled a ${compReRoll} and my total is ${totalCompReRoll}`}, 4000);
            if(totalCompReRoll > 7 || totalCompReRoll < totalPlayerRoll){
            setTimeout(function () {gameText.textContent = `Oh no! I lost!`}, 6000);
            setTimeout(function () {gameStatus = 0}, 6000);

            }
            else{
            setTimeout(function () {gameText.textContent = `Heh, I win!`}, 6000);
            setTimeout(function () {gameStatus = 0}, 6000);

            }
    }
    else{
                    setTimeout(function () {gameText.textContent = `Heh, I will abstain from rolling. With my total at ${compRoll} and yours at ${totalPlayerRoll}`}, 2000);
                    setTimeout(function () {gameText.textContent = `I win!`}, 4000);
                                setTimeout(function () {gameStatus = 0}, 4000);

                    


    }


    }
    }


