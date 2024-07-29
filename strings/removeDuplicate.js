const removeDuplicate = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!res.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
};

let str = "geeksforgeeks";
console.log(removeDuplicate(str));
