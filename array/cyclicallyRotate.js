const cyclicallyRotate = (arr) => {
    let index=1;
    let ele=arr.pop();
    for(let i=1;i<arr.length;i++){
        arr[index]=arr[i];
        index++
    }
    arr.unshift(ele)
    return arr

} 
console.log(cyclicallyRotate([1, 2, 3, 4, 5]))
