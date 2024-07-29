function splitString(str) {
  let s = "";
  let n = "";
  let sc = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
    ) {
      s += str[i];
    } else if (str[i] >= 0 && str[i] <= 10) {
      n += str[i];
    } else {
      sc += str[i];
    }
  }
  return `${s}\n${n}\n${sc}`;
}

// let S = "geeks01for02geeks03!!!"
// Output:
// geeksforgeeks
// 010203
// !!!text.charCodeAt(0)
// Explanation: The output shows S1, S2 and S3
// console.log(splitString(S))
let S = "**Docoding123456789everyday##";
// Output:
// Docodingeveryday
// 123456789
// **##
console.log(splitString(S));
