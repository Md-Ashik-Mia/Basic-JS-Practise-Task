
//1
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

/*
var fruits =['mango', 'jackfruits', 'pineapple', 'apple', 'banana'];
console.log(fruits[3]);
fruits[2]="jambura";
console.log(fruits);
*/

/* 
2
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
// var destination =["siliguri", "darjiling","Sajek"];
// console.log(destination)
// destination.push("bandarban");
// console.log(destination)
// destination.unshift("cox's bazar");
// destination.unshift("sundarban");
// console.log(destination)
// destination.pop();
// console.log(destination)

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

// var books =["math", "poet","story","drama","javascript","science","social"]
// books.includes("romance")? console.log("includes javascript"):console.log("Not in book list")



// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
// var destination =["siliguri", "darjiling","Sajek"];
// var destination="hello destination"

// Array.isArray(destination)?console.log("this is an array"):console.log("this is not an arrey");



// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// var batter=["Liton Das","Nazmul Shanto","Rony Talukder","Shakib Al Hasan","Mushfiqur Rahim","Mahmudullah Riyad"]
// var baller=["Mehedi Hasan","Taskin Ahmed","Mostafizur Rahman"]

// team=batter.concat(baller)
// console.log(team);


/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
// for(let i=1; i<=200;i++){
//     if(i==100){
//         console.log(i);
      
//     }
//     console.log(i);
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let i=1;
// let sum=0;
// while(true){
//     console.log("i = "+i);
//     sum=sum+i;
//     console.log("sum = "+sum);
//     if (sum >= 100) {
//         break;
//     }
//     i++
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// let temp=0;

// for(let i=1;i<=100;i++){

//     temp=i*i
//     for(let x=1; x<=100;x++){
//         if(x==temp){
//             break;
//         }
//         console.log(i);
//     }
// }


/*
// display odd number from 55 to 85 and skip the numbers divisible by 5.
// */
// let temp=0;
// for(let i=55;i<=85;i+=2){
//     if(i%5==0){
//         continue
//     }
   
//     temp+=i;
// console.log(i);
// console.log(temp);
// }


// Generate a multiplication table for the number 9
// console.log("Multiplication table for 9:");

// for (let i = 1; i <= 10; i++) {
//     console.log(`9 * ${i} = ${9 * i}`);
// }
