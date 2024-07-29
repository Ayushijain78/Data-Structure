function removeCharacters(s) {
  let str = "";
  let r = s.replace(/[^0-9]/g, "");
  return r;
}
let s = "AA1d23cBB4";
// Output: 1234
// let s = "geeks  for geeks"
console.log(modify(s));
