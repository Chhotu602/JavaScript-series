//Immediately Invoked Functions Expressions

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

((name)=>{
    //simple iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ("eklavya")