let gameActive = true ;
let currentPlayer = "X" ;

let board = [" "," "," "," "," "," "," "," "," "," "];
let winner = null ;

var i = 0;
var flag = 0;
function move(index) {
  if (gameActive && board[index] === " ") {
    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerHTML = "X";
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
  
    if(i==0)
    {
      console.log('Yes');
        if(board[4]==" ")
        {
            board[4]="O";
            document.getElementById(`cell4`).innerHTML = "O";
        }
    
        
    }
}




