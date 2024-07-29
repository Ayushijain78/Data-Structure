function snakeCase(str) {
  let s = str.toLowerCase();
  let res = "";
  for (let st of s) {
    if (st === " ") {
      res += "_";
    } else {
      res += st;
    }
  }
  return res;
}

//N = 14

let S = "Geeks ForGeeks";
console.log(snakeCase(S));
// Output: "geeks_forgeeks"
// Explanation: All upper case characters are
// converted to lower case and the whitespace
// characters are replaced with underscore '_'.
