import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeBrainEven = () => {
  const question = getRandom(1, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => playGame(description, makeBrainEven);
