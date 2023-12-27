//Home work 1
//console.log("Script is working");

//function tellStory([name, mood, activity]) {
    //const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
   // return story;
//}

//const storyArray = ["Alice", "happy", "reading"];
//const result = tellStory(storyArray);
//console.log(result)

//home work 2

//function validateNumber(num) {
    //if (typeof num !== 'number' || isNaN(num)) {
      //throw new Error('Invalid number detected. Please provide valid numbers.');
    //}
 // }
  
  //function calculateSum(numbers) {
    //try {
      //numbers.forEach(validateNumber);
  
      //const sum = numbers.reduce((acc, num) => acc + num, 0);
  
      //return sum;
    //} //catch (error) {
     
      //return error.message;
    //}
 // }
  
 // const numbersArray = [2, 5, 10, 'invalid', 8];
 // const result = calculateSum(numbersArray);

 // console.log(result);
 
 //Home work 3

 //function concatenateStrings(arr) {
   
   // const result = arr.join(' ');
    //return result;
  //}
  
  //const stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
  //const concatenatedString = concatenateStrings(stringArray);
  
  //console.log(concatenatedString);

  //Home work 4

  //for (let i = 1; i <= 20; i++) {
    //if (i % 2 === 0) {
      //console.log(`${i} is even`);
    //} else {
      //console.log(`${i} is odd`);
    //}
  //}

//Home work 5

//function calculateMinMaxSum(arr) {
   // if (!Array.isArray(arr)) {
     // return "Input is not an array of numbers.";
    //}
  
    //const numbers = arr.filter(item => typeof item === 'number');
  
    //if (numbers.length === 0) {
      //return "No valid numbers found in the array.";
    //}
  
    //const maxNumber = Math.max(...numbers);
    //const minNumber = Math.min(...numbers);
    //const sum = maxNumber + minNumber;
  
    //return {
      //Max: maxNumber,
      //Min: minNumber,
      //Sum: sum
    //};
 // }
  
  //const inputArray = [3, 5, 6, 8, 11];
  //const result = calculateMinMaxSum(inputArray);
  
  //console.log(result);