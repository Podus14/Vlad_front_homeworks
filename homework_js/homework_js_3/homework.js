// // 1. циклом вывести в консоль каждую книгу каждого person'a
// const persons = [
//     {
//     name: "Vlad",
//     age: 23,
//     books: ["Harry Potter", "Lord of the Rings", "The Hobbit"],
//     }, 
//     {
//     name: "Ivan",
//     age: 25,
//     books: ["The Master and Margarita"],
//     },
//     {
//     name: "Olga",
//     age: 22,
//     books: ["The Catcher in the Rye", "To Kill a Mockingbird"],
//     },
// ]
// const firstTask = (persons) => {
//   for(let i = 0; i < persons.length; i++) {
//     const personBooks = person[i].books;
//     for(let j = 0; j < personBooks.length; j++) {
//        console.log(personBooks[j]);
//     } 
//   }
// }
// firstTask(persons);

// // 2. если у person age > 20, то добавить в массив книг еще 2 книги, если 18-20, то 1, если < 18, то 0

// const persons = [
// {
//   name: "Vlad",
//   age: 23,
//   books: ["Harry Potter", "Lord of the Rings", "The Hobbit"],
// }, 
// {
//   name: "Ivan",
//   age: 25,
//   books: ["War and Peace", "The Master and Margarita"],
// },
// {
//   name: "Olga",
//   age: 20,
//   books: ["The Catcher in the Rye", "To Kill a Mockingbird"],
// },
// {
//   name: "Anton",
//   age: 14,
//   books: [],
// },
// ]

// const secondTask = (persons) => {
//   for(let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     const personBooks = person[i].books;
//     if (person.age >= 18 && person.age <= 20) {
//       personBooks.push("First New book");
//     }
//     if (person.age > 20) {
//       personBooks.push("First New book");
//       personBooks.push("Second New book");
//     }
//     console.log(personBooks);
//   }
// }

// secondTask(persons);
// // 3. переменная availableItems должна содержать доступные пользователю элементы в зависимости от isLoggedIn, 
// // если isLoggedIn = true, то все, если false, то только те, которые не приватные

// const isLoggedIn = true 

// const navigationItems = [
//     {
//         name: "Home",
//         isPrivate: false
//     }, 
//     {
//         name: "Profile",
//         isPrivate: true
//     },
//     {
//         name: "Settings",
//         isPrivate: true
//     },
// ]

// const thirdTask = (navigationItems) => {
//   const availableItems = [];
//   for(let i = 0; i < navigationItems.length; i++) {
//     const navigationItem = navigationItems[i]
//     if (!navigationItem.isPrivate) {
//     availableItems.push(navigationItem);
//     }
//   }
//   return availableItems;
// }
// // const availableItems = isLoggedIn ? navigationItems : navigationItems.filter(item => !item.isPrivate);

// availableItems = isLoggedIn ? navigationItems : thirdTask(navigationItems);

// // 4. у нас есть функция PriorityQueue которая имеет следующие методы:
// // enqueue(item, isPriority) - добавляет элемент в начало, если он с приоритетом, иначе в конец
// // dequeue() - удаляет первый элемент из очереди, если очередь пустая то выводит в консоль "No items in queue"
// // size() - возвращает количество элементов в очереди
// // display() - выводит очередь в консоль

// // но кто-то пришел и наговнокодил, нужно исправлять

// const PriorityQueue = () => {
//     const queue = [];
  
//     const enqueue = (item, isPriority) => {
//         if (isPriority) {
//             queue.unshift(item);
//             return;
//         } 
//         queue.push(item);
//     }
//     const dequeub = () =>  {
//       if (queue.length === 0) {
//         return console.log("No items in queue");
//       }
//       queue.shift();
//     }

//     const size = () => {
//         return queue.length;
//     }
  
//     const display = () => {
//       console.log("Текущая очередь:" + queue);
//     }

//     return {enqueue, dequeub, size, display};
//   }
  
// const pq = PriorityQueue();  
// console.log(pq.size());
// console.log(pq.enqueue("jopa", true));
// console.log(pq.enqueue("jopa1", true));
// console.log(pq.enqueue("jopa2", false));
// console.log(pq.dequeub());
// console.log(pq.size());
// pq.display();

  




// // 4. реализовать функцию createBankAccount, которая принимает стартовый баланс и возвращает объект с методами deposit, withdraw, checkBalance (homework 3)
// // добавить метод addExpense, который будет принимать объект expense у которого будут поля amount:number, и добавлять его в массив expenses
// // добавить метод getExpenses, который будет возвращать все траты 
// // добавить метод removeLastExpense, который будет удалять последнюю трату, если трат нет, то выводить в консоль "No expenses"
// // добавить метод removeFirstExpense, который будет удалять первую трату, если трат нет, то выводить в консоль "No expenses"
// // добавить метод clearExpenses, который будет очищать массив expenses, если трат нет, то выводить в консоль "No expenses"
// // метод checkBalance должен возвращать баланс с учетом всех трат

// const createBankAccount = (balance) => {
//   const expenses = [];
//   const addExpense = (expense) => {
//     expenses.push(expense.amount);
//     balance -= expense.amount;
//   }
//   const getExpenses = () => {
//     return expenses;
//   }
//   const removeLastExpense = () => {
//     if(expenses.length === 0) {
//       console.log("No expenses");
//       return;
//     }
//     const amount = expenses.pop();
//     balance += amount;
//   }
//   const removeFirstExpense = () => {
//     if(expenses.length === 0) {
//       console.log("No expenses");
//       return;
//     }
//     const amount = expenses.shift();
//     balance += amount;
//   }
//   const clearExpenses = () => {
//     if(expenses.length === 0) {
//       console.log("No expenses");
//       return;
//     }
//     for (let i = 0; i <= expenses.length; i++) {
//       const amount = expenses.pop();
//       balance += amount;
//     }
//   }
//   return {
//     addExpense,
//     getExpenses,
//     removeLastExpense,
//     removeFirstExpense,
//     clearExpenses,
//     deposit: (amount) => (balance += amount),
//     withdraw: (amount) => (balance -= amount),
//     checkBalance: () => (balance)
//   }
// }

// const bankAccount = createBankAccount(1000);
// expense = {
//   amount: 300
// }
// // bankAccount.addExpense(expense);
// // bankAccount.addExpense(expense);
// // console.log(bankAccount.checkBalance());
// // console.log(bankAccount.getExpenses());
// // console.log(bankAccount.removeFirstExpense());
// // console.log(bankAccount.removeLastExpense());
// // console.log(bankAccount.removeFirstExpense());
// // console.log(bankAccount.clearExpenses());
// // console.log(bankAccount.checkBalance());

// 5. * задание со звездочкой, реализовать функцию heroesHelper, которая будет принимать массив героев и возвращать объект с методами getHeroesByAttackType, getHeroesByMainAttribute
// метод getHeroesByAttackType должен возвращать массив героев по типу атаки, метод getHeroesByMainAttribute должен возвращать массив героев по главному атрибуту
// сделать так, чтобы методы можно было вызывать по цепочке
const heroesTest = [
    {
    name: "SF", 
    mainAttribute: "agility",
    attackType: "ranged",
    },
    {
     name: 'Pudge',
     mainAttribute: 'strength',
     attackType: 'melee',
    },
    {
        name: 'Sniper',
        mainAttribute: 'agility',
        attackType: 'ranged',
    },
    {
        name: 'Necrophos',
        mainAttribute: 'intelligence',
        attackType: 'ranged',
    },
    {
        name: 'Bounty Hunter',
        mainAttribute: 'agility',
        attackType: 'melee',    
    },
]

const heroesHelper = (heroes) => {
    const filteredHeroes = heroes;
    return {
        value: filteredHeroes,
        getHeroesByAttackType: (attackType) => {
            for(let i = 0; i < filteredHeroes.length; i++) {
                if(filteredHeroes[i].attackType !== attackType) {
                    filteredHeroes.splice(i,1);
                    i--;
                }
            }
            // filteredHeroes = filteredHeroes.filter(hero => hero.attackType === attackType);
            return heroesHelper(filteredHeroes);
        },
        // getHeroesByAttackType: (attackType) => {
        //     const result = [];
        //     for (let i = 0; i < heroes.length; i++) {
        //     const hero = heroes[i]
        //     if (hero.attackType === attackType) {
        //     result.push(hero);
        //     }
        //     }
        //     return heroesHelper(result);
        //     },
        getHeroesByMainAttribute: (mainAttribute) => {
            for(let i = 0; i < filteredHeroes.length; i++) {
                if(filteredHeroes[i].mainAttribute !== mainAttribute) {
                    filteredHeroes.splice(i,1);
                    i--;
                }
            }
            // filteredHeroes = filteredHeroes.filter(hero => hero.mainAttribute === mainAttribute);
            return heroesHelper(filteredHeroes);
        }
    }
}

const heroes = heroesHelper(heroesTest);
console.log(heroes.getHeroesByMainAttribute("agility").getHeroesByAttackType("ranged").value);
// result: [
//     { name: 'Sniper', mainAttribute: 'agility', attackType: 'ranged' },
//     { name: 'SF', mainAttribute: 'agility', attackType: 'ranged' },
//  ]