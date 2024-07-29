function removeDuplicate2(nums) {
  if (nums.length <= 2) nums.length;
  let index = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}
let removeArr = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicate2(removeArr)); 

// dry run
// index=5
// i=5
// nums[1,1,2,2,3]
// 1!=1 false
// 2!=1 true
// 2!=1 true
// 3!=1 true
