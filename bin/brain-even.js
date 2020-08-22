#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const brainEven = () => {
  const name = greeting();
  let correctAnswer = 'yes';
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    if (number % 2 !== 0) {
      correctAnswer = 'no';
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
    }
    correctAnswer = 'yes';
  }
  return `Congratulations, ${name}!`;
};
console.log(brainEven());
