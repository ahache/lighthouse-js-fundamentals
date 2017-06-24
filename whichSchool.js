function whichSchool(age) {
  // Checks if age is less than 13
  if (age < 13)
  {
    return "Elementary School";
  }
  // Checks if age is between 13 and 18
  else if (age < 19)
  {
    return "Secondary School";
  }
  // Age is greater than 18 in this case
  else
  {
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));