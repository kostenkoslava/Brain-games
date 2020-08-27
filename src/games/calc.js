import startGame, { getRandom } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};
const descr = 'What is the result of the expression?';
const calc = () => {
  let result = 0;
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  const operator = getRandomOperator();
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
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
  return [question, result];
};
export default () => startGame(descr, calc);
