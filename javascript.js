let userScore = 0;
let computerScore = 0;
let winnerTrue = 0;
let winner;

while (winnerTrue === 0){

    let userHand = prompt('Type rock, paper or scissors!');
    let computerHand = Math.floor(Math.random() * 3);

    if (userHand === 'rock'){
        userHand = 0;
    } else if (userHand === 'paper'){
        userHand = 1;
    } else if (userHand === 'scissors'){
        userHand = '2';
    } else {
        userHand = prompt('Try again! Type rock, paper or scissors!');
    }

    let roundWinner = `user ${userHand} computer ${computerHand}`;
    console.log(roundWinner);

    switch (roundWinner){
        case 'user 0 computer 0':
        roundWinner = "tie"
        break;
        case 'user 1 computer 1':
        roundWinner = "tie"
        break;
        case 'user 2 computer 2':
        roundWinner = "tie"
        break;
        case 'user 0 computer 1':
        roundWinner = "loose"
        break;
        case 'user 0 computer 2':
        roundWinner = "win"
        break;
        case 'user 1 computer 0':
        roundWinner = "win"
        break;
        case 'user 1 computer 2':
        roundWinner = "loose"
        break;
        case 'user 2 computer 0':
        roundWinner = "loose"
        break;
        case 'user 2 computer 1':
        roundWinner = "win"
        break;
    }

    if (roundWinner === 'win'){
        userScore++;
        console.log('You win!');
    } else if (roundWinner === 'loose'){
        computerScore++;
        console.log('You loose!')
    } else if (roundWinner === 'tie'){
        console.log("It's a tie!")
    }

    console.log(`User score: ${userScore} Computer score: ${computerScore}`)

    if (userScore >= 5){
        winnerTrue++;
        winner = 'user';
    } else if (computerScore >=5){
        winnerTrue++;
        winner = 'computer';
    }
}

if (winner === 'user'){
    alert('You win!');
} else if (winner === 'computer'){
    alert('You loose');
}