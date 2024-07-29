// Initialize three variables, `first`, `second`, and `third`,
// to store the three largest elements. We then iterate through the array and
// compare each element with the current values of `first`, `second`, and `third`.
// If an element is greater than `first`, we update
// `third` to `second`, `second` to `first`, and `first` to the new element.
// If an element is greater than `second` but not `first`,
// // we update `third` to `second` and `second` to the new element.
// If an element is greater than `third` but not `second` or `first`,
// // we update `third` to the new element. After iterating through the entire array,
// // `first`, `second`, and `third` will contain the three largest elements,
// // which we can then print as the result.

function threeLasregestEle(arr) {
  let first = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] < second && arr[i] < first) {
      third = arr[i];
    }
  }
  return { first, second, third };
} 
let arr = [10, 4, 3, 50, 23, 90];
console.log(threeLasregestEle(arr));
// Output: 90, 50, 23br
