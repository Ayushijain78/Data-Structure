// Given an 0-indexed array of integers arr[] of size n, find its peak element and return it's index. An element is considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).
// Note: The output will be 1 if the index returned by your function is correct; otherwise, it will be 0.

// Examples :

// Input: n = 3, arr[] = {1, 2, 3}
// Output: 1
// Explanation: If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property, so answer will be printed as 0.

function peakElement(arr, n) {
  if (n == 1) {
    return 0;
  }
  if (n === 2) {
    return arr[0] >= arr[1] ? 0 : 1;
  }
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i] >= arr[i + 1]) {
        return i;
      }
    } else if (i == n - 1) {
      if (arr[i] >= arr[i - 1]) {
        return i;
      } 
    } else if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
      return i;
    }
  }
  return -1;
}
console.log(peakElement([1, 2, 3]));
