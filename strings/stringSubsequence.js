/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (str, str2) {
  let i = 0;
  let j = 0;
  while (i < str.length && j < str2.length) {
    console.log(str[i], str2[j]);
    if (str[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i !== str.length) {
    return false;
  }
  return true;
};
