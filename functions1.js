// Q #17: Calculate the sum of digits of a positive integer number
function sumIntegers(number) {
        let string = number.toString();
        let array = []
        
        let sum = 0;
        for (let char of string) {
                
                var number = parseInt(char);
                sum += number;               
        }
        return sum;
}

console.log(sumIntegers(123456789));


// #16: Create a function that will return a Boolean specifying if a number is prime
// function isPrime(n) {

//         if (n<2) {
//         return false; 
//         }
//         if (n==2) {
//         return true; 
//         }
         
//         for (let i = 2; i < n; i++) {
//                 if (n%i === 0) {
//                         return false
//                 }
                               
//         }
//         return true 
// }

// console.log(isPrime(31));;


// Q#14: Print the first 10 Fibonacci numbers without recursion
// let first = 0;
// let second = 1;
// let next;
// let arr = []

// for (let i = 2; i < 10; i++) {
//         let next = first + second;
//         // console.log(next);
//         arr.push(next);
//         first = second;
//          second  =  next;        
// }
// console.log(arr);


// #Q13: Find the maximum number in an array of numbers
// function maxNumber(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element>max) {
//             max = element;
//         }        
//     }
//     return max
// }


// const getMax = maxNumber([5, 10, -3, 12, -9, 5, 90, 0, 1]);
// console.log(getMax);


// #Q13: Find the maximum number in an array of numbers
// const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i];
//         }
    
// }
// console.log(max);


// Question#12a: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function positiveArray(array) {
//     const positiveArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element>0) {
//             positiveArr.push(element);
//         }
        
//     }
//     return positiveArr;
// }
// const getPositive = positiveArray([-5, 10, -3, 12, -9, 5, 90, 0, 1]);
// console.log(getPositive);


// question#12: Filter only the positive numbers from an array
// const array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let positiveNum = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         positiveNum.push(array[i]);
      
//     }
     
// }
// console.log(positiveNum)


// Coding challenge #11a: Calculate the average of the numbers in an array of numbers
// function averageArray(array) {
//     let sum = 0;
//  let n = array.length;
//     for (let i = 0; i < n; i++) {
//          sum += array[i];        
//     }
//     return sum/n;
// }

// const average = averageArray([1,2,3,4,5,6,7,8,9,10])
// console.log(average)


// Coding challenge #11: Calculate the average of the numbers in an array of numbers
// const array = [1,2,3,4,5,6,7,8,9,10];
// let element = 0;
// for (let i = 0; i < array.length; i++) {
//      element += array[i];
//      }
// const average = element/array.length;
// console.log('The average of first 10 integers is :', average)

// Coding challenge #10a: Calculate the sum of numbers in an array of numbers with function
// function addArray(array) {
//     let sum = 0;
//      for (let i = 0; i < array.length; i++) {
//          sum += array[i];        
//      }
//      return sum;
// }
// const sum1 = addArray([1,2,3,4,5,6,7,8,9,10]);
// console.log(sum1)


// Coding challenge #10: Calculate the sum of numbers in an array of numbers
// const array = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//      sum += array[i];
//     }
//     console.log(sum);


// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
// function fahrenheitToCelsius(n) {
//     return (n - 32) * 5/9
// }
// console.log(fahrenheitToCelsius(68));



// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
// function celsiusToFahrenheit(n) {
//     return n * 1.8 + 32;    
// }

// console.log(celsiusToFahrenheit(20))