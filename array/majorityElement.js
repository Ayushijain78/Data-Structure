// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length/2)]
};
console.log(majorityElement([3,2,3]))

//O(n log n) dure to sorting operation
//o(1)


// DRY RUN
// sort => [1,1,1,2,2,2,2]
// nums[3]