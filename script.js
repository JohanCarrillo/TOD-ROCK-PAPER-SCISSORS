function computerPlay() {
  // Simulates the computer play, choosing a random election

  let computer_election = Math.floor(Math.random() * 2.99);
  /* [0, 0.99] --> rock
     [1, 1.99] --> paper
     [2, 2.99] --> scissors
  */
  if (computer_election === 0) {
    return 'Rock';
  } else if (computer_election === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function showMessage(message) {
  // show a message after every match
  const div = document.createElement('div');
  div.classList.add('message');
  div.textContent = message;
  const container = document.querySelector('#container2');
  container.appendChild(div);
  // should I delete last message or let it accumalte like a history? dunno
}

function playRound(playerSelection, computerSelection) {
  /* This function simulates a game of rock-paper-scissors, comparing
      the player's election and computer's election to declare which one wins.
  */
  //console.log('Computer chose: ' + computerSelection
  //    + ' You chose: ' + playerSelection);  // this was made to track who win
  let winner, message;

  switch (true) {
    case playerSelection === computerSelection: 
      message = 'Draw!';
      winner = 'no-one';
      break;
    case (playerSelection === 'Rock' && computerSelection === 'Paper'):
      message = 'You fool! Cat Slap beats Cat Punch!';
      winner = 'computer';
      break;
    case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
      message = 'Lucky hooman! Cat Scratch beat Cat Punch!';
      winner = 'player';
      break;
    case (playerSelection === 'Paper' && computerSelection === 'Rock'):
      message = 'OK... Cat Slap beats Cat Punch!';
      winner = 'player';
      break;
    case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
      message = 'As expected of me! Cat Scratch beats Cat Slap!';
      winner = 'computer';
      break;
    case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
      message = 'Suspicious... but Cat Scratch beats Cat Slap';
      winner = 'player';
      break;
    case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
      message = 'Naturally I won! Cat Punch beats Cat Scratch';
      winner = 'computer';
      break;
  }
  showMessage(message);
  return winner;
}
// this part is made to change to another screen when the game start
document.querySelector('#trigger-game').addEventListener('click', () => {
  document.querySelector('#container1').style.display = 'none';
  document.querySelector('#container2').style.display = 'flex';
  playGame();
});

function playGame(){
  // This function simulates the game
  let winner;
  let playerScore = 0;
  let computerScore = 0;

  const scoreHooman = document.querySelector('.hooman-score');
  const scoreCat = document.querySelector('.cat-score');

  // add an eventListener to each button the player can click in the game
  Array.from(document.querySelectorAll('button')).forEach( 
    element => element.addEventListener('click', () => {
      winner = playRound(element.id, computerPlay())  // play a round after the player choose
      if (winner === 'player') {
        playerScore++;
        scoreHooman.textContent = playerScore;  // update the scoreboard
      } else if (winner === 'computer') {
        computerScore++;
        scoreCat.textContent = computerScore;
      }

      // condition to check for a winner
      if (playerScore === 3 || computerScore === 3) {
        playerScore > computerScore ? winner = 'Hoomans' : winner = 'Cats';  // check who won
        // change scrren again after the game end, insert a message and an image for the winner
        document.querySelector('#container2').style.display = 'none';
        const container3 = document.querySelector('#container3');
        container3.style.display = 'flex';
        document.querySelector('.winner').textContent += winner + '!!';
        const winnerImg = document.createElement('img');
        if (winner === 'Hoomans') {
          winnerImg.setAttribute('src', 'img/hooman-wins.jpg');
          winnerImg.setAttribute('alt', 'img if hooman wins');
        } else {
          winnerImg.setAttribute('src', 'img/cat-wins.jpg');
          winnerImg.setAttribute('alt', 'img if cat wins');
        }
        container3.appendChild(winnerImg);
      }
    })
  );
}