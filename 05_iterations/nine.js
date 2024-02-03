const myNums =[1,2,3]


// const myTotal = myNums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval;
// }, 0)

// const myTotal = myNums.reduce( (acc,curval)=>acc+curval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 1599
    },
    {
        itemName: "c++ course",
        price: 2599
    },
    {
        itemName: "c course",
        price: 2989
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+ item.price,0)

console.log(priceToPay);
