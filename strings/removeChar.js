function removeChar(str1, str2) {
  let set = new Set(str2);
  let str = "";
  for (let s of str1) {
    if (!set.has(s)) {
      str += s;
    }
  }
  return str;
}
// Input:
let string1 = "computer";
let string2 = "cat";
// Output: "ompuer"
// Explanation: After removing characters(c, a, t)
// from string1 we get "ompuer".

console.log(removeChar(string1, string2));
