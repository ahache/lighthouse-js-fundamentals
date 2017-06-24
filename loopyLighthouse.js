function loopyLighthouse() {
  // Iterate from 100 to 200
  for (var i = 100;i <= 200;i++) {
    // Number is multiple of 3 and 4
    if (i % 3 === 0 && i % 4 === 0)
    {
      console.log("LoopyLighthouse");
      continue;
    }
    // Number is multiple of 3
    else if (i % 3 === 0)
    {
      console.log("Loopy");
      continue;
    }
    // Number is multiple of 4
    else if (i % 4 === 0)
    {
      console.log("Lighthouse");
      continue;
    }
    // Number is not multiple of 3 or 4, print number
    else
    {
      console.log(i);
    }
  }
}

loopyLighthouse();