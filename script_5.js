// Дз 12
// Завдання 1

const user = {
    name: 'Lera',
    age: 16,
    hobby: 'dance',
    premium: true,
  };
  
  user.mood = 'happy';
  
  user.hobby = 'skydiving';
  
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
  
// Завдання 2

function countProps(obj) {
    return Object.keys(obj).length;
  }
  
  const userOne = {
    name: 'lera',
    age: 15,
  };
  
  console.log(countProps(userOne));

// Завдання 3

  function findBestEmployee(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        
        maxTasks = employees[employee];
        
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  const employees = {
    Lera: 4,
    Nastya: 3,
    Sonya: 5,
    Anna: 2,
  };
  
  console.log(findBestEmployee(employees)); 
  

  // Завдання 4

  function countTotalSalary(employees) {
  let totalSalary = 0;
  
    for (const employee in employees) {
      
      totalSalary += employees[employee];
    }
  
    return totalSalary;
  }
  
  const salaries = {
    Lera: 100,
    Nastya: 170,
    Anna: 150,
  };
  
  console.log(countTotalSalary(salaries));
  
   // Завдання 5

   function getAllPropValues(arr, prop) {
   const propValues = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        propValues.push(obj[prop]);
      }
    }
  
    return propValues;
  }
  
  const things = [
    { name: 'book', price: 10 },
    { name: 'pen', price: 3 },
    { name: 'phone', price: 50 }
  ];
  
  console.log(getAllPropValues(things, 'name'));
  console.log(getAllPropValues(things, 'price')); 
  

  // Завдання 6
  
  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  
  const products = [
    { name: 'apple', price: 5, quantity: 5 },
    { name: 'banana', price: 8, quantity: 2 },
    { name: 'orange', price: 10, quantity: 2 }
  ];
  
  console.log(calculateTotalPrice(products, 'apple'));

  