function subArrayWithZeroSum(arr) {
  let sum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum == 0) {
      return true;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
} 
console.log(subArrayWithZeroSum([4, 2, -3, 1, 6]));
