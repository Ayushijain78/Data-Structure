function longestCommonPrefix(str) {
  let prefix = "";
  const minLen = Math.min(...str.map((s) => s.length));
  if (str.length === 0) return prefix;
  for (let i = 0; i < minLen; i++) {
    let char = str[0][i];
    for (let j = 0; j < str.length; j++) {
      if (str[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}
const inputStrings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(inputStrings)); // Output: "fl"
