// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
       count^=nums[i]
    }
   return count
};

let input = (nums = [2, 2, 1]);
console.log(singleNumber(input));
// Output: 1
// TC:on(n)
//SC:O(1)