function findIntersection(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let arr = [];
  for (let i = 0; i < n1; i++) {
    let ele = arr1[i];
    for (let j = 0; j < n2; j++) {
      if (ele === arr2[j] && !arr.includes(ele)) {
        arr.push(ele);
      }
    }
  }
  return arr;
}
const array1 = [1, 2, 3, 4, 5, 3];
const array2 = [4, 5, 6, 7, 8, 3];
console.log(findIntersection(array1, array2)); // Output: [4, 5]

function findIntersectionOptimal(arr1, arr2) {
  let set = new Set(arr1);
  let intersection = arr2.filter((item) => set.has(item));
  return intersection;
} 
//   const array1 = [1, 2, 3, 4, 5,3];
//   const array2 = [4, 5, 6, 7, 8,3];
//   console.log(findIntersection(array1, array2)); // Output: [4, 5]
