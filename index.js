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
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num, 0) / length;
  return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 

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

// Exercise 5
 
// Multiply by Length
// Multiply all elements in an array by it's length
 
// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]
function MultiplyByLength(arr){
  let arr01 = [];
  for( let i=0; i<arr.length; i++ ){
    arr01[i] = arr[i] * arr.length;
  }
  return arr01;
}
console.log(MultiplyByLength([4,1,1]));

// ==== ADVANCED Array Methods ====
 
// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.
 
const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];
 
//  Request 1: .forEach()
// The zoos want to display both the scientific name and the animal name in front of the habitats.
// Populate the displayNames array with only the animal_name and scientific_name of each animal.
// displayNames will be an array of strings, and each string should follow this
// pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
 
function displayNames(array) {
  array.forEach(function (element) {
    console.log(
      `name: ${element.animal_name}, scientific: ${element.scientific_name}`
    );
  });
}
 
console.log(displayNames(zooAnimals));
 
/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
*/
let animalNames = ["Jackal", "Asiatic", "Elephant", "Zebra",];
let lowCaseAnimalNames = animalNames.map(name => name.toLowerCase());
console.log(lowCaseAnimalNames.join(","));
/* Request 3: .filter()
The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
*/
const animals = [
  { name: 'Panda', population: 2 },
  { name: 'Elephant', population: 50 },
  { name: 'Tiger', population: 3 },
  { name: 'Giraffe', population: 20 },
  { name: 'Koala', population: 4 },
  { name: 'Whale', population: 10 }
];
const lowPopulationAnimals = animals.filter(animal => animal.population < 5);

console.log(lowPopulationAnimals);
[
  { name: 'Panda', population: 2 },
  { name: 'Tiger', population: 3 },
  { name: 'Koala', population: 4 }
]

/* Request 4: .reduce()
The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
*/
const zoos = [
  { name: "Zoo 1", population: 120 },
  { name: "Zoo 2", population: 200 },
  { name: "Zoo 3", population: 350 },
  { name: "Zoo 4", population: 50 }
];
const totalPopulation = zoos.reduce((total, zoo) => {
  return total + zoo.population; 
}, 0); 

console.log(totalPopulation); 

// ==== Callbacks ====
 
// /* Step 1: Create a higher-order function
// * Create a higher-order function named consume with 3 parameters: a, b and cb
// * The first two parameters can take any argument (we can pass any value as argument)
// * The last parameter accepts a callback
// * The consume function should return the invocation of cb, passing a and b into cb as arguments

function consume(a, b, cb) {
  return cb(a, b);
}
function sum(x, y) {
  return x + y;
}

const result = consume(3, 5, sum);
console.log(result); 

 
// /* Step 2: Create several functions to callback with consume();
// * Create a function named add that returns the sum of two numbers
// * Create a function named multiply that returns the product of two numbers
// * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}
console.log(greeting(`Hello, nice to meet you!`))