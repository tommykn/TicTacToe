const code = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {


        return {
            name,
            type,
        }
    };


    

    const gameBoard = (() => {
        let gameArray = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];
        return {
            gameArray
        };

    })();





    const game = (() => {
        let turn = 'X';
        // I will make a checkForWin method that I will used after every move.
        const checkForWin = () => {
            // check all horizontal lications
            if (gameBoard.gameArray[0] === 'X' && gameBoard.gameArray[1] === 'X' && gameBoard.gameArray[2] === 'X') {
                return true;
            } else if (gameBoard.gameArray[0] === 'O' && gameBoard.gameArray[1] === 'O' && gameBoard.gameArray[2] === 'O') {
                return true;
            } else if (gameBoard.gameArray[3] === 'X' && gameBoard.gameArray[4] === 'X' && gameBoard.gameArray[5] === 'X') {
                return true;
            } else if (gameBoard.gameArray[3] === 'O' && gameBoard.gameArray[4] === 'O' && gameBoard.gameArray[5] === 'O') {
                return true;
            } else if (gameBoard.gameArray[6] === 'O' && gameBoard.gameArray[7] === 'O' && gameBoard.gameArray[8] === 'O') {
                return true;
            } else if (gameBoard.gameArray[6] === 'X' && gameBoard.gameArray[7] === 'X' && gameBoard.gameArray[8] === 'X') {
                return true;
                // check for all vertical wins
            } else if (gameBoard.gameArray[0] === 'O' && gameBoard.gameArray[3] === 'O' && gameBoard.gameArray[6] === 'O') {
                return true;
            } else if (gameBoard.gameArray[0] === 'X' && gameBoard.gameArray[3] === 'X' && gameBoard.gameArray[6] === 'X') {
                return true;
            } else if (gameBoard.gameArray[1] === 'X' && gameBoard.gameArray[4] === 'X' && gameBoard.gameArray[7] === 'X') {
                return true;
            } else if (gameBoard.gameArray[1] === 'O' && gameBoard.gameArray[4] === 'O' && gameBoard.gameArray[7] === 'O') {
                return true;
            } else if (gameBoard.gameArray[2] === 'O' && gameBoard.gameArray[5] === 'O' && gameBoard.gameArray[8] === 'O') {
                return true;
            } else if (gameBoard.gameArray[2] === 'X' && gameBoard.gameArray[5] === 'X' && gameBoard.gameArray[8] === 'X') {
                return true;
                // check all diaganal wins by using if statements.
            } else if (gameBoard.gameArray[0] === 'O' && gameBoard.gameArray[4] === 'O' && gameBoard.gameArray[8] === 'O') {
                return true;
            } else if (gameBoard.gameArray[0] === 'X' && gameBoard.gameArray[4] === 'X' && gameBoard.gameArray[8] === 'X') {
                return true;
            } else if (gameBoard.gameArray[2] === 'O' && gameBoard.gameArray[4] === 'O' && gameBoard.gameArray[6] === 'O') {
                return true;
            } else if (gameBoard.gameArray[2] === 'X' && gameBoard.gameArray[4] === 'X' && gameBoard.gameArray[6] === 'X') {
                return true;
            } else {
                return false;
            }



        };



        return {
            turn,
            checkForWin
        };

    })();

    const displayController = (() => {
        const domArray = document.querySelectorAll('.grid-item');

        const makeMove = (turn, place) => {
            if (gameBoard.gameArray[place] !== '') {
                return;
            }
            if (turn === 'O') {
                gameBoard.gameArray[place] = 'O';
                game.turn = 'X';
            } else if (turn === 'X') {
                gameBoard.gameArray[place] = 'X';
                game.turn = 'O';
            }
            updateGameBoard();
            if (checkForMoves()) {
                
            }
        };


        const checkForMoves = () => {
            domArray.forEach(box => {
                box.addEventListener('click', () => {
                    makeMove(game.turn, box.classList[1])
                });
            });


        }




        const updateGameBoard = () => {
            for (let i = 0; i < domArray.length; i++) {
                domArray[i].textContent = gameBoard.gameArray[i];
            }
        };

        return {
            updateGameBoard,
            domArray,
            checkForMoves,
            makeMove
        };

    })();



    return {
        gameBoard,
        displayController,
        game,
    };

})();