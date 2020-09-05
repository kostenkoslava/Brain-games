import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGeneralDivider = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGeneralDivider(number2, number1 % number2);
};

const makeBrainGcd = () => {
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${b}`;
  const result = getGeneralDivider(a, b);
  return [question, result];
};
export default () => playGame(description, makeBrainGcd);
