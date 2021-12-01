function computerPlay() {
  // Simulates the computer play, choosing a random election

  let computer_election = Math.floor(Math.random() * 2.99);

  if (computer_election === 0) {
    return 'Rock';
  } else if (computer_election === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function Standarize(word) {
  // this function capitalize the first char and make lower all the others in a given str

  const wordarray = word.split('');  // converts to array
  // convert all letters to lower
  for (let i = 0; i < wordarray.length; i++) {   
    wordarray[i] = wordarray[i].toLowerCase();
  }
  wordarray[0] = wordarray[0].toUpperCase();  // capitalize first char
  word = wordarray.join('');  // convert to string
  /*
  word = wordarray.toString();  // converts to string again
  word = word.replace(/,/g, '');  // deletes semi-colons
  */
  return(word);
}

function playRound(playerSelection, computerSelection) {
  /* This function simulates a game of rock-paper-scissors, comparing
      the player election and computer election to declare which one wins.
      The rules of the game are the standards*/
  
  playerSelection = Standarize(playerSelection);
  let winner;

  switch (true) {
    case playerSelection === computerSelection: 
      console.log('Draw!');
      winner = 'no-one';
      break;
    case (playerSelection === 'Rock' && computerSelection === 'Paper'):
      console.log('You fool! Paper beats Rock!');
      winner = 'computer';
      break;
    case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
      console.log('You\'re pretty good! Scissors beat Rock!');
      winner = 'player';
      break;
    case (playerSelection === 'Paper' && computerSelection === 'Rock'):
      console.log('You got lucky this time! Paper beats Rock!');
      winner = 'player';
      break;
    case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
      console.log('Unlucky ass! Scissors beat Paper!');
      winner = 'computer';
      break;
    case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
      console.log('Nice one! Scissors beat Paper');
      winner = 'player';
      break;
    case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
      console.log('You\'re quite bad! Rock beats Scissors');
      winner = 'computer';
      break;
    default: 
      console.log('Do you really know how to play this?');
      process.exit();
      //break;
  }
  return winner;
}

function Game(){
  /*This function simulates 5 rounds of rock-paper-scissors, the first one to get 3 points
    or the one with more points at the end wins*/
  
  console.log('You will be playing 5 times, the one who first gets 3/5 wins\n Good luck!');
  let playerSelection, winner;
  let player_count = 0;
  let computer_count = 0;

  for (let i=0; i<5; i++){
    playerSelection = window.prompt('Pick one: Rock, Paper, Scissors');  // imput from window
    winner = playRound(playerSelection, computerPlay());
    
    if (winner === 'computer') {computer_count++;
    } else if (winner === 'player') {player_count++;}
    
    if (computer_count === 3) {
      console.log('3/5! Computer wins! Better luck next time!');
      return;
    }
    if (player_count === 3) {
      console.log('3/5! You win! What a boss!');
      return;
    }
    if (player_count === 2 && computer_count === 2) console.log('Draw! Last one standing wins!');
  }
  console.log('player score: ' + player_count);
  console.log('computer score: ' + computer_count);
  
  if (player_count > computer_count) {
    console.log('You win! What a boss!');
  } else if (computer_count > player_count) {
    console.log('Computer wins! Better luck next time!');
  } else {
    console.log('A draw! We both suck!');
  }
  return;
}