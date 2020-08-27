import startGame, { getRandom } from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (x) => {
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
const prime = () => {
  let result = '';
  const task = getRandom(100);
  if (isPrime(task)) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [task, result];
};
export default () => startGame(descr, prime);
