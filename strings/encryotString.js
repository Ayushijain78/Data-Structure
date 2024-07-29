function encryptString(str) {
  let st = "";
  let i = 0;

  while (i < str.length) {
    let count = 1; // Start with the first occurrence
    let char = str[i];

    // Count occurrences of the current character
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }

    // Append character and its count to the result string
    st += char + count;
    i++;
  }

  return st;
}

console.log(encryptString("aaaaaaaaaa")); // Output: "a10"

