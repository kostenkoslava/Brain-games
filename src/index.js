import readlineSync from 'readline-sync';

const startGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const roundsCount = 3;
  console.log(description);
  const gameLoop = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    gameLoop(counter - 1);
  };
  gameLoop(roundsCount);
};
export default startGame;
