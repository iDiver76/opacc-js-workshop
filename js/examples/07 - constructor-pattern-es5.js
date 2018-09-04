var Scoreboard = function() {
  console.log('Creating a new scoreboard...');
  var message = 'Welcome to the game!';
  function printMessage() {
      console.log(message);
  }
  return {
    showMessage: printMessage
  }
}; 
/* no longer immediately executing the function  -- function
 definition is assigned to a variable which must later be
 invoked. */

var myScoreboard = new Scoreboard();
myScoreboard.showMessage();