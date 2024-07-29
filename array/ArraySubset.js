function isSubset(a1, a2, n, m){
    let subset = "Yes";
     for(let i = 0; i<m; i++) {
         if(a1.includes(a2[i]) == false){
             subset = "No";
             break;
         }else{
             let index = a1.indexOf(a2[i]);
             a1.splice(index,1);
         }
     }
     return subset;
 }
//  a1[] = {10, 5, 2, 23, 19}
// a2[] = {19, 5, 3}
// Output:
// No
// Explanation:
// a2[] is not a subset of a1[]