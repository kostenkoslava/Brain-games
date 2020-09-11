import startGame from '../index.js';
import getRandom from '../tools.js';

const description = 'What number is missing in the progression?';
const makeBrainProgression = () => {
  const progression = [];
  const gap = '..';
  const progressionLength = 10;
  const step = getRandom(1, 10);
  const randomIndex = getRandom(0, progressionLength - 1);
  const progressionStart = getRandom(1, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = progressionStart + (step * i);
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = gap;
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};
export default () => startGame(description, makeBrainProgression);
