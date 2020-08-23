export const getRandom = (edge) => {
  const number = Math.floor(Math.random() * edge);
  return number;
};
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};
export const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`"${String(userAnswer)}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
};
export const endGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};
