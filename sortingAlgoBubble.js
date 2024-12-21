const numbers = [];

for (let i = 0; i < 10; i++) {
  const number = parseInt(prompt(Enter number ${i + 1}:));
  numbers.push(number);
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        console.log(Swapped ${arr[j + 1]} and ${arr[j]});
      }
    }
  }
}

bubbleSort(numbers);

console.log("Sorted array:", numbers);
