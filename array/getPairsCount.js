function getPairsCount(arr, k) {
    let count=0
    
    for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<arr.length;j++){
        let sum=arr[i]+arr[j]
        if(sum===k){
          count++
        }
      }
    }
    return count;
}

// Given an array arr, and an integer k, find the number of pairs of elements in the array whose sum is k.

// Examples:

// Input: k = 6, arr[] = [1, 5, 7, 1]
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.