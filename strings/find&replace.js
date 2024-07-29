const findandreplace = (str, search, replacement) => {
    let result = '';
    let i = 0;
    let searchLen = search.length;
    
    while (i < str.length) {
      if (str.substring(i, i + searchLen) === search) {
        result += replacement;
        i += searchLen;
      } else {
        result += str[i];
        i++;
      }
    }
    return result;
  };
  
  // Input: S = "abababa", S1 = "aba", S2 = "a"
  // Output: aba
  // Explanation:
  // Change the substrings
  // S[0, 2] and S[4, 6](= S1) to the string S2(= "a") modifies the string S to "aba". Therefore, print "aba".
  
  let S = "geeksforgeeks", S1 = "eek", S2 = "ok"
  // Output: goksforgoks
  console.log(findandreplace(S, S1, S2))