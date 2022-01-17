const game = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {

        const makeMove = (player) => {



        };

    };

    const gameBoard = (() => {
        let gameArray = [
            'X', 'O', 'O',
            'O', 'X', 'O',
            'O', 'X', 'X',
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

    return {
        gameBoard,
        displayController
    };

})();