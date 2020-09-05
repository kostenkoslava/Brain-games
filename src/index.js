import readlineSync from 'readline-sync';
import greeting from './cli.js';

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`"${String(userAnswer)}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
};
const endGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};
const playGame = (description, game) => {
  const name = greeting();
  let counter = 0;
  console.log(description);
  while (counter < 3) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = checkAnswer(String(userAnswer), String(correctAnswer));
    if (result === true) {
      counter += 1;
    } else {
      return result;
    }
  }
  return endGame(name);
};
export default playGame;
