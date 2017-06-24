function loopyLighthouse(range,multiples,words) {

  // Assign range values to variables
  var start = range[0];
  var end = range[1];

  // Assign multiple values to variables
  var mult1 = multiples[0];
  var mult2 = multiples[1];

  // Assign words to variables
  var word1 = words[0];
  var word2 = words[1];

  // Iterate from start to end values
  for (var i = start;i <= end;i++) {
    // Number is multiple of mult1 and mult2
    if (i % mult1 === 0 && i % mult2 === 0)
    {
      console.log(word1 + word2);
      continue;
    }
    // Number is multiple of mult1
    else if (i % mult1 === 0)
    {
      console.log(word1);
      continue;
    }
    // Number is multiple of mult2
    else if (i % mult2 === 0)
    {
      console.log(word2);
      continue;
    }
    // Number is not multiple of mult1 or mult2, print number
    else
    {
      console.log(i);
    }
  }
}