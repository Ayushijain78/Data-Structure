const duplicateChar = (str) => {
  let map = {};
  let s = "";
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }
  for (let ele in map) {
    if (map[ele] > 1) {
      s += ele + " occurs " + map[ele] + " times\n";
    }
  }
  return s;
};
console.log(duplicateChar("geeksforgeeks"));
