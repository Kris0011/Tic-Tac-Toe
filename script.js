let gameActive = true ;
let currentPlayer = "X" ;

let board = [" "," "," "," "," "," "," "," "," "," "];
let winner = null ;



function move(index) {
  if (gameActive   && ( board[index] === " ")) {
    board[index] = currentPlayer;
    
  }
}
console.log(board);


while(winner == null){




}