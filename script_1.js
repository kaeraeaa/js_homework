// Завдання 1

const friends = ['mango', 'poly', 'kiwi', 'ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  if (i === friends.length - 1) {
    string += friends[i];
  } else {
    string += friends[i] + ', ';
  }
}

// const friends = ['mango', 'poly', 'kiwi', 'ajax'];
// let string = friends.join(', ');

console.log(string);


// Завдання 2

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]




// Завдання 3

const cardToRemove = 'Карточка-3';
cards.splice(2, 1);

// Завдання 4

const cardToInset = 'Карточка-6';
cards.splice(5, 5,  'Карточка-6');

// Завдання 5

const cardToUpdate = 'Карточка-4';
cards.splice(2, 1, 'Нова карта');

console.log(cards);