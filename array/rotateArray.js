function reverseArr(arr, l, r) {
  let left = l;
  let right = r;
  while (left <= right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
function rotateArray(arr, k) {
  let n = arr.length;
  if (k > n) {
    k = k % n;
  }
  // Handle edge case where k is 0 after modulo operation
  if (k === 0) {
    return arr;
  }
  reverseArr(arr, 0, n-1);
  reverseArr(arr, 0, k-1);
  reverseArr(arr, k, n-1);
  return arr
}
let rotateNums = [1,2];
let k = 3;
console.log(rotateArray(rotateNums, k))
// k=1=>[7,1,2,3,4,5,6]
// k=2=>[6,7,1,2,3,4,5]
// k=3=>[5,6,7,1,2,3,4]

// [7,6,5,4,3,2,1]
// [5,6,7,1,2,3,4]

var canJump = function(nums) {
    let start=0;
    
    // if(nums.length===0) return false;
    for(let i=0;i<nums.length;i++){
        if(nums[start]!==0){
            start=start+nums[start];
        }
    }
    return nums[start]
};
console.log(canJump([3,2,1,0,4]))

// nums[start]=3
// start=3
// nums[i=0] = num[nums[i]]