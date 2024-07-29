const isPalindrome1 = (str, left, right) => {
  // Base case: if left pointer surpasses right pointer, it means we have checked all characters
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }

  return isPalindrome(str, left + 1, right - 1);
};
let str = "1221";
console.log(isPalindrome1(str, 0, str.length - 1));
 