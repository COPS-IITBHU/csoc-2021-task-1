var players2 = document.getElementById('players2');
var singleplayer = document.getElementById('singleplayer');
var shape = document.getElementById('shape');
var reset = document.getElementsByClassName('reset');
var result = document.getElementById('result');
var boards = document.getElementsByClassName('board');
var selectbox = document.getElementById('select-box');
var init_height = selectbox.style.height;
var start = document.getElementsByClassName('start');
var arr = [players2, singleplayer, shape];
var x_score = document.getElementById('x_score');
var o_score = document.getElementById('o_score');
var initialO = document.getElementsByClassName('O');
var initialX = document.getElementsByClassName('X');
var title = document.getElementsByClassName('title');
var friend = document.getElementById('friend');
var computer = document.getElementById('computer');
var turn = document.getElementById('turn');
var home = document.getElementsByClassName('home');
var bgimage = document.getElementsByClassName('bg-image');
var wasResult = false;
var buttons = document.getElementsByTagName('button');
var player = "notyetassigned";
var initialSign ="notyetassigned";
var scoreX = 0;
var scoreO = 0;
var player1name = "";
var player2name = "";
var playername = "";

var gameResult = false;
friend.onclick = function(){playerInitial('friend')};
computer.onclick = function(){playerInitial('computer')};

var checkFilling = [0,0,0,0,0,0,0,0,0];
var signsOfBoxes = ['_','_','_','_','_','_','_','_','_'];

const box1 = document.getElementById('topleft');
const box2 = document.getElementById('top');
const box3 = document.getElementById('topright');
const box4 = document.getElementById('left');
const box5 = document.getElementById('middle');
const box6 = document.getElementById('right');
const box7 = document.getElementById('bottomleft');
const box8 = document.getElementById('bottom');
const box9 = document.getElementById('bottomright');

function playerInitial(p){
    player = p;
    let foo;
    if(p == 'friend'){
        buttons[0].style.backgroundColor = "#00BBF0";
        buttons[1].style.backgroundColor = "#162447";
        title[1].innerHTML = "Select the shape to start with";
        buttons[2].innerHTML = "O";
        buttons[3].innerHTML = "X";
        do{
             foo = prompt('Enter player1\'s name');
        }while(foo != null && foo === "");
        player1name = foo;
        do{
            foo = prompt('Enter player2\'s name');
        }while(foo != null && foo === "");
        player2name = foo;
    }
    else{
        buttons[1].style.backgroundColor = "#00BBF0";
        buttons[0].style.backgroundColor = "#162447";
        title[1].innerHTML = "Who will play first?";
        buttons[2].innerHTML = "Computer";
        buttons[3].innerHTML = "You";
        let foo;
        do{
            foo = prompt('Enter your name');
        }while(foo != null && foo === "");
        playername= foo;
    }
}

initialO[0].onclick = function(){signfunction('O')};
initialX[0].onclick = function(){signfunction('X')};
function signfunction(p){
    initialSign = p;
    if(p=='X'){
        buttons[2].style.backgroundColor = "#00BBF0";
        buttons[3].style.backgroundColor = "#162447";
    }
    else{
        buttons[3].style.backgroundColor = "#00BBF0";
        buttons[2].style.backgroundColor = "#162447";
    }
}

start[0].onclick = function() {hide()};
function hide(){
    if(player == "notyetassigned" || initialSign == "notyetassigned"){
        if(player == "notyetassigned"){
            title[0].style.color = "red";
        }
        else{
            title[0].style.color = "black";
        }
        if(initialSign == "notyetassigned"){
            title[1].style.color = "red";
        }
        else{
            title[1].style.color = "black";
        }
    }
    else{    
        for(var i=0; i<arr.length; i++)
        {
            arr[i].style.visibility = 'hidden';
            arr[i].style.height = '0';
            arr[i].style.width = '0';
        }
        start[0].style.marginTop = "10px";
        reset[0].style.visibility = 'visible';
        boards[0].style.zoom = "40%";
        boards[0].style.visibility = 'visible';
        x_score.style.visibility = 'visible';
        o_score.style.visibility = 'visible';
        if(player == 'friend'){
            if(typeof(player1name) == 'object' || typeof(player2name) == 'object' || player1name.length > 10 || player2name.length > 10)
            {
                x_score.innerHTML = "X's score: " + scoreX;
                o_score.innerHTML = "O's score: " + scoreO;
            }
            else{
                x_score.innerHTML = player1name + "'s score: " + scoreX;
                o_score.innerHTML = player2name + "'s score: " + scoreO;
            }
        }
        else{
            if(typeof(playername) == 'object' || playername.length > 10)
            {
                x_score.innerHTML = "Computer's score: " + scoreX;
                o_score.innerHTML = "O's score: " + scoreO;
            }
            else{
                x_score.innerHTML = "Computer's score: " + scoreX;
                o_score.innerHTML = playername + "'s score: " + scoreO;
            }
        }
        bgimage[0].style.visibility = "hidden";
        bgimage[0].style.overflow = "hidden";
        if(player=='friend'){
            if(typeof(player1name) != 'object' && typeof(player2name) != 'object' && initialSign=='X') alert(player1name + " will play first");
            if(typeof(player1name) != 'object' && typeof(player2name) != 'object' && initialSign == 'O') alert(player2name + " will play first");
            turn.style.visibility = "visible";
            turn.innerHTML = initialSign +"'s turn";
            two_playersgame();
        }
        else {
            turn.style.visibility = "visible";
            turn.innerHTML = initialSign +"'s turn";
            one_playergame();
        }
        
    }
    
}



/*********************************************************************************** */
function two_playersgame(){
    turn.innerHTML = initialSign + "'s turn";
    box1.onclick = function() {myfunction('topleft')};
    box2.onclick = function() {myfunction('top')};
    box3.onclick = function() {myfunction('topright')};
    box4.onclick = function() {myfunction('left')};
    box5.onclick = function() {myfunction('middle')};
    box6.onclick = function() {myfunction('right')};
    box7.onclick = function() {myfunction('bottomleft')};
    box8.onclick = function() {myfunction('bottom')};
    box9.onclick = function() {myfunction('bottomright')};
}
function Xwon(){
    result.style.visibility = "visible";
    if(typeof(player1name) == 'object' || typeof(player2name) == 'object')
    {
        result.innerHTML = "X won";
    }
    else{
        result.innerHTML = player1name + " won";
    }
    for(var i=0; i<9; i++) checkFilling[i]=1;
    if(!wasResult) scoreX+=1;
    if(typeof(player1name) == 'object' || typeof(player2name) == 'object' || (player1name.length>10 || player2name.length>10))
    {
        x_score.innerHTML = "X's score: " + scoreX;
    }
    else{
        x_score.innerHTML = player1name + "'s score: " +    scoreX;
    }
    home[0].style.visibility = "visible";
    wasResult = true;
    turn.style.visibility = "hidden";
}
function Owon(){
    result.style.visibility = "visible";
    if(typeof(player1name) === 'object' || typeof(player2name) === 'object')
    {
        result.innerHTML = "O won";
    }
    else{
        result.innerHTML = player2name + " won";
    }
    for(var i=0; i<9; i++) checkFilling[i]=1;
    if(!wasResult) scoreO+=1;
    
    if(typeof(player1name) === 'object' || typeof(player2name) === 'object' || (player1name.length>10 || player2name.length>10))
    {
        o_score.innerHTML = "O's score: " + scoreO;
    }
    else{
        o_score.innerHTML = player2name + "'s score: " + scoreO;
    }
    home[0].style.visibility = "visible";
    wasResult = true;
    turn.innerHTML = initialSign +"'s turn";
    turn.style.visibility = "hidden";   
}
function myfunction(x){
    if(x == "topleft"){
        if(checkFilling[0]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[0] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[0]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "top"){
        if(checkFilling[1]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[1] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[1]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "topright"){
        if(checkFilling[2]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[2] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[2]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "left"){
        if(checkFilling[3]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[3] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[3]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "middle"){
        if(checkFilling[4]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[4] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[4]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "right"){
        if(checkFilling[5]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[5] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[5]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "bottomleft"){
        if(checkFilling[6]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[6] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[6]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "bottom"){
        if(checkFilling[7]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[7] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[7]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }
    else if(x == "bottomright"){
        if(checkFilling[8]==0)
        {
            document.getElementById(x).innerHTML = initialSign;
            signsOfBoxes[8] = initialSign;
            if (initialSign == 'X')  initialSign = 'O'; else initialSign = 'X';
            checkFilling[8]=1;
        }
        turn.innerHTML = initialSign + "'s turn";
    }

    if((signsOfBoxes[0] == 'X')  && signsOfBoxes[0] == signsOfBoxes[3] && signsOfBoxes[3] == signsOfBoxes[6]){
        box1.style.backgroundColor = "#071E54";
        box4.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[0] == 'X')  && signsOfBoxes[0] == signsOfBoxes[1] && signsOfBoxes[1] == signsOfBoxes[2]){
        box1.style.backgroundColor = "#071E54";
        box2.style.backgroundColor = "#071E54";
        box3.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[3] == 'X')  && signsOfBoxes[3] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[5]){
        box4.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[1] == 'X')  && signsOfBoxes[1] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[7]){
        box2.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[6] == 'X')  && signsOfBoxes[6] == signsOfBoxes[7] && signsOfBoxes[7] == signsOfBoxes[8]){
        box7.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[2] == 'X')  && signsOfBoxes[2] == signsOfBoxes[5] && signsOfBoxes[5] == signsOfBoxes[8]){
        box3.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[0] == 'X')  && signsOfBoxes[0] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[8]){
        box1.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[2] == 'X')  && signsOfBoxes[2] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[6]){
        box3.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        Xwon();
    }
    else if((signsOfBoxes[0] == 'O')  && signsOfBoxes[0] == signsOfBoxes[3] && signsOfBoxes[3] == signsOfBoxes[6]){
        box1.style.backgroundColor = "#071E54";
        box4.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[0] == 'O')  && signsOfBoxes[0] == signsOfBoxes[1] && signsOfBoxes[1] == signsOfBoxes[2]){
        box1.style.backgroundColor = "#071E54";
        box2.style.backgroundColor = "#071E54";
        box3.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[3] == 'O')  && signsOfBoxes[3] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[5]){
        box4.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[1] == 'O')  && signsOfBoxes[1] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[7]){
        box2.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[6] == 'O')  && signsOfBoxes[6] == signsOfBoxes[7] && signsOfBoxes[7] == signsOfBoxes[8]){
        box7.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[2] == 'O')  && signsOfBoxes[2] == signsOfBoxes[5] && signsOfBoxes[5] == signsOfBoxes[8]){
        box3.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[0] == 'O')  && signsOfBoxes[0] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[8]){
        box1.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        Owon();
    }
    else if((signsOfBoxes[2] == 'O')  && signsOfBoxes[2] == signsOfBoxes[4] && signsOfBoxes[4] == signsOfBoxes[6]){
        box3.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        Owon();
    }
        let countnumberOfmoves = 0;
        for(var i=0; i<9; i++){
            if(signsOfBoxes[i] == 'O' || signsOfBoxes[i] == 'X') countnumberOfmoves++;
        }
        if(countnumberOfmoves == 9 && !wasResult) {
            result.style.visibility = "visible";
            result.innerHTML = "Draw";
            turn.style.visibility = "hidden";
        }
}

reset[0].onclick = function() {resetall()};
function resetall(){
    home[0].style.visibility = "hidden";
    for(var i=0; i<9; i++) checkFilling[i]=0;
    box1.innerHTML="";
    box2.innerHTML="";
    box3.innerHTML="";
    box4.innerHTML="";
    box5.innerHTML="";
    box6.innerHTML="";
    box7.innerHTML="";
    box8.innerHTML="";
    box9.innerHTML="";
    box1.style.backgroundColor="rgb(77, 109, 199)";
    box2.style.backgroundColor="rgb(77, 109, 199)";
    box3.style.backgroundColor="rgb(77, 109, 199)";
    box4.style.backgroundColor="rgb(77, 109, 199)";
    box5.style.backgroundColor="rgb(77, 109, 199)";
    box6.style.backgroundColor="rgb(77, 109, 199)";
    box7.style.backgroundColor="rgb(77, 109, 199)";
    box8.style.backgroundColor="rgb(77, 109, 199)";
    box9.style.backgroundColor="rgb(77, 109, 199)";
    
    result.style.visibility = "hidden";
    
    for(var i=0; i<9; i++) signsOfBoxes[i] = "P";
    
    (initialSign == 'O') ? initialSign = 'X' : initialSign = 'O';
    wasResult = false;
    turn.style.visibility = 'visible';
    for(var i=0; i<3; i++) for(var j=0; j<3; j++) board[i][j] = '_';
    if(player == 'friend')
    two_playersgame();
    else {
        (initialSign == 'X') ? (initialSign = 'O') : (initialSign = 'X');
        turn.style.visibility = "visible";
        one_playergame();
    }
}

function goTohome(){
    window.location.reload();
}
home[0].onclick = function(){goTohome()};


/************************************************** ONE PLAYER MODE ****************************************************** */
var board = [ [ '_', '_', '_' ],
    			[ '_', '_', '_' ],
    			[ '_', '_', '_' ] ];
function roboPlays(){
    class Move
    {
    	constructor()
    	{
    		let row,col;
    	}
    }

    let player = initialSign, opponent = (player == 'X') ? 'O' : 'X';

    function isMovesLeft(board)
    {
    	for(let i = 0; i < 3; i++)
    		for(let j = 0; j < 3; j++)
    			if (board[i][j] == '_')
    				return true;
    
    	return false;
    }
    function evaluate(b)
    {
    	for(let row = 0; row < 3; row++)
    	{
    		if (b[row][0] == b[row][1] &&
    			b[row][1] == b[row][2])
    		{
    			if (b[row][0] == player)
    				return +10;
            
    			else if (b[row][0] == opponent)
    				return -10;
    		}
    	}
    	for(let col = 0; col < 3; col++)
    	{
    		if (b[0][col] == b[1][col] &&
    			b[1][col] == b[2][col])
    		{
    			if (b[0][col] == player)
    				return +10;

    			else if (b[0][col] == opponent)
    				return -10;
    		}
    	}
    	if (b[0][0] == b[1][1] && b[1][1] == b[2][2])
    	{
    		if (b[0][0] == player)
    			return +10;
        
    		else if (b[0][0] == opponent)
    			return -10;
    	}

    	if (b[0][2] == b[1][1] &&
    		b[1][1] == b[2][0])
    	{
    		if (b[0][2] == player)
    			return +10;
        
    		else if (b[0][2] == opponent)
    			return -10;
    	}
    	return 0;
    }
    function minimax(board, depth, isMax)
    {
    	let score = evaluate(board);

    	if (score == 10)
    		return score;

    	if (score == -10)
    		return score;

    	if (isMovesLeft(board) == false)
    		return 0;

    	if (isMax)
    	{
    		let best = -1000;
    		for(let i = 0; i < 3; i++)
    		{
    			for(let j = 0; j < 3; j++)
    			{
    				if (board[i][j]=='_')
    				{
    					board[i][j] = player;
    					best = Math.max(best, minimax(board,
    									depth + 1, !isMax));
    					board[i][j] = '_';
    				}
    			}
    		}
    		return best;
    	}
    	else
    	{
    		let best = 1000;
    		for(let i = 0; i < 3; i++)
    		{
    			for(let j = 0; j < 3; j++)
    			{
    				if (board[i][j] == '_')
    				{
    					board[i][j] = opponent;
    					best = Math.min(best, minimax(board,depth + 1, !isMax));
    					board[i][j] = '_';
    				}
    			}
    		}
    		return best;
    	}
    }
    function findBestMove(board)
    {
    	let bestVal = -1000;
    	let bestMove = new Move();
    	bestMove.row = -1;
    	bestMove.col = -1;

    	for(let i = 0; i < 3; i++)
    	{
    		for(let j = 0; j < 3; j++)
    		{
    			if (board[i][j] == '_')
    			{
    				board[i][j] = player;
    				let moveVal = minimax(board, 0, false);
    				board[i][j] = '_';
    				if (moveVal > bestVal)
    				{
    					bestMove.row = i;
    					bestMove.col = j;
    					bestVal = moveVal;
    				}
    			}
    		}
    	}
    	return bestMove;
    }
    
    let bestMove = findBestMove(board);
    if(board[1][1] == '_') {
        board[1][1] = 'X';
        document.getElementById('middle').innerHTML = 'X';
        checkFilling[4] = 1;
        return;
    }
    else{
        try { 
            board[bestMove.row][bestMove.col] = 'X';
        } catch (error) {
            home[0].style.visibility = "visible";
            result.style.visibility = "visible";
            result.innerHTML = "Draw";
        }
    }

    if(bestMove.row == 0 && bestMove.col==0) {
        checkFilling[0] = 1;
        box1.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 0 && bestMove.col==1) {
        checkFilling[1] = 1;
        box2.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 0 && bestMove.col==2) {
        checkFilling[2] = 1;
        box3.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 1 && bestMove.col==0) {
        checkFilling[3] = 1;
        box4.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 1 && bestMove.col==1) {
        checkFilling[4] = 1;
        box5.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 1 && bestMove.col==2) {
        checkFilling[5] = 1;
        box6.innerHTML = 'X';
    }
    else if(bestMove.row == 2 && bestMove.col==0) {
        checkFilling[6] = 1;
        box7.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 2 && bestMove.col==1) {
        checkFilling[7] = 1;
        box8.innerHTML = 'X';
        return;
    }
    else if(bestMove.row == 2 && bestMove.col==2) {
        checkFilling[8] = 1;
        box9.innerHTML = 'X';
        return;
    }
    checkifWon();
}
var resHide = false;
function checkifWon(){
    resHide = false;
    if((board[0][0]==board[0][1] && board[0][0] == board[0][2]) && board[0][0] == 'X' ) {
        scoreX++;
        box1.style.backgroundColor = "#071E54";
        box2.style.backgroundColor = "#071E54";
        box3.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[1][0]==board[1][1] && board[1][0] == board[1][2]) && board[1][0] == 'X' ) {
        scoreX++;
        box4.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[2][0]==board[2][1] && board[2][0] == board[2][2]) && board[2][0] == 'X' ) {
        scoreX++;
        box7.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[0][0]==board[1][0] && board[0][0] == board[2][0]) && board[2][0] == 'X' ) {
        scoreX++;
        box1.style.backgroundColor = "#071E54";
        box4.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[0][1]==board[1][1] && board[0][1] == board[2][1]) && board[0][1] == 'X' ) {
        scoreX++;
        box2.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box8.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[0][2]==board[1][2] && board[0][2] == board[2][2]) && board[0][2] == 'X' ) {
        scoreX++;
        box3.style.backgroundColor = "#071E54";
        box6.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[0][0]==board[1][1] && board[0][0] == board[2][2]) && board[0][0] == 'X' ) {
        scoreX++;
        box1.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box9.style.backgroundColor = "#071E54";
        x_score.innerHTML = "Computer's score: " + scoreX;
        home[0].style.visibility = "visible";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }
    if((board[0][2]==board[1][1] && board[0][2] == board[2][0]) && board[0][2] == 'X' ) {
        scoreX++;
        box3.style.backgroundColor = "#071E54";
        box5.style.backgroundColor = "#071E54";
        box7.style.backgroundColor = "#071E54";
        result.style.visibility = "visible";
        result.innerHTML = "Computer Won";
        home[0].style.visibility = "visible";
        x_score.innerHTML = "Computer's score: " + scoreX;
        for(var i=0; i<9; i++) checkFilling[i]=1;
        resHide = true;
    }

    if(resHide == true) turn.style.visibility = "hidden";
    var count_numberofO = 0;
    var count_numberofX = 0;
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            if(board[i][j] == 'X') count_numberofX++;
            if(board[i][j] == 'O') count_numberofO++;
        }
    }
    if(count_numberofO + count_numberofX == 9){
        result.style.visibility = "visible";
        result.innerHTML = "Draw";
        turn.style.visibility = "hidden";
        home[0].style.visibility = "visible";
    }
}
function one_playergame(){
    if(initialSign == 'O')
    {
        roboPlays();
        player();
    }
    else{
        turn.innerHTML = "O's turn";
        player(); 
    }

    function player(){

        $('#topleft').click(function(){
            if(checkFilling[0]==0){
                document.getElementById('topleft').innerHTML = 'O';
                board[0][0] = 'O';
                checkFilling[0]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#top').click(function(){
            if(checkFilling[1]==0){
                document.getElementById('top').innerHTML = 'O';
                board[0][1] = 'O';
                checkFilling[1]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#topright').click(function(){
            if(checkFilling[2]==0){
                document.getElementById('topright').innerHTML = 'O';
                board[0][2] = 'O';
                checkFilling[2]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#left').click(function(){
            if(checkFilling[3]==0){
                document.getElementById('left').innerHTML = 'O';
                board[1][0] = 'O';
                checkFilling[3]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#middle').click(function(){
            if(checkFilling[4]==0){
                document.getElementById('middle').innerHTML = 'O';
                board[1][1] = 'O';
                checkFilling[4]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#right').click(function(){
            if(checkFilling[5]==0){
                document.getElementById('right').innerHTML = 'O';
                board[1][2] = 'O';
                checkFilling[5]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#bottomleft').click(function(){
            if(checkFilling[6]==0){
                document.getElementById('bottomleft').innerHTML = 'O';
                board[2][0] = 'O';
                checkFilling[6]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#bottom').click(function(){
            if(checkFilling[7]==0){
                document.getElementById('bottom').innerHTML = 'O';
                board[2][1] = 'O';
                checkFilling[7]=1;
                roboPlays();
                checkifWon();
            }
        });
        $('#bottomright').click(function(){
            if(checkFilling[8]==0){
                document.getElementById('bottomright').innerHTML = 'O';
                board[2][2] = 'O';
                checkFilling[8]=1;
                roboPlays();
                checkifWon();
            }
        });
    }
}