// 1. циклом вывести в консоль каждую книгу каждого person'a
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
//     for(let j = 0; j < persons[i].books.length; j++) {
//        console.log(persons[i].books[j]);
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
//     if(persons[i].age >= 18 && persons[i].age <= 20) {
//       persons[i].books.push("First New book");
//     }
//     if(persons[i].age > 20) {
//       persons[i].books.push("First New book");
//       persons[i].books.push("Second New book");
//     }
//     console.log(persons[i].books);
//   }
// }

// secondTask(persons);
// // 3. переменная availableItems должна содержать доступные пользователю элементы в зависимости от isLoggedIn, 
// // если isLoggedIn = true, то все, если false, то только те, которые не приватные

// const isLoggedIn = false 

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
// const availableItems = [];
// const thirdTask = (navigationItems, isLoggedIn, availableItems) => {
//   if(isLoggedIn) {
//     availableItems = navigationItems;
//   }
//   else {
//     for(let i = 0; i < navigationItems.length; i++) {
//       if (!navigationItems[i].isPrivate) {
//         availableItems.push(navigationItems[i]);
//       }
//     }
//   }
//   availableItems.forEach(element => {
//     console.log(element);
//   });
// }
// thirdTask(navigationItems, isLoggedIn, availableItems);



// // 4. у нас есть функция PriorityQueue которая имеет следующие методы:
// // enqueue(item, isPriority) - добавляет элемент в начало, если он с приоритетом, иначе в конец
// // dequeue() - удаляет первый элемент из очереди, если очередь пустая то выводит в консоль "No items in queue"
// // size() - возвращает количество элементов в очереди
// // display() - выводит очередь в консоль

// // но кто-то пришел и наговнокодил, нужно исправлять

// const PriorityQueue = () => {
//     const queue = Array.from([]);
  
//     const enqueue = (item, isPriority = undefined) => {
//       if (isPriority) {
//         queue.unshift(item);
//       } 
//       else {
//         queue.push(item);
//       }
//       return queue;
//     }
  
//     const dequeub = () =>  {
//       if (queue.length === 0) {
//         console.log("No items in queue");
//       }
//       else {
//         queue.shift();
//       }
//       return queue;
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
// // console.log(pq.size());
// // console.log(pq.enqueue("jopa", true));
// // console.log(pq.enqueue("jopa1", true));
// // console.log(pq.enqueue("jopa2", false));
// // console.log(pq.dequeub());
// // console.log(pq.size());
// // pq.display();

  




// // 4. реализовать функцию createBankAccount, которая принимает стартовый баланс и возвращает объект с методами deposit, withdraw, checkBalance (homework 3)
// // добавить метод addExpense, который будет принимать объект expense у которого будут поля amount:number, и добавлять его в массив expenses
// // добавить метод getExpenses, который будет возвращать все траты 
// // добавить метод removeLastExpense, который будет удалять последнюю трату, если трат нет, то выводить в консоль "No expenses"
// // добавить метод removeFirstExpense, который будет удалять первую трату, если трат нет, то выводить в консоль "No expenses"
// // добавить метод clearExpenses, который будет очищать массив expenses, если трат нет, то выводить в консоль "No expenses"
// // метод checkBalance должен возвращать баланс с учетом всех трат

// const createBankAccount = (balance) => {
//   const exspenses = Array.from([]);
//   const addExpense = (expense) => {
//     exspenses.push(expense.amount);
//     balance -= expense.amount;
//   }
//   const getExpenses = () => {
//     return exspenses;
//   }
//   const removeLastExpense = () => {
//     if(exspenses.length === 0) {
//       console.log("No expenses");
//     }
//     else {
//       let amount = exspenses.pop();
//       balance += amount;
//     }
//     return exspenses;
//   }
//   const removeFirstExpense = () => {
//     if(exspenses.length === 0) {
//       console.log("No expenses");
//     }
//     else {
//       let amount = exspenses.shift();
//       balance += amount;
//     }
//     return exspenses;
//   }
//   const clearExpenses = () => {
//     if(exspenses.length === 0) {
//       console.log("No expenses");
//     }
//     else {
//       for (let i = 0; i <= exspenses.length; i++) {
//         let amount = exspenses.pop();
//         balance += amount;
//       }
//     }
//     return exspenses;
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
    return {
        value: heroes,
        getHeroesByAttackType: (attackType) => {
            for(let i = 0; i < heroes.length; i++) {
                if(heroes[i].attackType !== attackType) {
                    heroes.splice(i,1);
                    i--;
                }
            }
            // heroes = heroes.filter(hero => hero.attackType === attackType);
            return heroesHelper(heroes);
        },
        getHeroesByMainAttribute: (mainAttribute) => {
            for(let i = 0; i < heroes.length; i++) {
                if(heroes[i].mainAttribute !== mainAttribute) {
                    heroes.splice(i,1);
                    i--;
                }
            }
            // heroes = heroes.filter(hero => hero.mainAttribute === mainAttribute);
            return heroesHelper(heroes);
        }
    }
}

const heroes = heroesHelper(heroesTest);
console.log(heroes.getHeroesByMainAttribute("agility").getHeroesByAttackType("ranged").value);
// result: [
//     { name: 'Sniper', mainAttribute: 'agility', attackType: 'ranged' },
//     { name: 'SF', mainAttribute: 'agility', attackType: 'ranged' },
//  ]