const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Invalid selection.");
    }
  };
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return "The computer won!";
        } else {
          return "You won!";
        }
        if (userChoice === "paper") {
          if (computerChoice === "scissors") {
            return "The computer won!";
          } else {
            return "You won!";
          }
          if (userChoice === "scissors") {
            if (computerChoice === "rock") {
              return "The computer won!";
            } else {
              return "You won!";
            }
          }
        }
      }
    }
  };
  console.log(determineWinner("rock", "scissors"));
  