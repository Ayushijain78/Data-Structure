function arraySortedOrNot(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i] || arr[i + 1] === arr[i]) {
      count++;
    }
  }

  return count === arr.length - 1;
}

// arr[] = [10, 20, 30, 40, 50]
// op true 