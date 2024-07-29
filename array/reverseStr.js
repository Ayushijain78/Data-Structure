function reverse(str) {
  let stack = [];
  let reversedStr = "";
  let s = str.split(".");
  for (let i of s) {
    stack.push(i);
  }

  while (stack.length > 0) {
    reversedStr += stack.pop();
    if (stack.length > 0) {
      reversedStr += ".";
    }
  }

  return reversedStr;
}
let str = "i.like.this.program.very.much";
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// much.very.program.this.like.i
console.log(reverse(str));
