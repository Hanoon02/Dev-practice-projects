const Game = () =>{
    var board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

    const fill = (row, col, player) =>{
        board[row][col] = player;
    }
    const reset = () =>{
        board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    }

    const checkWinner = () =>{
        if(board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== -1){
            console.log("Player " + board[0][0] + " wins!");
        }
        if(board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== -1){
            console.log("Player " + board[1][0] + " wins!");
        }
        if(board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== -1){
            console.log("Player " + board[2][0] + " wins!");
        }
        if(board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== -1){
            console.log("Player " + board[0][0] + " wins!");
        }
        if(board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== -1){
            console.log("Player " + board[0][1] + " wins!");
        }
        if(board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== -1){
            console.log("Player " + board[0][2] + " wins!");
        }
        if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== -1){
            console.log("Player " + board[0][0] + " wins!");
        }
        if(board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[2][0] !== -1){
            console.log("Player " + board[0][2] + " wins!");
        }
    }
    return {fill,checkWinner,reset};
}
var playCount = 0;
const reset = document.getElementById('reset');
const oneOne = document.getElementById('11');
const oneTwo = document.getElementById('12');
const oneThree = document.getElementById('13');
const twoOne = document.getElementById('21');
const twoTwo = document.getElementById('22');
const twoThree = document.getElementById('23');
const threeOne = document.getElementById('31');
const threeTwo = document.getElementById('32');
const threeThree = document.getElementById('33');
const newGame = Game();
reset.addEventListener('click',()=>{
    newGame.reset();
    oneOne.innerHTML = 'X/O';
    oneTwo.innerHTML = 'X/O';
    oneThree.innerHTML = 'X/O';
    twoOne.innerHTML = 'X/O';
    twoTwo.innerHTML = 'X/O';
    twoThree.innerHTML = 'X/O'; 
    threeOne.innerHTML = 'X/O';
    threeTwo.innerHTML = 'X/O';
    threeThree.innerHTML = 'X/O';
    playCount = 0;
} );
oneOne.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(0,0,0);
        oneOne.innerHTML = 'X';
    }
    else{
        newGame.fill(0,0,1);
        oneOne.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

});
oneTwo.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(0,1,0);
        oneTwo.innerHTML = 'X';
    }
    else{
        newGame.fill(0,1,1);
        oneTwo.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
oneThree.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(0,2,0);
        oneThree.innerHTML = 'X';
    }
    else{
        newGame.fill(0,2,1);
        oneThree.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
twoOne.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(1,0,0);
        twoOne.innerHTML = 'X';
    }
    else{
        newGame.fill(1,0,1);
        twoOne.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

});
twoTwo.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(1,1,0);
        twoTwo.innerHTML = 'X';
    }
    else{
        newGame.fill(1,1,1);
        twoTwo.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
twoThree.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(1,2,0);
        twoThree.innerHTML = 'X';
    }
    else{
        newGame.fill(1,2,1);
        twoThree.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
threeOne.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(2,0,0);
        threeOne.innerHTML = 'X';
    }
    else{
        newGame.fill(2,0,1);
        threeOne.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
threeTwo.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(2,1,0);
        threeTwo.innerHTML = 'X';
    }
    else{
        newGame.fill(2,1,1);
        threeTwo.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();

} );
threeThree.addEventListener('click', () =>{
    if(playCount%2==0){
        newGame.fill(2,2,0);
        threeThree.innerHTML = 'X';
    }
    else{
        newGame.fill(2,2,1);
        threeThree.innerHTML = 'O';
    }
    playCount++;
    newGame.checkWinner();
} );