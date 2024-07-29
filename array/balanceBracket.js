function isBalanced(x) {
  let stack = [];
  for (let char of x) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let last = stack[stack.length - 1];
      if (
        (last === "(" && char === ")") ||
        (last === "{" && char === "}") ||
        (last === "[" && char === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

isBalanced("{{{}}}()()()") 