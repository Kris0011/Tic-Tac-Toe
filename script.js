let gameActive = true;
let currentPlayer = "X";

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let winner = null;


let k = 0;
let mark = [];
let s, w;
let i = 0;
let flag = 0;

for (let i = 0; i < 10; i++) {
  mark.push(i);
}

function rem(number) {
  let index = mark.indexOf(number);
  if (index !== -1) {
    mark.splice(index, 1);
  }
}

function found(n) {
  for (let i = 1; i <= 9; i++) {
    if (mark[i] === n) {
      return 1;
    }
  }
  return 0;
}

function iswin() {

  if (board[0] == 'O' && board[2] == 'O')        //1 st row
    if (board[1] == ' ')
      return 2;

  if (board[0] == 'O' && board[1] == 'O')
    if (board[2] == ' ')
      return 3;

  if (board[1] == 'O' && board[2] == 'O')
    if (board[0] == ' ')
      return 1;

  if (board[0] == 'O' && board[3] == 'O')       //1 st col
    if (board[6] == ' ')
      return 7;

  if (board[0] == 'O' && board[6] == 'O')
    if (board[3] == ' ')
      return 4;

  if (board[3] == 'O' && board[6] == 'O')
    if (board[0] == ' ')
      return 1;

  if (board[3] == 'O' && board[4] == 'O')       //2 nd row
    if (board[5] == ' ')
      return 6;

  if (board[3] == 'O' && board[5] == 'O')
    if (board[4] == ' ')
      return 5;

  if (board[5] == 'O' && board[4] == 'O')
    if (board[3] == ' ')
      return 4;

  if (board[6] == 'O' && board[7] == 'O')       //3 rd row
    if (board[8] == ' ')
      return 9;

  if (board[6] == 'O' && board[8] == 'O')
    if (board[7] == ' ')
      return 8;

  if (board[8] == 'O' && board[7] == 'O')
    if (board[6] == ' ')
      return 7;

  if (board[1] == 'O' && board[4] == 'O')       //2 rd col
    if (board[7] == ' ')
      return 8;

  if (board[1] == 'O' && board[7] == 'O')
    if (board[4] == ' ')
      return 5;

  if (board[4] == 'O' && board[7] == 'O')
    if (board[1] == ' ')
      return 2;

  if (board[5] == 'O' && board[2] == 'O')       //3 rd col
    if (board[8] == ' ')
      return 9;

  if (board[2] == 'O' && board[8] == 'O')
    if (board[5] == ' ')
      return 6;

  if (board[8] == 'O' && board[5] == 'O')
    if (board[2] == ' ')
      return 3;

  if (board[0] == 'O' && board[4] == 'O')       //primary diagonal
    if (board[8] == ' ')
      return 9;

  if (board[0] == 'O' && board[8] == 'O')
    if (board[4] == ' ')
      return 5;

  if (board[4] == 'O' && board[8] == 'O')
    if (board[0] == ' ')
      return 1;

  if (board[2] == 'O' && board[4] == 'O')       //secondry diagonal
    if (board[6] == ' ')
      return 7;

  if (board[2] == 'O' && board[6] == 'O')
    if (board[4] == ' ')
      return 5;

  if (board[6] == 'O' && board[4] == 'O')
    if (board[2] == ' ')
      return 3;

  return 0;
}


function issafe() {

  if (board[0] == 'X' && board[2] == 'X')        //1 st row
    if (board[1] == ' ')
      return 2;

  if (board[0] == 'X' && board[1] == 'X')
    if (board[2] == ' ')
      return 3;

  if (board[1] == 'X' && board[2] == 'X')
    if (board[0] == ' ')
      return 1;

  if (board[0] == 'X' && board[3] == 'X')       //1 st col
    if (board[6] == ' ')
      return 7;

  if (board[0] == 'X' && board[6] == 'X')
    if (board[3] == ' ')
      return 4;

  if (board[3] == 'X' && board[6] == 'X')
    if (board[0] == ' ')
      return 1;

  if (board[3] == 'X' && board[4] == 'X')       //2 nd row
    if (board[5] == ' ')
      return 6;

  if (board[3] == 'X' && board[5] == 'X')
    if (board[4] == ' ')
      return 5;

  if (board[5] == 'X' && board[4] == 'X')
    if (board[3] == ' ')
      return 4;

  if (board[6] == 'X' && board[7] == 'X')       //3 rd row
    if (board[8] == ' ')
      return 9;

  if (board[6] == 'X' && board[8] == 'X')
    if (board[7] == ' ')
      return 8;

  if (board[8] == 'X' && board[7] == 'X')
    if (board[6] == ' ')
      return 7;

  if (board[1] == 'X' && board[4] == 'X')       //2 rd col
    if (board[7] == ' ')
      return 8;

  if (board[1] == 'X' && board[7] == 'X')
    if (board[4] == ' ')
      return 5;

  if (board[4] == 'X' && board[7] == 'X')
    if (board[1] == ' ')
      return 2;

  if (board[5] == 'X' && board[2] == 'X')       //3 rd col
    if (board[8] == ' ')
      return 9;

  if (board[2] == 'X' && board[8] == 'X')
    if (board[5] == ' ')
      return 6;

  if (board[8] == 'X' && board[5] == 'X')
    if (board[2] == ' ')
      return 3;

  if (board[0] == 'X' && board[4] == 'X')       //primery diagonal
    if (board[8] == ' ')
      return 9;

  if (board[0] == 'X' && board[8] == 'X')
    if (board[4] == ' ')
      return 5;

  if (board[4] == 'X' && board[8] == 'X')
    if (board[0] == ' ')
      return 1;

  if (board[2] == 'X' && board[4] == 'X')       //secondry diagonal
    if (board[6] == ' ')
      return 7;

  if (board[2] == 'X' && board[6] == 'X')
    if (board[4] == ' ')
      return 5;

  if (board[6] == 'X' && board[4] == 'X')
    if (board[2] == ' ')
      return 3;
  return 0;
}

function move(index) {
  if (gameActive && board[index] === ' ') {
    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerHTML = 'X';
    if (currentPlayer == 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    rem(index + 1);

  }

  if (gameActive) {
    if (i == 4) {
      k = 1;
    }
    if (i == 0) {
      if (board[4] == ' ') {
        board[4] = 'O';
        rem(5);
        document.getElementById(`cell4`).innerHTML = 'O';
      }
      else {
        flag = 1;
        board[0] = 'O';
        rem(1);
        document.getElementById(`cell0`).innerHTML = 'O';


      }

    }
    else {
      if (i == 1) {
        s = issafe();
        console.log(s);
        if (s) {
          board[s - 1] = 'O';
          rem(s);
          document.getElementById(`cell${s - 1}`).innerHTML = 'O';

        }
        else {
          if ((board[0] == 'X' || board[2] == 'X' || board[6] == 'X' || board[8] == 'X') && flag == 0) {
            board[7] = 'O';
            rem(8);
            document.getElementById(`cell7`).innerHTML = 'O';

          }
          else if (flag == 1) {

            board[6] = 'O';
            rem(7);
            document.getElementById(`cell6`).innerHTML = 'O';

          }
          else {
            if (board[5] == 'X' || board[7] == 'X') {
              if (board[8] == ' ') {
                board[8] = 'O';
                rem(9);
                document.getElementById(`cell8`).innerHTML = 'O';

              }
            }
            else if (board[1] == 'X' || board[3] == 'X') {
              if (board[0] == ' ') {
                board[0] = 'O';
                rem(1);
                document.getElementById(`cell0`).innerHTML = 'O';

              }
            }
            else if (board[1] == 'X' || board[5] == 'X') {
              if (board[2] == ' ') {
                board[2] = 'O';
                rem(3);
                document.getElementById(`cell2`).innerHTML = 'O';

              }
            }
            else if (board[3] == 'X' || board[7] == 'X') {
              if (board[6] == ' ') {
                board[6] = 'O';
                rem(7);
                document.getElementById(`cell6`).innerHTML = 'O';
              }
              else {
                board[mark[1] - 1] = 'O';
                rem(mark[1]);
              }
            }
          }
        }
      }
      else {
        s = issafe();
        w = iswin();
        if (w) {
          board[w - 1] = 'O';
          rem(w);
          document.getElementById(`cell${w - 1}`).innerHTML = 'O';
          k = 3;
          winner = 'Y';
          document.getElementById(`declare`).innerHTML = 'Sorry You Lost';
          gameActive = false;

        }
        else {
          if (s) {

            board[s - 1] = 'O';
            rem(s);
            document.getElementById(`cell${s - 1}`).innerHTML = 'O';


          }
          else {
            board[mark[1] - 1] = 'O';
            rem(mark[1]);
            document.getElementById(`cell${mark[1] - 1}`).innerHTML = 'O';
          }
        }
      }
    }

    i = i + 1;
  }
  console.log(board);

}







