const subArrayWtihSum = (arr, k) => {
  let left = 0;
  let right = 0;
  let currentsum = 0;

  while (right < arr.length) {
    currentsum += arr[left];
    while (currentsum > sum && left <= right) {
      currentsum -= arr[left];
      left++;
    }
    if (currentsum === sum) {
      return [arr[left], arr[right]];
    }
    right++;
  }
};

// // Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23}, sum = 23
// Output: 2 5
// Explanation:  Sum of elements between indices 2 and 5 is 2 + 4 + 8 + 9 = 23
console.log(subArrayWtihSum([15, 2, 4, 8, 9, 5, 10, 23], 23));
