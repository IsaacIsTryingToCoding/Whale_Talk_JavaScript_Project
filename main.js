// Inside the 'input' variable change the sentence you want to translate to Whale talk! Remember that Whale talk includes only vowels and 'e' and 'u' are doubled.

let input = 'i like to coding with you';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0 ; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } 
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
