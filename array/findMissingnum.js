const missingNumber=(n, arr)=>{
    let hash=Array.from({length:n+1}).fill(0);
    for(let i=0;i<n-1;i++){
        hash[arr[i]]++
    }
    for(let i=1;i<n+1;i++){
        if(hash[i]===0){
            return i;
        }
    }
    return -1;
}
console.log(missingNumber(5,[1,2,3,5,6]));


const findMissingOptimal=(n, arr)=>{
    let sum=0;
    for(let i of arr){
        sum+=i
    }

    let exp=Math.floor(n*(n+1)/2)
    return exp-sum
}
console.log(findMissingOptimal(5, [1, 2, 3, 5])); // Missing number is 4
