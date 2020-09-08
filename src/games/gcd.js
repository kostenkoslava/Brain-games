import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';
const getCommonDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getCommonDivisor(number2, number1 % number2);
};

const makeBrainGcd = () => {
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${b}`;
  const result = getCommonDivisor(a, b);
  return [question, result];
};
export default () => playGame(description, makeBrainGcd);
