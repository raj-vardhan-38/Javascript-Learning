// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 12) // months 0 se start hota hai in js 
// let myCreatedDate = new Date(2024, 0, 12, 5, 3)
// let myCreatedDate = new Date("2025-01-14") // YYYY-MM-DD
let myCreatedDate = new Date("01-14-2025")  // DD-MM-YYYY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);  // Millisecond 
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay() + 1);

// `${newDate.getDay() + 0} and the time is`

newDate.toLocaleString('default',{weekday: "long"})