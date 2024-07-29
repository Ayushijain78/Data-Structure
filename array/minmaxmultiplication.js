function findMultiplication(arr1, arr2) {
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>max){
            max=arr1[i]
        }
    }  
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]<min){
            min=arr2[i]
        }
    }
    return +min*max;
}
let arr1 =  [0, 0, 0, 0],  arr2 = [1, 1, 2]
console.log(findMultiplication(arr1,arr2))