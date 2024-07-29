function leaders(arr, size) {
  for (let i = 0; i < size; i++) {
    let j;
    for (j = i + 1; j < size; j++) {
      if (arr[i] <= arr[j]) break;
    }
    if (j == size)
      // the loop didn't break
      console.log(arr[i] + " ");
  }
}
console.log(leaders([16, 17, 3, 4, 5, 2], 6));

// max=16
// i=0
// j=2
// 16>17
