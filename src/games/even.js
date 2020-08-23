import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, checkAnswer } from '../index.js';

const brainEven = () => {
  const name = greeting();
  let correctAnswer = '';
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < 3) {
    const number = getRandom('number');
    console.log(`Question: ${number}`);
    number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = checkAnswer(userAnswer, correctAnswer);
    if (answer === true) {
      counter += 1;
    } else {
      return answer;
    }
  }
  return `Congratulations, ${name}!`;
};
export default brainEven;
