function getMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let ele of arr) {
    if (ele > max) {
      max = ele;
    }
    if (ele < min) {
      min = ele;
    }
  }
  return { min, max };
}
//N = 14
let arr = [3, 2, 1, 56, 10000, 167];
console.log(minMax(arr));
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
