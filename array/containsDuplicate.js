// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = (arr) => {
  let map = {};
  for (let i of arr) {
    if (map[i]) {
      return true;
    } else {
      map[i] = 1;
    }
  }
  return false;
};

let arr = [1, 2, 3, 1];
console.log(containsDuplicate(arr));
// Output: true
