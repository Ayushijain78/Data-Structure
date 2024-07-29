function kthSmallest(arr,l,r,k){
    let newArr=arr.slice(l,r+1)
    newArr.sort((a,b)=>a-b)
    return newArr[k-1]
}

let n = 6
let arr = [7 ,10 ,4 ,3 ,20 ,15]
let k = 3
let l=0, r=5;
console.log(kthSmallest(arr,l,r,k))
