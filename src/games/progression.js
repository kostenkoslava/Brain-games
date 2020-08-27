import startGame, { getRandom } from '../index.js';

const descr = 'What number is missing in the progression?';
const progressionGame = () => {
  const progression = [];
  const gap = '..';
  const step = getRandom(10);
  const randomIndex = getRandom(9);
  progression[0] = getRandom(10);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = gap;
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => startGame(descr, progressionGame);
