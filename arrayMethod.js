// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.

class Store {
  constructor(name, available) {
    this.name = name;
    this.available = available;
  }
}

let storeIntentory = [
  new Store("apples", true),
  new Store("pears", true),
  new Store("oranges", false),
  new Store("bananas", true),
  new Store("blueberries", false),
];

function createList(storeIntentory) {
  const list = [];
  storeIntentory.forEach((fruit) => {
    if (fruit.available) list.push(fruit.name);
  });
  return list;
}


 console.log("final list ===> "+createList(storeIntentory))



/**************************************************************************************************************** */

// Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element
//  is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].


function evenOdd(arrayOfNumbers){["odd","even",""]

const array = arrayOfNumbers.map(value =>{

switch(value%2){
case 1: return "odd";
case 0: return "even"; 
default:return "N/A"
}
})

return array;

}

console.log(evenOdd([1,2,3,'a']))
console.log(evenOdd(["a",444,555]))




/******************************************************************************************************************** */

// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].

function notInFirstArray(arr1,arr2){
    const array =arr2.filter(element => {
        return !(arr1.includes(element));

    })
    return array;
}

console.log(notInFirstArray([1,2,3,5], [1,2,3,4,6,10,99]))




/*********************************************************************************************************************** */

// Q4:reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.
// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method. waad => daaw

function reversedString(str){

const arr =str.reduce((previousValue,currentValue)=>{
  console.log(currentValue)
    previousValue.unshift(currentValue);

    return previousValue;
},[]);

return arr
  
}

console.log(reversedString(['w','a','a','d']))

