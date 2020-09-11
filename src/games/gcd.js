import startGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Find the greatest common divisor of given numbers.';
const getTwoIntCommonDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getTwoIntCommonDivisor(number2, number1 % number2);
};

const makeBrainGcd = () => {
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${b}`;
  const result = getTwoIntCommonDivisor(a, b);
  return [question, String(result)];
};
export default () => startGame(description, makeBrainGcd);
