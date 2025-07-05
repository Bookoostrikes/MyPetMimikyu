export function rpsChoice(choice){
    const compChoices = ['rock', 'paper', 'scissors'];
    let compChoice = compChoices[(Math.floor(Math.random()*compChoices.length))];
    console.log(compChoice)

    if (compChoice == choice){
        gameText.textContent = 'TIE!';
    }
    else if ((choice == 'rock' && compChoice == 'paper') ||
        (choice == 'scissors' && compChoice == 'rock') ||
        (choice == 'paper' && compChoice == 'scissors')){
        gameText.textContent = 'LOSE!';
        }
    else{gameText.textContent = 'WIN!';}
        for( let i = 0; i < 3; i++){
        gameBox.removeChild(gameBox.lastElementChild);
        }
     gameStatus = 0;
    }