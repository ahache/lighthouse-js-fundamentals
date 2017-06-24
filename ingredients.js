var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var length = ingredients.length;
// Write a while loop that prints out the contents of ingredients:
var index = 0;
while (index < length) {
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0;i < length;i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 0;i < length;i++) {
  // Adjust index back by 1 to stay within array index range
  console.log(ingredients[length - i - 1]);
}