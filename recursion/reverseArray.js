function reverseArray(arr, left, right) {
  if (left >= right) {
    return arr;
  }
  [arr[left], arr[right]] = [arr[right], arr[left]];
  return reverseArray(arr, left + 1, right - 1);
} 
let arr4 = [3, 2, 1, 32, 1];
console.log(reverseArray(arr4, 0, arr.length));
