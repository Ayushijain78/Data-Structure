function search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i + 1;
    }
  }
  return -1;
} 
