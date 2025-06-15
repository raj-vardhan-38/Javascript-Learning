const name = "Raj"
const repoCount = 10

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Raj-Vardhan`); // key value pairs

console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('V'));

const newString = gameName.substring(0, 6);
console.log(newString);

const anotherString = gameName.slice(-10, 6);
console.log(anotherString);

const newStrOne = "   Raj Vardhan   "
console.log(newStrOne);
console.log(newStrOne.trim());

const url = "https://raj.com/home%20ai"
console.log(url.replace('%20','-'))

console.log(url.includes('raj'))

console.log(gameName.split('-'))