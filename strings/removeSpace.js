function modify(str) {
  let str1 = "";
  for (let s of str) {
    if (s !== " ") {
      str1 += s;
    }
  }
  return str1;
}
console.log(modify("geeks for geeks"))
