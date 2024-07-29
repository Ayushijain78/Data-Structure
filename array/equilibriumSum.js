function equilibriumPoint(arr) {
    let n=arr.length
    if(n===1){
        return 0;
    }
    for(let i =0;i<n;i++){
        let rightsum=0;
        let leftsum=0;
        for(j=0;j<i;j++){
            leftsum+=arr[j];
        }
        for(let j=i+1;j<n;j++){
            rightsum+=arr[j]
        }
        if(rightsum===leftsum){
            return i;
        }
    }
    return -1
} 

const arr = [-7, 1, 5, 2, -4, 3, 0];
console.log(equilibriumPoint(arr));



// Optimal Approach
// The optimal approach uses prefix sums to achieve a linear time complexity, 
// 𝑂
// (
// 𝑛
// )
// O(n). We maintain the total sum of the array and use it to find the equilibrium point by iterating through the array and updating left and right sums dynamically.

// Code:
// javascript
// Copy code
function findEquilibriumPointOptimal(arr) {
    const n = arr.length;

    // Edge case: if there's only one element, it's the equilibrium point
    if (n === 1) {
        return 0;
    }

    // Calculate total sum of the array
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        // Right sum for current index i is totalSum - leftSum - arr[i]
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        // Update leftSum for next iteration
        leftSum += arr[i];
    }

    // No equilibrium point found
    return -1;
}
// Explanation:
// Brute Force Approach:

// For each element, calculate the sum of elements to the left and right.
// Check if both sums are equal.
// Time Complexity: 
// 𝑂
// (
// 𝑛
// 2
// )
// O(n 
// 2
//  )
// Space Complexity: 
// 𝑂
// (
// 1
// )
// O(1)
// Optimal Approach:

// Calculate the total sum of the array.
// Iterate through the array, maintaining a running sum of elements to the left.
// For each element, compute the right sum dynamically.
// Check if left sum equals right sum.
// Time Complexity: 
// 𝑂
// (
// 𝑛
// )
// O(n)
// Space Complexity: 
// 𝑂
// (
// 1
// )
// O(1)
// This approach ensures an efficient solution to finding the equilibrium point in an array.