const countVowelConsonent = (s) => {
  let vowels = 0;
  let consonents = 0;
  let str = s.replaceAll(/[^a-zA-Z]/g, "");
  for (let ele of str) {
    if (
      ele === "a" ||
      ele === "e" ||
      ele === "i" ||
      ele === "o" ||
      ele === "u"
    ) {
      vowels++;
    } else {
      consonents++;
    }
  }
  return { vowels, consonents };
};
console.log(countVowelConsonent("geeks for geeks"));
