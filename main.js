// //QUESTION 1
// // Create an array named fruits that contains the following string
// // // elements: "apple", "banana", "mango", "orange".
var fruit = ["apple", "banana", "mango", "orange"];
console.log(fruit);
// // // //QUESTION: 2
// // // // Declare an array named numbers that can contain only number
// // // // elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
// // // //QUESTION: 3
// // // // Access the third element of the fruits array and assign it to a
// // // //  variable named thirdFruit.
var thirdFruit = fruit[2];
console.log(thirdFruit, " is third element of array");
// // //QUESTION 4
// // //Change the second element of the numbers array to 25.
numbers[1] = 25; // before 30 after 25
console.log(numbers);
// // // Question 5
// // // Add the element "grape" to the end of the fruits array using the
// // // method.
fruit.push("grape");
console.log(fruit);
// // // // Question 6
// // // // Remove the last element from the fruits array using the
// // // // method and assign it to a variable named lastFruit.
var lastFruit = fruit.pop();
console.log(lastFruit);
console.log(lastFruit, fruit);
// // // // Question 7
// // // // Remove the first element from the fruits array using the
// // // // method and assign it to a variable named firstFruit.
var firstFruit = fruit.shift();
console.log(firstFruit, fruit); //remove firstFruit
// // Question 8
// // Add the element "kiwi" to the beginning of the fruits array
// // using the method.
fruit.unshift("kiwi");
console.log(fruit);
// // Question 9
// // Remove 2 elements from the fruits array starting from index 1
// // using the method.
fruit.splice(1, 2);
console.log(fruit, "remaining element");
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
fruit.splice(2, 0, "pineapple", "pear");
console.log(fruit);
// // Question 11
// // Create a new array named citrusFruits that contains the first
// // two elements of the fruits array using the method.
var citrusFruits = fruit.slice(0, 2);
console.log(citrusFruits);
// // Question 12
// // Create a new array named lastTwoFruits that contains the last
// // two elements of the fruits array using the method.
var lastTwoFruits = fruit.slice(2);
console.log(lastTwoFruits);