const anagram = (a, b) => {
  let a1 = a.split("").sort().join("");
  let b1 = b.split("").sort().join("");
  return a1 === b1;
};
let a = "geeksforgeeks";
b = "forgeeksgeeks";
console.log(anagram(a, b));

const anagramOptimal = (a, t) => {
  if (a.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < a.length; i++) {
    map[a[i]] = (map[a[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    }
    map[t[i]]--;
  }
  return true;
};
let a1 = "geeksforgeeks";
b1 = "forgeeksgeeks";
console.log(anagramOptimal(a1, b1));
