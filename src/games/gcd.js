import startGame, { getRandom } from '../index.js';

const descr = 'Find the greatest common divisor of given numbers.';
const generalDivider = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return generalDivider(number2, number1 % number2);
};

const gcd = () => {
  const a = getRandom(100);
  const b = getRandom(100);
  const question = `${a} ${b}`;
  const result = generalDivider(a, b);
  return [question, result];
};
export default () => startGame(descr, gcd);
