import playGame from '../index.js';
import getRandom from '../tools.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(0, 2)];
  return randomOperator;
};
const description = 'What is the result of the expression?';
const makeBrainCalculator = () => {
  let result = 0;
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  const operator = getRandomOperator();
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
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, result];
};
export default () => playGame(description, makeBrainCalculator);
