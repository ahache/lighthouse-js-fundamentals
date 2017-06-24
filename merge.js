function merge(arr1,arr2) {

  // Create two tracking variables to move through arrays
  var pos1 = 0;
  var pos2 = 0;
  // While loop iterator
  var i = 0;

  var length1 = arr1.length;
  var length2 = arr2.length;
  var total = length1 + length2;

  var arr3 = [];

  // Loop until no more comparisons are needed
  while (i < total) {

    // arr1 is done, dump the rest of arr2 onto arr3
    if (pos1 === length1) {
      // Iterate through remaining part of arr2
      for (var j = pos2;j < length2;j++) {
        arr3.push(arr2[j]);
      }
      // We're done, break out of while loop
      break;
    }

    // arr2 is done, dump the rest of arr1 onto arr3
    if (pos2 === length2) {
      for (var k = pos1;k < length1;k++) {
        arr3.push(arr1[k]);
      }
      // We're done, break out of while loop
      break;
    }

    // Compare current positions of arr1 and arr2
    if (arr1[pos1] <= arr2[pos2])
    {
      // Add value from arr1 to arr3
      arr3.push(arr1[pos1]);
      // Iterate arr1 tracker up by one
      pos1++;
    }
    // arr2 value is less than arr1 value
    else
    {
      // Add value from arr2 to arr3
      arr3.push(arr2[pos2]);
      // Iterate arr2 tracker up by one
      pos2++;
    }
    i++;
  }
  return arr3;
}