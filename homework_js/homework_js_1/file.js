// first task
function concat(a, b) {
    return a+b
}
console.log("task 1:" + concat("jopa", "hui"));

// second task
console.log("task 2:")
function counter(initNumber) {
    for(let i = initNumber; i >= 0; i--) {
        console.log(i);
    }
}
counter(8);

// third task
function sum(numbersArr) {
    let sum = 0;
    for(let i = 0; numbersArr.length > i; i++) {
        sum += numbersArr[i];
    };
    return sum;
}
console.log("third task: " + sum([1,2,3,4,5])); 

// fourth task
console.log("fourth task: ");
function checkCanDriveCar(objArr) {
    for(let i = 0; objArr.length > i; i++){
        if(objArr[i].age >= 18 && objArr[i].hasLicence){
            console.log("For object " + i + " result is true");
        }
        else {
            console.log("For object " + i + " result is false");
        }
    }
}
const people = [
    { age: 23, hasLicence: true },
  { age: 18, hasLicence: false },
  { age: 20, hasLicence: true }
]
checkCanDriveCar(people);