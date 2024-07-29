// Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

// Example 1:

// Input:
// S = aabb
// Output:  ab
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.
function removeConsecutiveCharacter(str) {
  if (str.length === 0) return str;

  let result = [];
  result.push(str[0]); // Always add the first character

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result.push(str[i]);
    }
  }

  return result.join("");
}
