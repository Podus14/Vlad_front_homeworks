// реализовать функцию createMultiplier, которая принимает один аргумент и возвращает функцию, которая умножает его на число
const createMultiplier = (number) => {
    return mulNumber => number * mulNumber;
};
const multiplyBy3 = createMultiplier(3);
console.log("task 1: ");
console.log(multiplyBy3(5)); // 15

// реализовать функцию createBankAccount, которая принимает стартовый баланс и возвращает объект с методами deposit, withdraw, checkBalance
// первый вариант реализации функции createBankAccount
console.log("task 2: ");
const createBankAccount = (balance) => {
    return {
        deposit: (amount) => (balance += amount),
        withdraw: (amount) => (balance -= amount),
        checkBalance: () => balance
    }
};
// второй вариант реализации функции createBankAccount
// const createBankAccount = (balance) => {
//     return {
//         deposit(amount) {
//             return balance += amount;
//         },
//         withdraw(amount) {
//             return balance -= amount;
//         },
//         checkBalance() {
//             return balance;
//         }
//     }
// };
const account = createBankAccount(100);
account.deposit(50);
console.log(account.checkBalance()); // 150
account.withdraw(30);
console.log(account.checkBalance()); // 120

// реализовать функцию makePerson, которая будет принимать объект person имеющий такие поля: firstName, lastName, age, gender и
// также будет принимать два колбека, один будет использовать для получения fullName, второй будет использовать для получения значения canDrive
// колбек для получения fullName релизовать по собственному желанию, колбек для получения canDrive должен возвращать true если age больше либо равен 18
// и gender равен male
// функция makePerson должна возвращать объект с такими полями: fullName, age, gender, canDrive
// аргумент колбек функции для fullName должен иметь дефолтное значение - функцию, любую
const getFullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}
const canDrive = (age, gender) => {
    if (age >= 18 && gender === "male") return true;
    return false;
}

const person = {
    firstName:  "Alex",
    lastName: "Podus",
    age: 22,
    gender: "male"
}

const makePerson = (person, canDriveCb, getFullNameCb = (firstName, lastName) => (firstName + " " + lastName).toUpperCase()) => {
    const fullName = getFullNameCb(person.firstName, person.lastName);
    const canDrive = canDriveCb(person.age, person.gender);
    return {
        fullName,
        age: person.age,
        gender: person.gender,
        canDrive
    }
};

const personAlex = makePerson(person, canDrive, getFullName);
console.log("task 3: ");
console.log(personAlex.fullName);
console.log(personAlex.age);
console.log(personAlex.gender);
console.log(personAlex.canDrive);
// реализовать рекурсивную функцию countup, которая принимает аргумент initValue, и finishValue, и выводит в консоль числа от initValue до finishValue
const countup = (initValue, finishValue) => {
    if (initValue > finishValue) return;
    console.log(initValue)
    countup(initValue + 1, finishValue);
}
console.log("task 4: ");
countup(1, 20);
