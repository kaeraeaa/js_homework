// Дз 11
// Завдання 1

const bankAccount = {
    ownerName: "Lera",
    accountNumber: "1",
    balance: 50,
    deposit(amount) {
      this.balance += amount;
      console.log(`Рахунок поповнено на ${amount}.баланс: ${this.balance}.`);
    },
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Гроші знято з рахунку: ${amount}.баланс: ${this.balance}.`);
      } else {
        console.log("На рахунку недостатньо коштів");
      }
    }
  };
  
  console.log(bankAccount);
  bankAccount.deposit(30); 
  bankAccount.withdraw(50); 
  bankAccount.withdraw(10); 
  
// Завдання 2

const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    belowZero() {
      return this.temperature < 0;
    }
  };
  
  const temperature = parseFloat(prompt('Введіть температуру'));
  
  weather.temperature = temperature;
  
  if (weather.belowZero()) {
    console.log('Температура нижче 0');
  } else {
    console.log('Температура вище або рівна 0');
  }
  
  // Завдання 3

  const user = {
    name: "Lera",
    email: "lera@gmail.com",
    password: "12345",
    login(email, password) {
      if (email === this.email && password === this.password) {
        console.log("Логін і пароль правильні");
      } else {
        console.log("Логін або пароль неправильні");
      }
    }
  };
  
  user.login("lera@gmail.com", "12345");
  user.login("lera@gmail.com", "45637");
  

  // Завдання 3

  const movie = {
    title: "movie",
    director: "John",
    year: 2020,
    rating: 9,
    highRating() {
      return this.rating > 8;
    }
  };
  
  console.log("фільм:", movie.title);
  console.log("Режисер:", movie.director);
  console.log("Рік:", movie.year);
  console.log("Рейтинг:", movie.rating);
  
  console.log(movie.highRating());
  