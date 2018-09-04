var scoreboard = function() {
  var message = 'Welcome to the game!';
  function printMessage() {
       console.log(message);
  }
  function updateMessage(newMessage) {
      message = newMessage;
      console.log(message);
  }
  //return an object that represents our new module
  return {
       showMessage: printMessage,
       updateMessage: updateMessage
  }
}(); //This is called a immediately invoked function definition, or IIFE

scoreboard.showMessage();
scoreboard.updateMessage('Let the game begin!');