$( document ).ready(function() {
    var Random = Math.floor(Math.random()*101+19)
    // Randomly generates a number when the game is started
    // This number is always between 19 - 120
    //
    $('#matchThisNumber').text(Random);
    // Appending the random number to the randomNumber id in the html 
    //
    var firstNumber = Math.floor(Math.random()*11+1)
    var secondNumber = Math.floor(Math.random()*11+1)
    var thirdNumber = Math.floor(Math.random()*11+1)
    var fourthNumber = Math.floor(Math.random()*11+1)
    // Setting up random numbers for each pokeball
    // Random number is always between 1 - 12
    // 
    var userTotal = 0; 
    var wins = 0;
    var losses = 0;
    //  Declaring variables for tallies
  $('#numberOfWins').text(wins);
  $('#numberOfLosses').text(losses);
  //resets the game
  function reset() {
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#matchThisNumber').text(Random);
        firstNumber = Math.floor(Math.random()*11+1);
        secondNumber = Math.floor(Math.random()*11+1);
        thirdNumber = Math.floor(Math.random()*11+1);
        fourthNumber = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $('#userTotalScore').text(userTotal);
        } 
  //adds the wins to the userTotal
  function youWin() {
  alert("You won!");
    wins++; 
    $('#numberOfWins').text(wins);
    reset();
  }
  //adds the losses to the userTotal
  function iHateLosers() {
  alert ("You lose!");
    losses++;
    $('#numberOfLosses').text(losses);
    reset()
  }
  //sets up clicks for the pokeballs
    $('#first').on ('click', function() {
      userTotal = userTotal + firstNumber;
      console.log("New userTotal = " + userTotal);
      $('#userTotalScore').text(userTotal); 
            //this sets the win/lose conditions
          if (userTotal === Random) {
            youWin();
          }
          else if ( userTotal > Random) {
            iHateLosers();
          }   
    })  
    $('#second').on ('click', function() {
      userTotal = userTotal + secondNumber;
      console.log("New userTotal = " + userTotal);
      $('#userTotalScore').text(userTotal); 
          if (userTotal === Random) {
            youWin();
          }
          else if ( userTotal > Random) {
            iHateLosers();
          } 
    })  
    $('#third').on ('click', function() {
      userTotal = userTotal + thirdNumber;
      console.log("New userTotal = " + userTotal);
      $('#userTotalScore').text(userTotal);
            if (userTotal === Random) {
            youWin();
          }
          else if ( userTotal > Random) {
            iHateLosers();
          } 
    })  
    $('#fourth').on ('click', function() {
      userTotal = userTotal + fourthNumber;
      console.log("New userTotal = " + userTotal);
      $('#userTotalScore').text(userTotal); 
        
            if (userTotal === Random) {
            youWin();
          }
          else if ( userTotal > Random) {
            iHateLosers();
          }
    });   
  }); 