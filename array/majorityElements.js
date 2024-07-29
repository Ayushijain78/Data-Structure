var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  let majority = Math.floor(nums.length / 2);

  for (let ele in map) {
    if (map[ele] > majority) {
      return ele;
    }
  }
};
