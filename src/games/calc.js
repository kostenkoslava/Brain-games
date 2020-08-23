import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, checkAnswer, endGame } from '../index.js';

const calc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  let counter = 0;
  let result = 0;
  while (counter < 3) {
    const firstNumber = getRandom('number');
    const secondNumber = getRandom('number');
    const operator = getRandom('symbol');
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      default:
        result = firstNumber * secondNumber;
        break;
    }
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const concl = checkAnswer(userAnswer, result);
    if (concl === true) {
      counter += 1;
    } else {
      return concl;
    }
  }
  return endGame(name);
};
export default calc;
