// Given an unsorted array arr. Find the count of elements less than or equal to the given element x.

function countOfElements(x, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x) {
      count++;
    }
  }
  return count;
} 
// Input: x = 9, arr = [10, 1, 2, 8, 4, 5]
// Output: 5
// Explanation: The 5 elements are 1, 2, 8, 4 and 5.

