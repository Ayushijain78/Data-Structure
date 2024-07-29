function longestSubstrDistinctChars(s) {
  let start = 0;
  let maxLen = 0;
  let set = new Set();
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen; 
}

// Given a string S, find the length of the longest substring with all distinct characters. 
// Example 1:

// Input:
// S = "geeksforgeeks"
// Output: 7
// Explanation: "eksforg" is the longest 
// substring with all distinct characters.