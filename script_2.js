// Дз 9
// Завдання 1

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  
 
  const arr = ['Mango', 'Poly', 'Ajax'];
  logItems(arr);
  
  
// Завдання 2

  function calculateEngravingPrice(message, pricePerWord) {
  
    const words = message.split(' ');
    const wordCount = words.length;
    
    const totalPrice = wordCount * pricePerWord;
    
    return totalPrice;
  }
  
// Завдання 3

function findLongestWord(string) {
    
    const words = string.split(' ');
    
    let longestWord = '';
    
    for (const word of words) {

      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
  }
  
  const string = "One two three four five";
  const longestWord = findLongestWord(string);
  console.log(longestWord);
  

// Завдання 4

function formatString(string) {
    
    if (string.length <= 40) {
      
      return string;
    } else {
     
      const shortenedString = string.slice(0, 40) + '...';
      return shortenedString;
    }
  }
  
  const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const formattedString = formatString(longString);
  console.log(formattedString); 
  

// Завдання 5

function checkForSpam(message) {
    
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(checkForSpam("sale")); 
  console.log(checkForSpam("spam")); 
  console.log(checkForSpam("One")); 
  

// Завдання 6

let input;
let numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число");
    if (input === null) {
        break;
    }
    input = Number(input);
    if (!isNaN(input)) {
        numbers.push(input);
    } else {
        alert("Було введено не число, попробуйте ще раз");
    }
}

if (numbers.length) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив порожній");
}
