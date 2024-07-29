// Next Greater Element I
// Solved
// Easy
// Topics
// Companies
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

const nextGreaterElement = (nums1, nums2) => {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    let next = nums1[i];
    let found = false;
    let greater = -1;
    for (let j = 0; j < nums2.length; j++) {
      if (next === nums2[j]) {
        found = true;
      }
      if (found && nums2[j] > next) {
        greater = nums2[j];
        break;
      }
    }
    arr.push(greater);
  }
  return arr;
};
let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
// Output: [-1,3,-1]
