// Remove Element
// Given an integer array nums and an integer val,
//  remove all occurrences of val in nums in-place. 
// The order of the elements may be changed.
//  Then return the number of elements in nums which are not equal to val.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length===0) return nums;
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[index]=nums[i];
            index++;
        }
    }
    nums.length=index
    return {index, nums}
};
//TC: O(n)
//SC: O(1)
console.log(removeElement([3,2,2,3],3))