const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

const mergedArray = numbers.concat(names);

console.log("Merged array:", mergedArray);

const sortedNumbers = numbers.slice().sort((a, b) => b - a);

console.log("Sorted numbers (reverse):", sortedNumbers);

const sortedNames = names.slice().sort();

console.log("Sorted names (alphabetical):", sortedNames);
