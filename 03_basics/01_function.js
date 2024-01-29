// function sayMyName(){
// console.log("E");
// console.log("k");
// console.log("l");
// console.log("a");
// console.log("v");
// console.log("y");
// console.log("a");
// }
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}


const result = addTwoNumbers(3,5)
// console.log(result)

function loginUserMessage(username ="sam"){
    if(!username){
        // console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Eklavya"))


function calCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calCartPrice(200,400,500,2000));

const user = {
    username: "Eklavya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]

}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))