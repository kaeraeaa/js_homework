// Завдання 1

let numbersOne = [1, 2, 3];
numbersOne[1] = 10;
console.log(numbersOne); 

// Завдання 2

let stringsOne = ['рядок-1', 'рядок-2', 'рядок-3'];
stringsOne.push('рядок-4');
console.log(stringsOne); 

// Завдання 3

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const number = [1, 2, 3, 4, 5];
  console.log(sumArray(number)); 
  

// Завдання 4

const numbersTwo = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersTwo.length; i++) {
  console.log(numbersTwo[i]);
}

// Завдання 5

const strings = ['jksr', 'jdkv', 'jfkjvkdl', 'kdjfndkisk', 'jsh'];

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > 5) {
    console.log(strings[i]);
  }
}

// Завдання 6

const numbersThree = [10, 5, 8, 20, 3, 15, 7, 12, 18, 1];
let max = numbersThree[0];

for (let i = 1; i < numbersThree.length; i++) {
  if (numbersThree[i] > max) {
    max = numbersThree[i];
  }
}

console.log('Максимальне значення в масиві: ' + max);

// Завдання 7
const numbers = [2, 5, 8, 10, 3, 15, 7, 12, 18, 1];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
