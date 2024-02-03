// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) =>{
//     // console.log(item);
// })

// // console.log(values);

// const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num>4)
// const newNums=myNums.filter( (num)=> {
//     return num>4
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title:'Book one',
        genre:'Fiction',
        publish:'1997',
        edition: 2012
    },
    {
        title:'Book two',
        genre:'Non Fiction',
        publish:'1987',
        edition: 2015
    },
    {
        title:'Book three',
        genre:'History',
        publish:'1999',
        edition: 2019
    },
    {
        title:'Book four',
        genre:'English',
        publish:'1990',
        edition: 2018
    }

];

const userBooks = books.filter( (bk)=> bk.genre === 'History')
console.log(userBooks);