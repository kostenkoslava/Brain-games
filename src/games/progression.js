import startGame from '../index.js';
import getRandom from '../tools.js';

const description = 'What number is missing in the progression?';
const makeBrainProgression = () => {
  const progression = [];
  const gap = '..';
  const length = 10;
  const step = getRandom(1, 10);
  const randomIndex = getRandom(0, length - 1);
  const start = getRandom(1, 10);
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + (step * i);
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = gap;
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};
export default () => startGame(description, makeBrainProgression);
