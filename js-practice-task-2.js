// Task -1:
// Find the lowest number in the array below.
//  const heights2 = [167, 190, 120, 165, 137];

// function lowestNumber(array){
//     let FirstNumber=array[0];
// for (const number of array) {

// if(number<FirstNumber){
//     FirstNumber=number
// }

// }

// return FirstNumber

// }

// console.log(lowestNumber(heights2))

// Task -2:
// Find the friend with the smallest name.
//  const heights2 = ['rahim', 'robin', 'rafi', 'o','rohims', 'rashed'];

// function smallestName(array){
//     let name=array[0];
//     for (const demoName of array) {
//         if(demoName.length<name.length ){
//             name=demoName;
//         }
//     }

//     return name;
// }
// console.log(smallestName(heights2));

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. 
//Your task is to write a JavaScript function named 
//findAveragePhonePrice that takes this array as input and returns the average price of phone.
// Input
//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 60 },
//         { model: "PhoneB", brand: "Samsung", price: 40 },
//         // { model: "PhoneC", brand: "Oppo", price: 26000 },
//         // { model: "PhoneD", brand: "Nokia", price: 35000 },
//         // { model: "PhoneE", brand: "Iphone", price: 105000 },
//         // { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];

//     function findAveragePhonePrice(arr){
//         sum=0;
//         for (const phone of arr) {  
//             sum=sum+phone.price;
//         }
//         const avg=sum/arr.length;
//         return avg;
//     }


// console.log(findAveragePhonePrice(phones))

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
//     function companyMonthlyExpanse(arr){
//         let sumOfExpanse=0;
//         for (const employee of arr) {
//             sumOfExpanse=sumOfExpanse+(employee.starting+(employee.experience*employee.increment));
//         }
//         return sumOfExpanse;
//     }
//     console.log(companyMonthlyExpanse(employees));