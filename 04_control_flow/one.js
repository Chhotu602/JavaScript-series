// if statement
const temperature = 41
const loggedInFromEmail = true
const loggedInFromGoogle = false
// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}