const Scoreboard = () => {
  console.log('Creating a new scoreboard...');
  const message = 'Welcome to the game!';
  const printMessage = () => {
      console.log(message);
  }
  return {
    showMessage: printMessage
  }
}; 
/* no longer immediately executing the function  -- function
 definition is assigned to a variable which must later be
 invoked. */

const myScoreboard = new Scoreboard();
myScoreboard.showMessage();