// const county=`hel       lo`
// const division='Dhaka'
// const district='Dhaka'
// console.log(county[11])
// county[11]="p"
// console.log(county)





// let yourName="ashik"
// let myName=" Ashik   "

// if(yourName.toLowerCase().trim()==myName.toLowerCase().trim()){
//     console.log("OMG you got my name ")
// }
// else{
//     console.log("so yours name different from mine")
// }


// let birdName="Love Bird"

// const part= birdName.slice(2,4);
// console.log(part);
// const sentence="Ashik i am a good and hardworking guy";
 

// // const split = sentence.split(" ");
// // console.log(split);
// // console.log(split.reverse().join(" "));
// // console.log(sentence);

// let reversed='';
// let count=0;
// for (const word of sentence) {
//     if(word=="a"||word=="A"){
//         count++
//     }
   
// }
// console.log("sentece contains "+count+" a in it");


// const sentence ="ashikisthebest ";
// const vowels ="aeiou";
//solve 1
// if(sentence.includes('a') && sentence.includes('e') && sentence.includes('i') && sentence.includes('o') && sentence.includes('u')){
//     console.log("all the vowel is in the sentence")
// }

// else{
//     console.log()
// }

//solve 2



// sentence.includes('a')&& sentence.includes('e') && sentence.includes('i') && sentence.includes('o') && sentence.includes('u') ? console.log("All in One") : console.log("Not Here")

//solve 3


// let count=0;
// for (const vowel of vowels) {
//     if(sentence.includes(vowel)){
//         count++
//     }
// }
// count==5 ? console.log("All in One"):console.log("Out of it");



// const replace="xxxxXXXXX this is a experimental teXt";
// console.log(replace.split("x").join("y").split("X").join("Y"));


// const text='how are you doing today ashik mia Nice to see you again';
// let splitedArrey =text.split(" ")
// let finalText=''
// for (const element of splitedArrey) {
//     let charAtFirst= element.charAt(0).toUpperCase();//taking the first letter of the word and make it uppercase ;
//     let tempArr=element.split("");
//     tempArr.shift();
//     tempArr.unshift(charAtFirst)
//     finalText= finalText+" "+ tempArr.join("");
// }
// console.log(finalText)



