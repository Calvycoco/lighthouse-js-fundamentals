const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Using a while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("\n");
// Using a for loop
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}
console.log("\n");
// Using a reverse loop
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
console.log("\n");