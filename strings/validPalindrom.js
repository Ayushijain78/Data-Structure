var isPalindrome = function (s) {
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return false
        }else{
            left++
            right--
        }
    }
    return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("racecase"));


