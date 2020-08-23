import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, checkAnswer, endGame } from '../index.js';

const generalDivider = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return generalDivider(number2, number1 % number2);
};

const gcd = () => {
  const name = greeting();
  let counter = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (counter < 3) {
    const a = getRandom('number');
    const b = getRandom('number');
    console.log(`Question: ${a} ${b}`);
    const result = generalDivider(a, b);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const answer = checkAnswer(userAnswer, result);
    if (answer === true) {
      counter += 1;
    } else {
      return answer;
    }
  }
  return endGame(name);
};
export default gcd;