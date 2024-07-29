function pushZerosToEnd(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = count; i < arr.length; i++) {
    arr[count] = 0;
    count++;
  }
  return arr;
} 

//  Input: n = 5, arr[] = {3, 5, 0, 0, 4}
// Output: 3 5 4 0 0
// Explanation: The non-zero elements preserve their order while the 0 elements are moved to the right
