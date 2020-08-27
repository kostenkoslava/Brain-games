import startGame, { getRandom } from '../index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  let correctAnswer = '';
  const number = getRandom(100);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [number, correctAnswer];
};
export default () => startGame(descr, brainEven);
