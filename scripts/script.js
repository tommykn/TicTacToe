const game = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {

        const makeMove = (player) => {



        }

    }

    const gameBoard = (() => {
        let gameArray = [
            1, 2, 3,
            4, 7, 6,
            7, 8, 9,
        ];

        const renderGameBoard = () => {

        }
        return {
            gameArray
        };

    })();


    const displayController = (() => {
        const domArray = document.querySelectorAll('.grid-item');

        for (let i = 0; i < domArray.length; i++) {
            domArray[i].textContent = gameBoard.gameArray[i];
        }

        return {
            domArray
        };

    })();

    return {
        gameBoard,
        displayController
    };

})();