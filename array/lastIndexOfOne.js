function lastIndex(S) {
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === "1") {
      return i;
    }
  }
  return -1;
}
console.log(lastIndex("0001")); //4
