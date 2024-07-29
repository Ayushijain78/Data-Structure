function firstRep(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] > 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstRep("geeksforgeek"));
