function sort012(arr, n) {
  let left = 0;
  let mid = 0;
  let right = n - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right--;
    }
  }
  return arr;
} 
console.log(sort012([1, 2, 0, 1, 0, 1, 2, 2], 8));
