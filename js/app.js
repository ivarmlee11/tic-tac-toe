document.addEventListener('DOMContentLoaded', function() {

  var gameBoard = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
  ];


  // the game board positions are set to variables for later use

  var tleft = document.getElementById('tleft');
  var tmid = document.getElementById('tmid');
  var tright = document.getElementById('tright');
  var mleft = document.getElementById('mleft');
  var mmid = document.getElementById('mmid');
  var mright = document.getElementById('mright');
  var bleft = document.getElementById('bleft');
  var bmid = document.getElementById('bmid');
  var bright = document.getElementById('bright');


  // vars
  var messagebox = document.getElementById('messageBox');

  var lookForNext = function (e) {
    for(var rownum = 0; rownum < gameBoard.length; rownum++){
      console.log("entered rown num loop " + rownum + " sweet ");
      for(var cellnum = 0; cellnum < gameBoard[rownum].length; cellnum++){
        console.log("entered column num loop " + cellnum + " sweet ");
        if(gameBoard[rownum][cellnum] === 0){
          console.log('look for next turned up a 0 at ' + gameBoard[rownum][cellnum] + " and replaced it with a 2");
          gameBoard[rownum][cellnum] = 2;
          // if(gameBoard)
          // tleft.innerHTML = "<img src='../src/images/cointail.png'>";
          // tleft.className = 'redBg';
          console.log(JSON.stringify(gameBoard));
          return gameBoard[rownum][cellnum];
        }
      }
    }
  };

  var computerMove = function () {
    move = Math.floor(Math.random()*9+1);
    console.log(move);
    switch(move) {
      case 1:

      if(gameBoard[0][0] === 0){
        gameBoard[0][0] = 2;
        console.log(JSON.stringify(gameBoard));
        tleft.innerHTML = "<img src='../src/images/cointail.png'>";
        tleft.className = 'redBg';
      }else if(gameBoard[0][0] === (1 || 2)){
        lookForNext();
      }
      break;

      case 2:

      if(gameBoard[0][1] === 0){
        gameBoard[0][1] = 2;
        console.log(JSON.stringify(gameBoard));
        tmid.innerHTML = "<img src='../src/images/cointail.png'>";
        tmid.className = 'redBg';

      }else if(gameBoard[0][1] === (1 || 2)){
        lookForNext();
      }
      break;

      case 3:

      if(gameBoard[0][2] === 0){
        gameBoard[0][2] = 2;
        console.log(JSON.stringify(gameBoard));
        tright.innerHTML = "<img src='../src/images/cointail.png'>";
        tright.className = 'redBg';

      }else if(gameBoard[0][2] === (1 || 2)){
        lookForNext();
      }
      break;

      case 4:

      if(gameBoard[1][0] === 0){
        gameBoard[1][0] = 2;
        console.log(JSON.stringify(gameBoard));
        mleft.innerHTML = "<img src='../src/images/cointail.png'>";
        mleft.className = 'redBg';

      }else if(gameBoard[1][0] === (1 || 2)){
        lookForNext();
      }
      break;

      case 5:

      if(gameBoard[1][1] === 0){
        gameBoard[1][1] = 2;
        console.log(JSON.stringify(gameBoard));
        mmid.innerHTML = "<img src='../src/images/cointail.png'>";
        mmid.className = 'redBg';

      }else if(gameBoard[1][1] === (1 || 2)){
        lookForNext();
      }
      break;

      case 6:

      if(gameBoard[1][2] === 0){
        gameBoard[1][2] = 2;
        console.log(JSON.stringify(gameBoard));
        mright.innerHTML = "<img src='../src/images/cointail.png'>";
        mright.className = 'redBg';

      }else if(gameBoard[1][2] === (1 || 2)){
        lookForNext();
      }
      break;

      case 7:

      if(gameBoard[2][0] === 0){
        gameBoard[2][0] = 2;
        console.log(JSON.stringify(gameBoard));
        bleft.innerHTML = "<img src='../src/images/cointail.png'>";
        bleft.className = 'redBg';

      }else if(gameBoard[2][0] === (1 || 2)){
        lookForNext();
      }
      break;

      case 8:

      if(gameBoard[2][1] === 0){
        gameBoard[2][1] = 2;
        console.log(JSON.stringify(gameBoard));
        bmid.innerHTML = "<img src='../src/images/cointail.png'>";
        bmid.className = 'redBg';

      }else if(gameBoard[2][1] === (1 || 2)){
        lookForNext();
      }
      break;

      case 9:

      if(gameBoard[2][2] === 0){
        gameBoard[2][2] = 2;
        console.log(JSON.stringify(gameBoard));
        bright.innerHTML = "<img src='../src/images/cointail.png'>";
        bright.className = 'redBg';

      }else if(gameBoard[2][2] === (1 || 2)){
        lookForNext();
      }
      break;

      default:

    }
  };


  // lots of if statements checking board positions by accessing
  // nested array values

  var winState = function() {
    for(var rownum = 0; rownum < gameBoard.length; rownum++){
      for(var cellnum = 0; cellnum < gameBoard[rownum].length; cellnum++){
        // human win check
        // checking rows for a win
        if((gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        // checking columns for a win
        else if((gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        // checking diags for a win
        else if((gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1)){
          messagebox.innerHTML = "You win!";
          console.log(JSON.stringify(gameBoard));
        }
        // other player win check
        // checking rows for a win
        else if((gameBoard[0][0] === 2 && gameBoard[0][1] === 2 && gameBoard[0][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[1][0] === 2 && gameBoard[1][1] === 2 && gameBoard[1][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        // checking columns for a win
        else if((gameBoard[0][0] === 2 && gameBoard[1][0] === 2 && gameBoard[2][0] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][1] === 2 && gameBoard[1][1] === 2 && gameBoard[2][1] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        // checking diags for a win
        else if((gameBoard[0][0] === 2 && gameBoard[1][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 2 && gameBoard[1][1] === 2 && gameBoard[2][0] === 2)){
          messagebox.innerHTML = "The second player won!";
          console.log(JSON.stringify(gameBoard));
        }

      }
    }
  };

  tleft.addEventListener('click', function() {
    if(gameBoard[0][0] === 0){

        tleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][0] = 1;
        tleft.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  tmid.addEventListener('click', function() {
    if(gameBoard[0][1] === 0){

        tmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][1] = 1;
        tmid.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  tright.addEventListener('click', function() {
    if(gameBoard[0][2] === 0){

        tright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][2] = 1;
        tright.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  mleft.addEventListener('click', function() {
    if(gameBoard[1][0] === 0){

        mleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][0] = 1;
        mleft.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  mmid.addEventListener('click', function() {
    if(gameBoard[1][1] === 0){

        mmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][1] = 1;
        mmid.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  mright.addEventListener('click', function() {
    if(gameBoard[1][2] === 0){

        mright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][2] = 1;
        mright.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  bleft.addEventListener('click', function() {
    if(gameBoard[2][0] === 0){

        bleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][0] = 1;
        bleft.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  bmid.addEventListener('click', function() {
    if(gameBoard[2][1] === 0){

        bmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][1] = 1;
        bmid.className = 'blueBg';
        computerMove();
        winState();

    }
  });

  bright.addEventListener('click', function() {
    if(gameBoard[2][2] === 0){

        bright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][2] = 1;
        bright.className = 'blueBg';
        computerMove();
        winState();

    }
  });

});
