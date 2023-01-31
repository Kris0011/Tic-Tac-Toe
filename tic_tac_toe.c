#include <stdio.h>

int main() 
{
    char board[3][3] = {{' ', ' ', ' '},
                        {' ', ' ', ' '},
                        {' ', ' ', ' '}};
    int row, column, turn = 0;
    int gameOver = 0;
    
    while (!gameOver) 
    {
        printf("Current board:\n");
        for (int i = 0; i < 3; i++) 
        {
            printf(" %c | %c | %c\n", board[i][0], board[i][1], board[i][2]);
            if (i != 2) 
            {
                printf("---|---|---\n");
            }
        }
        printf("Player %d, enter your move (row column): ", (turn % 2) + 1);
        scanf("%d%d", &row, &column);
        if (board[row][column] == ' ')
        {
            board[row][column] = (turn % 2 == 0) ? 'X' : 'O';
            turn++;
        } 
        else
        {
            printf("Space already filled. Try again.\n");
        }
        for (int i = 0; i < 3; i++)
        {
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ')
            {
                gameOver = 1;
                break;
            }
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') 
            {
                gameOver = 1;
                break;
            }
        }
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ')
        {
            gameOver = 1;
        }
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '
        {
            gameOver = 1;
        }
    }
    printf("Player %d wins!\n", (turn % 2) + 1);
    return 0;
}
