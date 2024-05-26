function findSmallestInt(arr) {
    let smallest = arr[0];
    for(let i = 0; i < arr.length; i++){
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }

  // tasked with finding smallest number in array so by implemetns in a for loop and stating smallest is equal to arr[0] i could iterate over and find the smallest number