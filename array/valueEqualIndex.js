function valueEqualToIndex(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // For 1-based indexing, compare arr[i] with i + 1
    if (arr[i] === i + 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
let arr = [15, 2, 45, 4, 7];
//Output: 2, 4;
//  Explanation:
//  Here, arr[2] = 2 exists here.
//  and arr[4] = 4 exists here.
console.log(valueEqualToIndex(arr));
