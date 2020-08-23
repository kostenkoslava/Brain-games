import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, checkAnswer, endGame } from '../index.js';

const progressionGame = () => {
  const name = greeting();
  const progression = [];
  let counter = 0;
  const gap = '..';
  console.log('What number is missing in the progression?');
  while (counter < 3) {
    const step = getRandom(10);
    const randomIndex = getRandom(9);
    progression[0] = getRandom(10);
    for (let i = 1; i < 10; i += 1) {
      progression[i] = progression[i - 1] + step;
    }
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = gap;
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const answer = checkAnswer(userAnswer, correctAnswer);
    if (answer === true) {
      counter += 1;
    } else {
      return answer;
    }
  }
  return endGame(name);
};
export default progressionGame;
