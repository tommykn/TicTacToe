const code = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {

        const makeMove = (player, place) => {
            if (player.type === 'O') {
                gameBoard.gameArray[place] = 'O';
                game.turn = 'X';
            } else if (player.type === 'X') {
                gameBoard.gameArray[place] = 'X';
                game.turn = 'O';
            }
            displayController.updateGameBoard();
        };

        return {
            name,
            type,
            makeMove
        }
    };

    const playerOne = Player('Tommy', 'X');


    

    const gameBoard = (() => {
        let gameArray = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];

        const renderGameBoard = () => {

        };
        return {
            gameArray
        };

    })();


    const displayController = (() => {
        const domArray = document.querySelectorAll('.grid-item');

        const updateGameBoard = () => {
            for (let i = 0; i < domArray.length; i++) {
                domArray[i].textContent = gameBoard.gameArray[i];
            }
        };

        return {
            updateGameBoard
        };

    })();


    const game = (() => {
        let turn = 'X';


        return {
            turn
        }

    })();



    return {
        gameBoard,
        displayController,
        game,
        playerOne
    };

})();