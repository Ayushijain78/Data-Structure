function swapkthEle(arr, k) {
  let temp = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = temp;
  return arr;
}

let k = 3,
  arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(swapkthEle(arr, k));
// Output: [1, 2, 6, 4, 5, 3, 7, 8]
// Explanation: 3rd element from beginning is 3 and 3rd element from end is 6, so we replace 3 & 6.
