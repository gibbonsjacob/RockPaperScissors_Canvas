
let rock; 
let paper;
let scissors;
let players = [];
let types = ['rock', 'paper', 'scissors'];
let result;
let typeCount = {
  'rock': 0,
  'paper': 0, 
  'scissors': 0
};
let rockP;
let paperP;
let scissorsP;
let startbutton;
let stopButton;
let startStop = true;

function preload(){
  rock = loadImage('rock.png');
  paper = loadImage('paper.png');
  scissors = loadImage('scissors.png');
}

function RockPaperScissors(player1, player2){
  p1Type = player1.type;
  p2Type = player2.type;
  let result = {}
    if (p1Type == 'rock') {
      switch(p2Type){
        case "rock":
          result.winner = null;
          result.loser = null;         
          break;
        case 'paper':
          result.winner = player2;
          result.loser = player1;
          break;
        
        case 'scissors':
          result.winner = player1;
          result.loser = player2;         
          break;
      }
    } else if (p1Type == 'paper') {
      switch(p2Type){
        case "rock":
          result.winner = player1;
          result.loser = player2;         
          break;
        case 'paper':
          result.winner = null;
          result.loser = null;         
          break;
        
        case 'scissors':
          result.winner = player2;
          result.loser = player1;         
          break;
      }

    } else if (p1Type = 'scissors') {
      switch(p2Type){
        case "rock":
          result.winner = player2;
          result.loser = player1;         
          break;
        case 'paper':
          result.winner = player1;
          result.loser = player2;         
          break;
        
        case 'scissors':
          result.winner = null;
          result.loser = null;         
          break;
      }
    }

    return result;



}

function setup() {
  createCanvas(800, 800);
  // imageMode(CENTER);
  // background(0);
  for (let i = 0; i < 300; i++){
    let randomElem = types[floor(random(0, types.length))]
    let x = random(0, width - 25); // images are 25x25 pixels so we subtract so they don't get cut off the screen
    let y = random(0, height - 25);
    players.push(new player(x, y, randomElem));
    
  }

  // for (let i = 0; i < 200; i++){
  //   // let randomElem = types[floor(random(0, types.length))]
  //   let x = random(0, width - 25); // images are 25x25 pixels so we subtract so they don't get cut off the screen
  //   let y = random(0, height - 25);
  //   players.push(new player(x, y, 'rock'));
    
  // }
  // for (let i = 0; i < 50; i++){
  //   // let randomElem = types[floor(random(0, types.length))]
  //   let x = random(0, width - 25); // images are 25x25 pixels so we subtract so they don't get cut off the screen
  //   let y = random(0, height - 25);
  //   players.push(new player(x, y, 'paper'));
    
  // }
  // for (let i = 0; i < 50; i++){
  //   // let randomElem = types[floor(random(0, types.length))]
  //   let x = random(0, width - 25); // images are 25x25 pixels so we subtract so they don't get cut off the screen
  //   let y = random(0, height - 25);
  //   players.push(new player(x, y, 'scissors'));
    
  // }
  
  rockP = createP();
  paperP = createP();
  scissorsP = createP();
  startbutton = createButton('Start');
  startbutton.mouseClicked(start);
  stopButton = createButton('Stop');
  stopButton.mouseClicked(stop);
}

function start(){
  startStop = true;
}
function stop(){
  startStop = false;
}

function draw() {
  background(220);
  if (startStop){
    loop();
  } else {
    noLoop();
  }
  let playerCount = players.length;
  for (let key in typeCount){
    typeCount[key] = 0;
  }
  for (let i = 0; i < players.length; i++){
    players[i].update();
    players[i].bounce();
    players[i].show();
    typeCount[players[i].type]++;

  }


  for (let i = 0; i < players.length; i++){
    for (let j = i + 1; j < players.length; j++){
      let player1 = players[i];
      let player2 = players[j];
      // if (player1.type != 'rock' || player2.type != 'rock'){
      // console.log(player1, player2)}
      if (player1.collide(player2)) {
        result = RockPaperScissors(player1, player2);
        // if (result.winner != null){
        // console.log(result)
        // }
        winner = result.winner;
        loser = result.loser;
        if (loser != null){
          loser.changeShape(winner.type);
          // loser.show();
        }
      }
    // playerCount--; 
    }
  }
rockP.html('Rock Count:' + typeCount['rock']);
paperP.html('Paper Count:' + typeCount['paper']);
scissorsP.html('Scissors Count:' + typeCount['scissors']);
}
