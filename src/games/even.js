import playGame from '../index.js';
import getRandom from '../tools.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeBrainEven = () => {
  let correctAnswer = '';
  const randomNumber = getRandom(1, 100);
  correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};
export default () => playGame(description, makeBrainEven);
