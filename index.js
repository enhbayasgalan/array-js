// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
  }
   
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

 
// Take an array of numbers and make them strings
function stringItUp(arr) {
   
    let arr2 = arr.toString().split(',')
    return arr2
}
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]; 

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
const res = arr.map((name) => {
    return name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
  
  console.log(res);
}
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  // 4) Make an array of strings of the names
  function namesOnly(arr) {
    return arr.map((person) =>  person.name)
  }
   
  console.log(
    namesOnly([
      {
        name: "Angelina Jolie",
        age: 80,
      },
      {
        name: "Eric Jones",
        age: 2,
      },
      {
        name: "Paris Hilton",
        age: 5,
      },
      {
        name: "Kayne West",
        age: 16,
      },
      {
        name: "Bob Ziroll",
        age: 100,
      },
    ])
  );
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  // 5) Make an array of strings of the names saying whether or not they can go to The Matrix

   
  // console.log(makeStrings([
  //     {
  //         name: "Angelina Jolie",
  //         age: 80
  //     },
  //     {
  //         name: "Eric Jones",
  //         age: 2
  //     },
  //     {
  //         name: "Paris Hilton",
  //         age: 5
  //     },
  //     {
  //         name: "Kayne West",
  //         age: 16
  //     },
  //     {
  //         name: "Bob Ziroll",
  //         age: 100
  //     }
  // ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
   

  /*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
 
*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3,4]));

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 
// Examples:
//     onlyEvenValues([1,2,3]) // [2]
//     onlyEvenValues([5,1,2,3,10]) // [2,10]
 
// */
function onlyEvenValues(arr) {
    let arr2 = [];
    arr.forEach((val) => {
        if(val % 2 === 0 ) arr2.push(val)
    });
    return arr2;
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]));




/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
 
(1) an array
 
Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

 
 
To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
 
i.e. is31Flavors(originalFlavors) will return TRUE.*/
function originalFlavors(arr){
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
  ];
  if(31 === arr.length){
    console.log("true")
  }else{
    console.log("false")
  }
}

// PART-2
 
// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp
 
// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array
 
function sortedArray(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(sortedArray([5, 7, 10, -10, 56]));
// ==> [56, 10, 7,5,-10]


// Exercise 1
 
// Create a function that will display the smallest value in the array.
 
// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1

// Exercise 2
 
// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array
 
// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
let array = ['text', 3, 7, 'github', 13, 'dev'];
for (let i = array.length - 1; i >= 0; i--) {
  if (typeof array[i] === "string") {
    array.splice(i, 1);
  }
}

// console.log(array);

// Exercise 3
 
// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array
 
// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]\

// Exercise 4
 
// Count the number of Words
// Return how many words was given
 
// Example:
// > countWords('hello from kbpsystem!');
// > 3
function countWords(sentence) {
  let count = 1;

  for (let char of sentence) {
      if (char === ' ') {
          count++;
      }
  }

  return count;
}


let sentence = 'hello from kbpsystem!';
console.log("Number of words:", countWords(sentence));