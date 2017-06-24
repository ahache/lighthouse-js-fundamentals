function concat(arr1,arr2) {

  // Take length of arr2 to iterate over
  var length = arr2.length;

  // Iterate over arr2 and push each value onto arr1
  for (var i = 0;i < length;i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);