import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'What number is missing in the progression?';
const makeBrainProgression = () => {
  const progression = [];
  const gap = '..';
  const progressionLength = 9;
  const step = getRandom(1, 10);
  const randomIndex = getRandom(0, progressionLength);
  progression[0] = getRandom(1, 10);
  for (let i = 1; i <= progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = gap;
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => playGame(description, makeBrainProgression);
