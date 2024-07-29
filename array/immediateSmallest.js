function immediateSmall(arr) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i] = -1;
    }
  }
  // console.log(arr)
  arr[n - 1] = -1;
  console.log(arr);
}

//N = 14
let n = 5;
let arr = [5, 6, 2, 3, 1, 7];
// -1 2 -1 1 -1 -1
// [2 1 -1 3 -1]
console.log(immediateSmall(arr));
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
