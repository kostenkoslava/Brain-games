import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Answer "yes" if given number is makeBrainPrime. Otherwise answer "no".';
const isPrime = (x) => {
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0 || x <= 1) {
      return false;
    }
  }
  return true;
};
const makeBrainPrime = () => {
  let result = '';
  const task = getRandom(1, 100);
  result = (isPrime(task)) ? 'yes' : 'no';
  return [task, result];
};
export default () => playGame(description, makeBrainPrime);
