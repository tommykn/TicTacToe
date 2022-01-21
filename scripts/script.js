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
        let firstPlayer = 'X';

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

        const resetGame = function () {
            if (!checkForWin()) {
                this.turn = this.firstPlayer;

            } else {
                displayController.checkForMoves();
            }
            gameBoard.gameArray = [
                '', '', '',
                '', '', '',
                '', '', '',
            ];
            displayController.updateGameBoard();

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
            checkTie,
            resetGame,
            firstPlayer
        };

    })();

    const displayController = (() => {
        const _domArray = document.querySelectorAll('.grid-item');
        const _titleAboveBoard = document.querySelector('.main-title-content');
        const resetBtn = document.querySelector('.reset-btn');
        const _startBtn = document.querySelector('.startgame-btn');
        const _playerOneInput = document.querySelector('.playerOneName');
        const _playerTwoInput = document.querySelector('.playerTwoName');
        const _preGamePage = document.querySelector('.pregame-page');
        const _gamePage = document.querySelector('.game-page')
        const _startOverBtn = document.querySelector('.start-over');
        let playerOne = '';
        let playerTwo = '';

        const _startOver = function () {
            _stopGame();
            gameBoard.gameArray = [
                '', '', '',
                '', '', '',
                '', '', '',
            ];
            game.turn = 'X';
            playerTwo = '';
            playerOne = '';
            _preGamePage.classList.toggle('inactive');
            _gamePage.classList.toggle('inactive');
        }
        _startOverBtn.addEventListener('click', _startOver);

        const _startGame = function () {
            if (_playerOneInput.value.split(' ').join('') === '' || _playerTwoInput.value.split(' ').join('') === '') {
                return;
            }
            playerOne = Player(_playerOneInput.value, 'X');
            playerTwo = Player(_playerTwoInput.value, 'O');
            _playerOneInput.value = '';
            _playerTwoInput.value = '';
            _preGamePage.classList.toggle('inactive');
            _gamePage.classList.toggle('inactive');
            _resetGame();
            checkForMoves();

        }

        _startBtn.addEventListener('click', _startGame);

        const _resetGame = function () {
            game.resetGame();
            _titleAboveBoard.textContent = `${playerOne.name} vs ${playerTwo.name}`;
        }
        resetBtn.addEventListener('click', _resetGame);

        const _displayWin = function() {
            if (game.checkTie()) {
                _titleAboveBoard.textContent = 'Cat Wins'
                return;
            }
            if (game.turn === playerOne.type) {
                // display playerTwo wins

                _titleAboveBoard.textContent = `${playerTwo.name} Wins!`;

            } else if (game.turn === playerTwo.type) {
                // display playerOne wins
                _titleAboveBoard.textContent = `${playerOne.name} Wins!`;
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
                if (game.firstPlayer === 'X') {
                    game.firstPlayer = 'O';
                } else {
                    game.firstPlayer = 'X';
                }
                
            }
        };

        const _stopGame = function() {
            _domArray.forEach(box => {
                box.removeEventListener('click', makeMove)
            });

        }


        const checkForMoves = function () {
            _domArray.forEach(box => {
                box.addEventListener('click', makeMove)
            });


        }




        const updateGameBoard = function () {
            for (let i = 0; i < _domArray.length; i++) {
                _domArray[i].textContent = gameBoard.gameArray[i];
            }
        };

        return {
            updateGameBoard,
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