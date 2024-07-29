// Check if a string is a palindrome.
var palindrom = (str) => {
  let regex = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return regex === regex.split("").reverse().join("");
};

console.log(palindrom("A man, a plan, a canal: Panama"));
console.log(palindrom("121"));
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("racecase"));
