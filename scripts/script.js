const code = (() => {
    'use strict';
    /* this will be a a factory function that creates the player object */
    const Player = (name, type) => {
        const getName = function () {
            return name;
        }
        const getType = function () {
            return type;
        }


        return {
            name,
            type,
            getName,
            getType
        }
    };

    const playerOne = Player('IM X', 'X');
    const playerTwo = Player('IM O', 'O');


    

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

        const checkTie = function() {
            let counter = 0;
            for (let i = 0; i < gameBoard.gameArray.length; i++) {
                if (gameBoard.gameArray[i] !== '') {
                    counter++;
                }
            }
            if (counter === 9) {
                return true;
            } else {
                return false;
            }
        }



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
            } else if (checkTie()) {
                return true;
            } else {
                return false;
            }



        };



        return {
            turn,
            checkForWin,
            checkTie
        };

    })();

    const displayController = (() => {
        const _domArray = document.querySelectorAll('.grid-item');
        const _titleAboveBoard = document.querySelector('.main-title-content');

        const _displayWin = function() {
            if (game.turn === playerOne.type) {
                // display playerTwo wins

                _titleAboveBoard.textContent = playerTwo.name;

            } else if (game.turn === playerTwo.type) {
                // display playerOne wins
                _titleAboveBoard.textContent = playerOne.name;
            }

        }

        const makeMove = function() {
            let turn = game.turn;
            let place = this.classList[1];
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
            if (game.checkForWin()) {
                _stopGame();
                _displayWin();
                
            }
        };

        const _stopGame = function() {
            _domArray.forEach(box => {
                box.removeEventListener('click', makeMove)
            });

        }


        const checkForMoves = () => {
            _domArray.forEach(box => {
                box.addEventListener('click', makeMove)
            });


        }




        const updateGameBoard = () => {
            for (let i = 0; i < _domArray.length; i++) {
                _domArray[i].textContent = gameBoard.gameArray[i];
            }
        };

        return {
            updateGameBoard,
            _domArray,
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