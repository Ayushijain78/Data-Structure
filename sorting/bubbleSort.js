const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([3, 1, 4, 2, 5])); // o(n^2)

//best time complextiy if array is already sorted then it will take o(n)
const bubbleSortalreadySorted = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0;
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = 1;
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  return arr;
};
console.log(bubbleSort([1, 2, 4, 5]));
