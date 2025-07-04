let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLogedIn = 1

let booleanIsLogedIn = Boolean(isLogedIn)

console.log(booleanIsLogedIn)

// 1 => true; 0 => false
// "" => false
// "raj" => true

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

// *********** Operations ******************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3); // => power

let str1 = "Hello"
let str2 = " Raj"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);