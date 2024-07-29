function waveSort(arr, n) {
  for (let i = 0; i < n; i += 2) {
    // If the current element is smaller than the previous one, swap them
    if (i > 0 && arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }

    // If the current element is smaller than the next one, swap them
    if (i < n - 1 && arr[i] < arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
console.log(waveSort(arr, n)); // Output: [2, 1, 4, 3, 5]
