playerNum = document.querySelector('.playerNum');
buttonX = document.querySelector('#x');
buttonO = document.getElementById('o');
symbol = document.querySelector('.symbol');
table = document.querySelector('.table');
boxes = document.querySelectorAll('.box');
winnerBox = document.querySelector('.winner');
winnerName = document.querySelector('#name');
replay =document.querySelector('.replay');

var player1, player2, winner, noOfMoves=0, mode;
var whichSymbol, whichMode;
var playerXBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playerOBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function reset(){
	playerXBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	playerOBoxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for(var i=0; i<9; i++){
		boxes[i].textContent = "";
	}
	winner=undefined;
	mode = undefined;
	noOfMoves=0;
}

document.getElementById('single').addEventListener('click', clickSingleMulti);
document.getElementById('multi').addEventListener('click',  clickSingleMulti);


function clickSingleMulti(n){
	whichMode = n;
	n.target.style.boxShadow = "0 0 10px 1px yellow";
	setTimeout(()=>{playerNum.style.display = "none";
					symbol.style.display = "block"}, 200);
	setTimeout(() => whichMode.target.style.boxShadow = "none", 200);

	mode = (n.target.textContent == 'Single Player')? "single" : "multi";
		
}



buttonX.addEventListener('click', clickOX);
buttonO.addEventListener('click', clickOX);

function clickOX(e){
	console.log(e);
	whichSymbol = e;
	if(e.target.textContent == 'x'){
		player1 = 'x';
		player2 = 'o';
	}
	else{
		player1 = 'o';
		player2 = 'x';
	}
	player = player1;
	e.target.style.boxShadow = "0 0 10px 1px yellow";
	setTimeout(changeScreen, 200);
	setTimeout(() => whichSymbol.target.style.boxShadow = "none", 200);
}

function changeScreen(){
	symbol.style.display = "none";
	table.style.display = "block";
}

for(var i=0; i<9; i++){
	boxes[i].addEventListener('click', clickBox);
}


function clickBox(boxInfo){
	var boxId = boxInfo.target.id;
	console.log(boxId);
	console.log(boxInfo);
	if(boxInfo.target.textContent != "") return;
	boxInfo.target.style.cssText = 'color: white; font-size: 70px';
	boxInfo.target.textContent= player;

	if(player == 'x'){
		playerXBoxes[boxId-1] = 1;
		console.log(playerXBoxes);
		checkXWinner();
	}
	else{
		playerOBoxes[boxId-1] = 1;
		console.log(playerOBoxes);
		checkOWinner();
	}
	noOfMoves++;
	if(noOfMoves == 9)
		gameTie();
	player = player=='o'?'x':'o';
	if(mode=='single' && noOfMoves <= 7){
		setTimeout(botMove, 500);
	}
}

function botMove(){
	var botBoxId;
	do{
		botBoxId = Math.floor(Math.random()*9) +1;
		console.log(document.getElementById(botBoxId));
	}while(document.getElementById(botBoxId) != null && document.getElementById(botBoxId).textContent != "");
	//Use minMax() to get botBoxId and then delete above 3 lines.
	//minMax();

	console.log(botBoxId);
	botBox = document.getElementById(botBoxId)
	console.log(document.getElementById(botBoxId));
	botBox.style.cssText = 'color: white; font-size: 70px';
	botBox.textContent= player;

	console.log(player);
	if(player == 'x'){
		playerXBoxes[botBoxId-1] = 1;
		console.log(playerXBoxes);
		checkXWinner();
	}
	else{
		playerOBoxes[botBoxId-1] = 1;
		console.log(playerOBoxes);
		checkOWinner();
	}
	noOfMoves++;
	if(noOfMoves == 9)
		gameTie();
	player = player=='o'?'x':'o';

}


function checkXWinner(){

	if(playerXBoxes[0]+playerXBoxes[1]+playerXBoxes[2]==3 ||
		playerXBoxes[3]+playerXBoxes[4]+playerXBoxes[5]==3 ||
		playerXBoxes[6]+playerXBoxes[7]+playerXBoxes[8]==3 ||
		playerXBoxes[0]+playerXBoxes[3]+playerXBoxes[6]==3 ||
		playerXBoxes[1]+playerXBoxes[4]+playerXBoxes[7]==3 ||
		playerXBoxes[2]+playerXBoxes[5]+playerXBoxes[8]==3 ||
		playerXBoxes[0]+playerXBoxes[4]+playerXBoxes[8]==3 || 
		playerXBoxes[2]+playerXBoxes[4]+playerXBoxes[6]==3){
			winner = 'x';
			setTimeout(winnerFound , 500);
		}


}

function checkOWinner(){
	//the win cases
	if(playerOBoxes[0]+playerOBoxes[1]+playerOBoxes[2]==3 ||
		playerOBoxes[3]+playerOBoxes[4]+playerOBoxes[5]==3 ||
		playerOBoxes[6]+playerOBoxes[7]+playerOBoxes[8]==3 ||
		playerOBoxes[0]+playerOBoxes[3]+playerOBoxes[6]==3 ||
		playerOBoxes[1]+playerOBoxes[4]+playerOBoxes[7]==3 ||
		playerOBoxes[2]+playerOBoxes[5]+playerOBoxes[8]==3 ||
		playerOBoxes[0]+playerOBoxes[4]+playerOBoxes[8]==3 || 
		playerOBoxes[2]+playerOBoxes[4]+playerOBoxes[6]==3){
			winner = 'o';
			setTimeout(winnerFound , 500);
		}
}

function gameTie(){
	winnerName.textContent = "Game ties!";
	setTimeout(()=>{}, 500);
	table.style.display = 'none';
	winnerBox.style.display = 'block';
	replay.style.display = 'block';
}

function winnerFound(){
	console.log(winner);
	if((winner == 'x' && player1 == 'x') || (winner == 'o' && player1 == 'o'))
		winner = "Player 1";
	else
		winner = "Player 2";
	winnerName.textContent = winner+" wins!!";
	
	table.style.display = 'none';
	winnerBox.style.display = 'block';
	replay.style.display = 'block';

}

replay.addEventListener('click', toReplay);
function toReplay(e){
	e.target.style.boxShadow = "0 0 10px 1px yellow";
	setTimeout(changeScreenToStart, 200);
}

function changeScreenToStart(){
	winnerBox.style.display = 'none';
	replay.style.display = 'none';
	playerNum.style.display = "block";
	reset();
	setTimeout(()=>replay.style.boxShadow='none', 200);
}


