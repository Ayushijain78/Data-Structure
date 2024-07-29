const checkSuffleString = (str1, str2, res) => {
  let n = str1.length;
  let m = str2.length;
  let r = res.length;
  if (m + n !== r) {
    return false;
  }
  let i = 0;
  let j = 0;
  let k = 0;
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  let result = res.split("").sort().join("");

  while (k < r) {
    if (s1[i] === result[k] && i < n) {
      i++;
    } else if (s2[j] === result[k] && j < m) {
      j++;
    } else {
      return false;
    }
    k++;
  }
  return i === n && j === m;
};
let str1 = "BA",
  str2 = "XR",
  shuffle = "XYAB";
console.log(checkSuffleString(str1, str2, shuffle));
