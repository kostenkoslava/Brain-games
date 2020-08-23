import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, checkAnswer, endGame } from '../index.js';

const isPrime = (x) => {
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
const prime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    let result = '';
    const task = getRandom(100);
    console.log(`Question: ${task}`);
    if (isPrime(task)) {
      result = 'yes';
    } else {
      result = 'no';
    }
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = checkAnswer(userAnswer, result);
    if (answer === true) {
      counter += 1;
    } else {
      return answer;
    }
  }
  return endGame(name);
};
export default prime;
