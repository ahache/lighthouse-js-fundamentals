function concat(arr1,arr2) {

  // Take length of arr2 to iterate over
  var length = arr2.length;

  // Iterate over arr2 and push each value onto arr1
  for (var i = 0;i < length;i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}