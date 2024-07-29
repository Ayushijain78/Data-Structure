//Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.
// Examples:

// Input: k = 4, arr= [1, 2, 3, 4, 5]  
// Output: 3
// Explanation: 4 appears at index 3.

function binarysearch(arr, k) {
    let left=0;
    let right=arr.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===k){
            return mid;
        }
        else if(arr[mid]<k){
            left=mid+1
        }
        else{
            right=mid-1
        }
      
    }
    return -1 
}