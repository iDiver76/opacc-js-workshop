const scoreboard = (() => {
  let message = 'Welcome to the game!';
  const printMessage = () => {
       console.log(message);
  }
  const updateMessage = (newMessage) => {
      message = newMessage;
      console.log(message);
  }
  //return an object that represents our new module
  return {
       showMessage: printMessage,
       updateMessage
  }
})(); //This is called a immediately invoked function definition, or IIFE

scoreboard.showMessage();
scoreboard.updateMessage('Let the game begin!');