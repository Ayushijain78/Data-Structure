// Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
// Output: 4
// Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements

// Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
// Output: 5
// Explanation: The subsequence 36, 35, 33, 34, 32 is the longest subsequence of consecutive elements.
function longestConsecutive(arr) {
  let longest = "";
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let next = arr[i] + 1;
    let currentCount = 1;
    let sequesnce = arr[i].toString();
    while (arr.includes(next)) {
      currentCount++;
      (sequesnce += "," + next), next++;
    }
    if (currentCount > count) {
      count = currentCount;
      longest = sequesnce;
    }
  }
  return { longest, count };
}
console.log(longestConsecutive([1, 9, 3, 10, 4, 20, 2]));

function subsequence(nums) {
  let arr = nums.sort((a, b) => a - b);
  let count = 1;
  let longest = 0;
  let smaller = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 === smaller) {
      count++;
      smaller = arr[i];
    } else if (smaller !== arr[i]) {
      count = 1;
      smaller = arr[i];
    }
    if (count > longest) {
      longest = count;
    }
  }
  return longest;
}
