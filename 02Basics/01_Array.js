// Array

const myArr =[0, 1, 2, 3 ,4 ,5]  // resizable in js
const myHeroes = ["Raj", "Vardhan", "Anw"]

const myArr2 = new Array(2, 4, 6, 8);

console.log(myArr[0]);
console.log(myHeroes[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)  // add in first
myArr.shift()  // remove

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()  // covert it in string
console.log(myArr);
console.log(newArr);

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // Original array ko manipulate karta hai portion out hojata hai original array se 
console.log("c", myArr);
console.log(myn2);


