function hasTargetSum(array, target) {
  // Write your algorithm here
  const length = array.length;
  for(var i = 0; i < length; i++) {
    for(var j = i+1; j < length; j++) {
      if(array[j] + array[i] == target){
        return true;
      }
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

  O(nlogn)

*/

/* 
  Add your pseudocode here

  length = array.length
  counter1 = 0
  REPEAT
    counter2 = counter1 + 1

    REPEAT
      IF array[counter1] + array[counter2] = target
        return TRUE

      counter2 = counter2 + 1
    UNTIL counter2 = length

    counter1 = counter1 + 1
  UNTIL counter1 = length

  return false

*/

/*
  Add written explanation of your solution here

  The algorithm goes through each element in the array,
  adding the element with each other element after it.
  If a sum is found that matches the target, it stops
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
