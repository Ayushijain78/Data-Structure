// // 88. Merge Sorted Array
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let arr3 = [];
  let left = 0;
  let right = 0;
  let index = 0;
  while (left < m && right < n) {
    if (nums1[left] <= nums2[right]) {
      arr3[index] = nums1[left];
      left++;
      index++;
    } else {
      arr3[index] = nums2[right];
      right++;
      index++;
    }
  }
  while (left < m) {
    arr3[index++] = nums1[left++];
  }
  while (right < n) {
    arr3[index++] = nums2[right++];
  }
  return arr3;
};

let nums1 = [1, 2, 3];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(merge(nums1, m, nums2, n));

// another simple method of doing this without using extra space;;
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
};
