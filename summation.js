var summation = function(num) {
    // Code here
    let sum = 0;
    for(let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Example usage:
  console.log(summation(5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
  console.log(summation(10)); // Output: 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)


  //tasked with finding the summation of the argument and setting sum to zero initally using the for loop I could run the condtion to iterate throught and it and add the number to the last one until it reaches the end number