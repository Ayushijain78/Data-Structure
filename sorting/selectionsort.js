function selectionSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let min = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
} 
console.log(selectionSort([2, 4, 1, 2, 4, 3]));
