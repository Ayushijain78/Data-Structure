function confusePappu(num) {
  let str = num.toString().split("").join("");
  let n = "";
  for (let i of str) {
    if (i === "6") {
      n += "9";
    } else {
      n += i;
    }
  }
  return +n - num;
}
//N = 14
let num = 66;
console.log(confusePappu(num));
// Output: "geeks_forgeeks"
// Explanation: All upper case characters are
// converted to lower case and the whitespace
// characters are replaced with underscore '_'.
