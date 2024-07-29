function subset(arr) {
  let result = [];
  function backtrack(start, path) {
    result.push([...path]);
    for(let i=start;i<arr.length;i++){
        path.push(arr[i])
        backtrack(i+1, path);
        path.pop()
    }
  }
  backtrack(0, []);
  return result;
} 

console.log(subset([1, 2, 3]));
