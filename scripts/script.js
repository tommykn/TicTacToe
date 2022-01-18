const code = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {


        return {
            name,
            type,
        }
    };

    const playerOne = Player('Tommy', 'X');


    

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



        return {
            turn
        };

    })();

    const displayController = (() => {
        const domArray = document.querySelectorAll('.grid-item');

        const makeMove = (turn, place) => {
            if (turn === 'O') {
                gameBoard.gameArray[place] = 'O';
                game.turn = 'X';
            } else if (turn === 'X') {
                gameBoard.gameArray[place] = 'X';
                game.turn = 'O';
            }
            updateGameBoard();
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
        playerOne
    };

})();