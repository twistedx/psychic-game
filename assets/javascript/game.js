
  

  //first create an array of possible choices
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var wins = 0;
  var losses = 0;
  var guesses = 10;
  var iPicked = "";
  var alreadyGuessed = [];


  var playerGuessText = document.getElementById("playerGuess");
  var winsText = document.getElementById("wins");
  var lossesText = document.getElementById("losses");
  var guessText = document.getElementById("guess");
  
  var letterPick = function(){
   var temp = Math.floor(Math.random() * letters.length);
   console.log("I picked " + temp);
   return temp;
  }


  var newPick = letterPick();
  console.log("newpick is " + newPick);

  document.onkeyup = function(event) {  
      var counter = 0;
  // Take the Key from the user
      var userGuess = event.key;
        



        console.log(alreadyGuessed);    
     if(letters.includes(userGuess)){
         if (alreadyGuessed.includes(userGuess)){
             alert("Pick a new letter, you have already guessed that one");
         }else{
            if (userGuess === letters[newPick]){
                wins++;
                alert("The Computer choose " + letters[newPick] + " So did you, you Win!!")
                iPicked = "";
                counter = 0;
                guesses = 10;
                alreadyGuessed = [];
                newPick = letterPick();
            }else if (guesses <= 0){
                losses++;
                alert("You lose!");
                iPicked = "";
                counter = 0;
                guesses = 10;
                alreadyGuessed = [];
                newPick = letterPick();
            }else{
                guesses--;
                counter++;
                iPicked = iPicked + " " + userGuess;
                console.log(guesses);
                guessText.textContent = "You have " + guesses +  " remaining.";
                alreadyGuessed.push(userGuess);
            }
            
            playerGuessText.textContent = "Your Guesses so far: [" + iPicked + " ]";
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessText.testContent = "You have " + guesses +  " remaining."
        }
    }
}