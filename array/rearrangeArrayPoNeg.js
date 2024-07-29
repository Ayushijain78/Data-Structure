function rearrangeArrayPosNeg(arr) {
  let i = 0;
  let j = 0;
  let pos = [];
  let neg = [];
  let index = 0;
  for (let ele of arr) {
    if (ele > 0) {
      pos.push(ele);
    } else {
      neg.push(ele);
    }
  }
  while (i < pos.length && j < neg.length) {
    arr[index++] = pos[i++];
    if (j < neg.length) {
      arr[index++] = neg[j++];
    }
  } 

  // If there are remaining positive numbers
  while (i < pos.length) {
    arr[index++] = pos[i++];
  }

  // If there are remaining negative numbers
  while (j < neg.length) {
    arr[index++] = neg[j++];
  }
  return arr;
}
console.log(rearrangeArrayPosNeg([1, 2, 3, -4, -1, 4]));
