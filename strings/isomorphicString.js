const isomorphicString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    if (map1[char1] === undefined && map2[char2] === undefined) {
      map1[char1] = char2;
      map2[char2] = char1;
    } else if (map1[char1] !== char2 || map2[char2] !== char1) {
      return false;
    }
  }
  return true;
};
let str1 = "aab",
  str2 = "xxz";
console.log(isomorphicString(str1, str2));
