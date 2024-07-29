function formLargestNum1(arr,n){
    let a=arr.sort((a,b)=>b-a)
    return +a.join("")
  }
  
//   let N = 3
//   let A = [1,2,3]
  // Output:
  // 93100
  // Explanation:
  // Largest number is 93100 which
  // can be formed from array digits.
  console.log(formLargestNum(A,N))


  function formLargestNum(arr, n) {
    // Convert each number to a string
    let strArr = arr.map(String);
  
    // Sort the array with a custom comparator
    strArr.sort((a, b) => (b + a) - (a + b));
  
    // Join the sorted array to form the largest number
    let result = strArr.join('');
  
    // Handle the case where the result might be all zeros
    return result[0] === '0' ? '0' : result;
  }
  
  let N = 3;
  let A = [1, 2, 3];
  console.log(formLargestNum(A, N)); // Output: "321"
  
  // Additional test case
  let B = [9, 0, 1, 3, 0];
  console.log(formLargestNum(B, B.length)); // Output: "93100"
  