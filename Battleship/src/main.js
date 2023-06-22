const Gameboard = () => {
    const shipLengths = [2, 3, 3, 4, 5];

    function startGame(){
        const main = document.getElementById('main');
        const popup = document.createElement('div');
        popup.id = 'popup';
        const popupText = document.createElement('p');
        popupText.textContent = 'Welcome to Battleship!';
        popup.appendChild(popupText);
        const popupButton = document.createElement('button');
        popupButton.textContent = 'Start Game';
        popupButton.addEventListener('click', () => {
            main.removeChild(popup);
            createBoard(1);
            setCoordinates();
            createBoard(2);
        });
        popup.appendChild(popupButton);
        main.appendChild(popup);
    }

    function createBoard(side){
        let gameBoard ;
        if(side===1){
            gameBoard = document.getElementById("friendly");
        }
        else{
            gameBoard = document.getElementById('enemy');
        }
        for (let i = 0; i < 7; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for(let j=0; j< 7;j++){
                const cell = document.createElement("button");
                cell.classList.add("cell");
                cell.addEventListener("click", () => {
                    console.log("clicked");
                    if(side===1){
                        cell.innerText = "X";
                    }
                    else{
                        cell.innerText = "O";
                    }
                });
                
                cell.id = `${i}-${j}`;
                row.appendChild(cell);
            }
            gameBoard.appendChild(row);
        }
        
    }
    
    function setCoordinates(){
        let i =0;
        const friendly = document.getElementById('friendly');
        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';
        friendly.appendChild(addBtn);
        addBtn.addEventListener('click', () => {
            if(i<5){
                const instruction = document.createElement('h3');
                instruction.textContent = "Place ship " + (i+1) + " of length " + shipLengths[i];
                friendly.appendChild(instruction);
                i++;
            }
        });
        

        // for(let i = 0; i < shipLengths.length; i++) {
        //     const instruction = document.createElement('h3');
        //     console.log("Ship " + i + " length: " + shipLengths[i]);
        //     instruction.textContent = "Place ship " + (i+1) + " of length " + shipLengths[i];
        //     friendly.appendChild(instruction);
        // }
    };

    return {
        startGame,
        setCoordinates,
        createBoard,
    };
};

const Player = () => {
};

const Ship = () => {
    var shipCoordinates = []
    var health = 0;

    function setCoordinates(coordinates){
        shipCoordinates = coordinates;
        health = coordinates.length;
    }

    const hit = (position) => {
        coordinates[coordinates.indexOf(position)] = -1;
        health--;
        return isSunk();
    };
    
    const isSunk = () => {
        if(health === 0) {
            return true;
        }
        return false;
    };
    
    return {
        setCoordinates,
        hit,
        isSunk,
    };
};

// Class Initialization
const gameBoard = Gameboard();
const playerOne = Player();
const playerTwo = Player();

// const shipOne = Ship();
// const shipTwo = Ship();
// const shipThree = Ship();
// const shipFour = Ship();
// const shipFive = Ship();

gameBoard.startGame();
