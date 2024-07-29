function countNumber(arr,k){
    let count=0;
    for(let i=0;i<arr.length;i++){
      let s=arr[i].toString();
     for (let j = 0; j < s.length; j++) {
              if (s[j] == k) {
                  count++;
              }
          }
    }
    return count
  }
   let k=1, arr = [11, 12, 13, 14, 15]
  // Output: 6 
  // Explanation: Here, digit 1 appears in the whole array 6 times.
  console.log(countNumber(arr,k))