function lastIndexOf(arr,num) {
  // If num never occurs in array, lastIndex will be set to -1
  var lastIndex = -1;
  var length = arr.length;

  for(var i = 0;i < length;i++) {
    // When num is found in array, lastIndex will update to index
    if (arr[i] === num) lastIndex = i;
  }

  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);