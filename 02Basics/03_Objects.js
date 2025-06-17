// Singleton --- created by constructor  // Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Raj vardhan",
    "Full name": "Raj Vardhan Singh",  // ab dot se access nahi kar sakte hai 
    [mySym]: "mykey1", // for symbol [] me likhna hai 
    age: 20,
    location: "Ahmedabad",
    email: "rajvardhan@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // behind the screen ye string ke tarah rakha jata hai
console.log(JsUser["Full name"]);

console.log(JsUser[mySym]);

JsUser.email = "Raj@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "Raj@outlook.com" // not change 

console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



