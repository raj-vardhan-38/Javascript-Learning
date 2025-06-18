// Immediately  Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()(); // yaha ; lagana compulsory hai 

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Raj");

