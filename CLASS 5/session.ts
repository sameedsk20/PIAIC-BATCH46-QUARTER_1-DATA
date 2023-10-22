
//                                                  WHILE LOOP

// 1st EXAMPLE OF WHILE
// let a = 0 ;

// while(a < 10){
//     console.log((`The value of a = ${a}`));
//     a++
// }


// 2nd EXAMPLE OF WHILE
// let someArray = ["Mike" , "Antal" , "Mark" , "Emir" , "Louizza" , "Jackay"];
// let notFound = true;

// while(notFound && someArray.length > 0){
//     if(someArray[0] === "Emir"){
//         console.log("Found her !");
//         notFound = false;
//         console.log(someArray);
//     }
//     else{
//         someArray.shift();
//     }
// }

// FIBONACCI SERIES
// let fibonacciArray = [];
// let n1=0 , n2=1, temp ;

// while(fibonacciArray.length < 25){
//     fibonacciArray.push(n1);
//     temp = n1 + n2 ;
//     n1 = n2 ;
//     n2 = temp ;
// }
// console.log(fibonacciArray);

//                                                  DO-WHILE LOOPS

let numbers = [1 , 2 , 3 , 4 , 5];
let i = 0;
do{
    console.log(numbers[i]);
    i++;
} while(i<numbers.length);

