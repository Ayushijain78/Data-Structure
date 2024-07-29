function reverseInGroups(arr, k) {
  let n = arr.length % k;
  let first = arr.slice(0, k).reverse();
  let second = arr.slice(k, n).reverse();
  return [...first, ...second];
}
let k = 5,
  arr = [5, 6, 8, 9];
console.log(reverseInGroups(arr, k));
