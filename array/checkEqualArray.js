function check(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let a1 = arr1.sort((a, b) => a - b);
  let b1 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (a1[i] !== b1[i]) {
      return false;
    }
  }
  return true
}
let arr1= [1, 2, 5, 4, 0], arr2 = [2, 4, 5, 0, 1]
console.log(check(arr1,arr2))
