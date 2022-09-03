// // Q1:
// // Write a function named createList that takes in an array of the current store intentory.

// // The inventory is formatted like this:
// // [
// //   { name: 'apples', available: true },
// //   { name: 'pears', available: true },
// //   { name: 'oranges', available: false },
// //   { name: 'bananas', available: true },
// //   { name: 'blueberries', available: false }
// // ]

// // This function should use forEach to populate your grocery list based on the store's inventory.
// //  If the item is available, add it to your list. Return the final list.

// class Store {
//   constructor(name, available) {
//     this.name = name;
//     this.available = available;
//   }
// }

// let storeIntentory = [
//   new Store("apples", true),
//   new Store("pears", true),
//   new Store("oranges", false),
//   new Store("bananas", true),
//   new Store("blueberries", false),
// ];

// function createList(storeIntentory) {
//   const list = [];
//   storeIntentory.forEach((fruit) => {
//     if (fruit.available) list.push(fruit.name);
//   });
//   return list;
// }


//  console.log("final list ===> "+createList(storeIntentory))



// /**************************************************************************************************************** */

// // Q2:map
// // Write a function that, given an array of numbers as input, uses map to return a new array where each element
// //  is either the string "even" or the string "odd", based on each value.
// // If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// // For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].


// function evenOdd(arrayOfNumbers){["odd","even",""]

// const array = arrayOfNumbers.map(value =>{

// switch(value%2){
// case 1: return "odd";
// case 0: return "even"; 
// default:return "N/A"
// }
// })

// return array;

// }

// console.log(evenOdd([1,2,3,'a']))
// console.log(evenOdd(["a",444,555]))




// /******************************************************************************************************************** */

// // Q3:filter
// // Write a function named notInFirstArray that, given two arrays as input,
// //  uses filter to return an array of all the elements in the second array that are not included in the first array.

// // For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].

// function notInFirstArray(arr1,arr2){
//     const array =arr2.filter(element => {
//         return !(arr1.includes(element));

//     })
//     return array;
// }

// console.log(notInFirstArray([1,2,3,5], [1,2,3,4,6,10,99]))




// /*********************************************************************************************************************** */

// // Q4:reduce
// // Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.
// // Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method. waad => daaw

// function reversedString(str){

// const arr =str.reduce((previousValue,currentValue)=>{
//   console.log(currentValue)
//     previousValue.unshift(currentValue);

//     return previousValue;
// },[]);

// return arr
  
// }

// console.log(reversedString(['w','a','a','d']))

// /***********************************************************************************************************************/
// // Q5: regex
// // Write a function named isNum that takes in a string or number of any length. 
// // This function should use a regular expression pattern to return true if the input contains a number,
// //  and false if the input does not contain a number.

// // For example:
// // 12345 returns true
// // '12345' returns true
// // 'h3llo world' returns true
// // 'hello world' returns false


// function isNum(value){
    
// let regex=/\w*\d+\w*/ig
// return regex.test( value)
// }

// console.log(isNum(12345))
// console.log(isNum('12345'))
// console.log(isNum('h3llo world'))
// console.log(isNum('hello worl5d'))
// console.log(isNum('hello world'))





// /********************************************************************************************************************** */

// // Q6:regex
// // You have created a game application and begin by asking users an easy question: In which month is Halloween?

// // Write a function named matchMonth which uses a regular expression pattern to match any of these 
// // inputs: October, Oct, october, oct

// // If the user enters any of these four inputs, return true. For any other input, return false.


// function matchMonth(text){
//   let regex=/October|Oct|october|oct/g;
//   if( text.match(regex)) return true;
//   return false;
// }

// let isMatch=matchMonth(prompt("In which month is Halloween?"));
// console.log(isMatch);


/********************************************************************************************************************** */
/*Q6
اليوزر بدخل رقم والمطلوب تطبع عدد الارقام الي بين ال0 والرقم ,الرقم بقبل القسمة عليهم 
مثال : لو دخل اليوزر 10 يطبع 4 لانه بقسم على 1 2 5 10
*/

// let number =Number (prompt("enter number to test"));
// console.log(number);
// let counter=0;

// for (let index = 1; index <= number; index++) {

//  if(number%index==0)counter++
  
// }
// console.log(counter);


/********************************************************************************************************************** */
/*Q6
اليوزر بدخل رقم والمطلوب تطبع عدد الارقام الي بين ال0 والرقم ,الرقم بقبل القسمة عليهم 
مثال : لو دخل اليوزر 10 يطبع 4 لانه بقسم على 1 2 5 10
*/


// let number =Number (prompt("enter number to test"));

// if((number%4==0)&&(number%100!=0)||number%400==0){
//   console.log("leep Year");
// }else{
//   console.log("not leep year");
// }


//اليوزر بدخل ارقام وبضل يدخل ارقام لحتى يصير عدد ارقام ال
// prime الي دخلها ثلاث
// وقتها يوقف ويطبع Accept The Reality
// ال prime هو الرقم الي يقبل القسمة على نفسه وعلى واحد بس مثل 11
// مثال : 1 6 9 7 15 20 5 يطبع Accept The Reality وينهي البرنامج لانه دخل ثلاث ارقام prime الي هم 5 7 1

let counter = 0;
while (counter != 3) {
  let number = parseInt(prompt("enter a number:"));
  console.log(number);
  if (test_prime(number)) {
    counter++;
    console.log(counter + "*");
  }

  if (counter == 3) {
    console.log("Accept the Reality");
  }
}

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < Math.sqrt(n); x++) {
      if (n % x === 0 && x != n) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(7));