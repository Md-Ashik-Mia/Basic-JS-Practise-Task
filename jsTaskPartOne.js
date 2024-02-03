

// function toFarenheit (c) {
// let f = c * (9/5) + 32;
// return f

// }

// let getTemp=toFarenheit(0);
// console.log(getTemp);

// function countInArrey(arr,num){
//     let count=0;
//     for (const item of arr) {
//         if(item===num){
//             count++
//         }
//     }
//     return count
// }

// const numbers = [5,6,11,12,98, 5]

// console.log("find:", 6);
// console.log("Output:", countInArrey(numbers,6));


// function countVowel(strForCount){
//     let vowelCount=0;
//     let vowels='AEIOUaeiou'
//     for (const letter of strForCount) {
//         for (const vowel of vowels) {
//             if(vowel===letter){
//                 vowelCount++;
//             }
//         }
//     }
// return vowelCount;
// }
// console.log("Output", countVowel("I am a good boy"));


// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


// function getLongWordOfString(sentence){
//     splitedArr= sentence.split(" ");
//     let index =0;
//     let prevLength=0;
//     let bigWordIndex=0;
//     for (const word of splitedArr) {
//         if(word.length > prevLength){
//             prevLength=word.length
//             bigWordIndex=index;
//         }


//      index++

//     }

// return splitedArr[bigWordIndex];
// }

// console.log("Big Word", getLongWordOfString("I am learning Programming to become a programmer"));


console.log(Math.floor(Math.random()*10+10))