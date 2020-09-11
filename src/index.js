import readlineSync from 'readline-sync';

const startGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const roundCount = 3;
  console.log(description);
  const gameLoop = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return;
    }
    console.log('Correct!');
    gameLoop(counter - 1);
  };
  gameLoop(roundCount);
};
export default startGame;
