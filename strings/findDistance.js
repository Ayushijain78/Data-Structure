function findDistance(arr,str1,str2)
{
  let source=-1;
  let dest=-1;
  let ans=Infinity
  for(let i=0;i<arr.length;i++){
    if(arr[i]===str1){
      source=i
    }
    if(arr[i]===str2){
      dest=i;
    }
    if (dest != -1 && source != -1){
       ans = Math.min(ans, Math.abs(source - dest));
      // console.log(ans)
    }
  }
  // console.log(source, dest)
  return ans
}



let a = [ "the", "quick", "brown", "fox", "quick"];
let word1 = "the"
let word2 = "fox"


console.log(findDistance(a,word1, word2))
