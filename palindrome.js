const word1 = prompt("Enter the first word:");
const word2 = prompt("Enter the second word:");

function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log("Original word 1:", word1);
console.log("Reversed word 1:", word1.split('').reverse().join(''));

console.log("Original word 2:", word2);
console.log("Reversed word 2:", word2.split('').reverse().join(''));

console.log("Is word 1 a palindrome?", isPalindrome(word1));
console.log("Is word 2 a palindrome?", isPalindrome(word2));
