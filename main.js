const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var gameOver = false;
var noofMoves = 0;
var scoreX = 0, scoreO = 0;

function init(bttn) {
    clearGrid();
    if (bttn.id == "reset") {
        scoreX = 0;
        scoreO = 0;
    }
    document.getElementById("sX").innerHTML = scoreX;
    document.getElementById("sO").innerHTML = scoreO;


    var x = document.getElementsByClassName("select");
    x[0].style.visibility = 'visible';

    var y = document.getElementsByClassName("table");
    y[0].style.visibility = 'hidden';

    var z = document.getElementById("message");
    z.style.visibility = 'hidden';

    var s = document.getElementById("reset");
    s.style.visibility = 'hidden';

    var t = document.getElementsByClassName("points-table");
    t[0].style.visibility = 'hidden';
}

function newGame(cell) {
    clearGrid();
    gameOver = false;

    var x = document.getElementsByClassName("select");
    x[0].style.visibility = 'hidden';

    var y = document.getElementsByClassName("table");
    y[0].style.visibility = 'visible';

    var z = document.getElementById("message");
    z.style.visibility = 'visible';

    var s = document.getElementById("reset");
    s.style.visibility = 'visible';

    var t = document.getElementsByClassName("points-table");
    t[0].style.visibility = 'visible';

    if (cell.id == "b1") {
        document.turn = "X";
        display("X starts the game");
    }
    else {
        document.turn = "O";
        display("O starts the game");
    }

    if (document.turn == "X") {
        var col1 = document.getElementById("nameX");
        col1.style.color = "red";
        var col2 = document.getElementById("nameO");
        col2.style.color = "black";
    }
    else {
        var col1 = document.getElementById("nameO");
        col1.style.color = "red";
        var col2 = document.getElementById("nameX");
        col2.style.color = "black";
    }
}

function display(string) {
    document.getElementById("message").textContent = string;
}

function nextTurn(cell) {
    if (cell.textContent == "" && gameOver != true) {
        cell.textContent = document.turn;
        if (cell.textContent == "X") {
            var col1 = document.getElementById("nameX");
            col1.style.color = "black";
            var col2 = document.getElementById("nameO");
            col2.style.color = "red";
        }
        else {
            var col1 = document.getElementById("nameO");
            col1.style.color = "black";
            var col2 = document.getElementById("nameX");
            col2.style.color = "red";
        }

        if (checkWinner() == true) {
            display("Congrats! " + cell.textContent + " has won");
            document.getElementById("sX").innerHTML = scoreX;
            document.getElementById("sO").innerHTML = scoreO;
            document.getElementById("nameX").style.color = "blue";
            document.getElementById("nameO").style.color = "blue";

            noofMoves = 0;
            return;
        }
        else if (checkforDraw() == true) {
            display("Game drawn! Try another");
            document.getElementById("nameX").style.color = "blue";
            document.getElementById("nameO").style.color = "blue";
            return;
        }
        noofMoves++;
        switchTurn();
    }
}

function switchTurn() {
    if (document.turn == "X") {
        document.turn = "O";
        display("It's O's turn");
    }
    else {
        document.turn = "X";
        display("It's X's turn");
    }
}

function checkWinner() {
    for (let i = 0; i < 8; i++) {
        let win = winningCombinations[i];

        let a = win[0];
        let b = win[1];
        let c = win[2];

        if (getElement(a) == getElement(b) && getElement(b) == getElement(c) && getElement(c) != "") {
            gameOver = true;

            var ele1 = document.getElementById("s" + a);
            var ele2 = document.getElementById("s" + b);
            var ele3 = document.getElementById("s" + c);
            if (getElement(a) == "X") {
                ele1.innerHTML = "<span style='color: red;'> X </span></span>";
                ele2.innerHTML = "<span style='color: red;'> X </span></span>";
                ele3.innerHTML = "<span style='color: red;'> X </span></span>";
                scoreX++;
            }
            else {
                ele1.innerHTML = "<span style='color: red;'> O </span></span>";
                ele2.innerHTML = "<span style='color: red;'> O </span></span>";
                ele3.innerHTML = "<span style='color: red;'> O </span></span>";
                scoreO++;
            }
            return true;
        }
    }
    return false;
}

function getElement(number) {
    return document.getElementById("s" + number).textContent;
}

function clearGrid() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("s" + i).textContent = "";
    }
}

function checkforDraw() {
    var cnt = 0;

    for (var i = 1; i <= 9; i++) {
        if (getElement(i) == "X" || getElement(i) == "O") {
            cnt++;
        }
    }
    if (cnt == 9) {
        return true;
    }
    return false;
}
