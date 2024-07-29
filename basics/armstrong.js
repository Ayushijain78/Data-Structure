function findSumOfCubesOfDigits(n) {
  let num = n;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit * digit;
    n = Math.floor(n / 10);
  }
  return sum === num
    ? `${num} is an armstrong number`
    : `${num} is not an armstrong number`;
}

console.log("Sum of cubes of digits:", findSumOfCubesOfDigits(126)); // Outputs: 9

function printDivisor(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
} 
console.log(printDivisor(78));
