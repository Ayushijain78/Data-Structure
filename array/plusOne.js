// 66. Plus One
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    } 
  }
  digits.unshift(1);
  return digits;
  //   let num = parseInt(digits.join(''), 10) + 1;
  //   return [...num.toString()].map(Number);
};

console.log(plusOne([9, 9, 9]));

//TC: o(n)
//Sc: o(n) The space complexity is also O(n) because the function only uses a constant amount of extra space regardless of the size of the input array.
