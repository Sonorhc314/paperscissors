//scissors beats paper, paper beats rock, rock beats scissors
//01 12 20

//global variables
//--------------------------------

let player_score = 0;
let computer_score = 0;
let winner_tool;
let looser_tool;
let player_wins;
let draw_flag = 0;

const vars = ["Scissors", "Paper", "Rock", "Scissors"];
//useful for indexing, "Scissors" on vars[3] later used
//so that we would not need to loop through array or complicate conditions
//----------------------------------

//functions
//----------------------------------

//capitalizes first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//computer randomly chooses integer
function computerPlay() {
  let expression = Math.floor(Math.random() * 3);
  switch (expression) {
    case 0:
      return vars[0];
    case 1:
      return vars[1];
    case 2:
      return vars[2];
  }
}

function hierarchy_game(input1, input2) {
  let index1 = vars.indexOf(input1, 1);
  let index2 = vars.indexOf(input2, 2); //remembers second occurence useful later(next line of comment)
  if (input1 == input2) {
    console.log("Draw");
    draw_flag = 0;
  } else if (index2 == index1 + 1) {
    //since index2 goes first it can be 0, and there is no -1 index for index1
    //that is why we use the second occurence(happens only for Scissors, that's why we have a double)
    console.log("Player1 wins");
    draw_flag = 1;
    player_wins = 1;
    winner_tool = input1;
    looser_tool = input2;
    player_score++;
  } else {
    console.log("Player2 wins");
    draw_flag = 1;
    player_wins = 0;
    winner_tool = input2;
    looser_tool = input1;
    computer_score++;
  }
}

function oneRound() {
  //----------------------------------
  //standardize an output, ex.: RoCK, rock, roCK -> rock
  let playerSelection = prompt("Your Choice: ");
  playerSelection = playerSelection.trim().toLowerCase();
  playerSelection = capitalizeFirstLetter(playerSelection);
  let computerSelection = computerPlay();
  computerSelection = computerSelection.trim().toLowerCase();
  computerSelection = capitalizeFirstLetter(computerSelection);
  //----------------------------------

  console.log(`Player1 chooses ${playerSelection}`);
  console.log(`Player2 chooses ${computerSelection}`);

  //checks if player's input is valid
  if (vars.includes(playerSelection)) {
    hierarchy_game(playerSelection, computerSelection); //function to check what was beaten by what
    if (draw_flag == 1) {
      switch (player_wins) {
        case 0:
          console.log(`You lose! ${winner_tool} beats ${looser_tool}`);
          break;
        case 1:
          console.log(`You win! ${winner_tool} beats ${looser_tool}`);
          break;
      }
    } else {
      console.log(`No one was beaten`);
    }
  } else {
    console.log("Your input was wrong.");
  }
}

function game() {
  alert(`Welcome to the game, you have 5 rounds`);

  for (i = 0; i < 5; i++) {
    console.log("----------------------------------");
    console.log(`Rock, Paper, Scissors round ${i + 1}`);
    oneRound(); //call one round fucntion iteratively
  }

  let winner;
  let winner_score;
  if (player_score > computer_score) {
    winner = "Player1";
    winner_score = player_score;
  } else if (computer_score > player_score) {
    winner = "Player2";
    winner_score = computer_score;
  } else {
    console.log(
      `It's a draw. The overall score is ${player_score}:${computer_score}.`
    );
    return;
  }
  console.log(
    `${winner} wins with the score of ${winner_score}. The overall score is ${player_score}:${computer_score}.`
  );
}
//----------------------------------

game(); //game begins
