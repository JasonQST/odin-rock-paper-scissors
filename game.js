function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break
      case 2:
        return "scissors"
    }
}

function checkWin(playerSelection, computerSelection) {
    if(playerSelection.localeCompare("rock")==0){
        switch(computerSelection){
            case "rock":
                return "draw";
                break;
            case "paper":
                return "lose"
                break;
            case "scissors":
                winTimes ++;
                return "win"
                break;
        };
    }else if(playerSelection.localeCompare("paper")==0){
        switch(computerSelection){
            case "rock":
                winTimes ++;
                return "win";
                break;
            case "paper":
                return "draw"
                break;
            case "scissors":
                return "lose"
                break;
        };
    }else if(playerSelection.localeCompare("scissors")==0){
        switch(computerSelection){
            case "rock":
                return "lose";
                break;
            case "paper":
                winTimes ++;
                return "win"
                break;
            case "scissors":
                return "draw"
                break;
        };
    }
}

function playRound(playerSelection, computerSelection){
    var status = checkWin(playerSelection, computerSelection);
    switch (status){
        case "win":
            return "You Win! " + playerSelection + " beats " + computerSelection
            break;
        case "lose":
            return "You Lose! " + computerSelection + " beats " + playerSelection
            break;
        case "draw":
            return "You Draw! Both of you used " +computerSelection
    }
}

function game(playerSelection){
    //let playerSelection = prompt('Please enter "rock", "paper" or "scissors"');
    var computerSelection = getComputerChoice();
    console.log("Player selected " + playerSelection);
    console.log("Computer selected " + computerSelection);
    result = playRound(playerSelection, computerSelection)
    console.log(result);
    
    const resultContainer = document.querySelector('.resultContainer');
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = "<p>Player selected " + playerSelection + " </p><p>Computer selected "+ computerSelection +"</p><p>"+ result +"</p><p>----------------------------------</p>";
    resultContainer.appendChild(resultDiv);
    //console.log("You won " + winTimes + " times in total. Type game() to play again.");
    winTimes = 0;
}

let winTimes = 0;