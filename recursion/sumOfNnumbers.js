let sum = 0;
function sumOfNnumbers(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNnumbers(n - 1);
}
console.log(sumOfNnumbers(5));
// sum of n numbers formula
// n*n+1/2
// 5*5+1/2
// 30/2
// 15
