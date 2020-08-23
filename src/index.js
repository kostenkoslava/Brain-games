export const getRandom = (string) => {
  if (string === 'number') {
    const number = Math.floor(Math.random() * 100);
    return number;
  }
  if (string === 'symbol') {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return randomOperator;
  }
  return string;
};
export const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
};
