/*const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      playerSelection = button.id;
      switch(playerSelection){
        case "btnRock":
            game("rock");
        case "btnPaper":
            game("paper");
        case "btnScissors":
            game("Scissors");
      }
    });
});*/
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', () => {
    game("rock");
})

btnPaper.addEventListener('click', () => {
    game("paper");
})

btnScissors.addEventListener('click', () => {
    game("scissors");
})