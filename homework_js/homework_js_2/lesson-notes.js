// 1. функции могут принимать объект аргументом

const makePerson = (person) => {
  return {
    fullName: person.firstName + " " + person.lastName,
    age: person.age,
    gender: person.gender,
  };
};

const person = makePerson({
  firstName: "Vlad",
  lastName: "Prus",
  age: 23,
  gender: "male",
});

// 2. функции могут принимать другие функции в качестве аргументов, такие функции называються колбеками

const getFullName = (firstName, lastName) => {
  return (firstName + " " + lastName).toUpperCase();
};

const makePersonWithCallback = (person, fn) => {
  const name = fn(person.firstName, person.lastName);

  return {
    fullName: name,
    age: person.age,
    gender: person.gender,
  };
};

const personA = makePersonWithCallback(
  {
    lastName: "Прус",
    firstName: "Влад",
    age: 30,
    gender: "male",
  },
  //   getFullName
  (firstName, lastName) => (firstName + " " + lastName).toUpperCase()
);

// 3. функции могут возвращать другие функции, такие функции часто называют функциями высшего порядка, иногда называют фабриками

function makeCounter(x) {
  return function (y) {
    return x + y;
  };
}

const counter = makeCounter(2);

// 4. функции могут содержать в себе состояние, по сути такая функция является классом

const counterWithState = (initValue) => {
  function changeBy(val) {
    initValue += val;
  }

  return {
    increment: () => changeBy(1),

    decrement() {
      changeBy(-1);
    },

    value: function value() {
      return initValue;
    },
  };
};

const newCounter = counterWithState(0);
newCounter.increment();
newCounter.increment();

class Counter {
  constructor(initValue) {
    this.privateCounter = initValue;
  }

  changeBy(val) {
    this.privateCounter += val;
  }

  increment() {
    this.changeBy(1);
  }

  decrement() {
    this.changeBy(-1);
  }

  value() {
    return this.privateCounter;
  }
}

const counterClass = new Counter(0);
newCounter.increment();
newCounter.increment();

// 5. функции могут вызывать сами себя, такие функции называют рекурсиями

function countdown(number) {
  if (number === 0) {
    console.log("finish!");
    return;
  }

  console.log(number);

  countdown(number - 1);
}

countdown(5);

// 6. есть ещё такое, называется string literal

function wtfIsThis(string) {
  return string[0].toUpperCase();
}
console.log(wtfIsThis`hello`);

// 7. функции могут иметь дефолтные значения аргументов

function mul(a, b = 1, c = 2) {
  return a * b;
}
