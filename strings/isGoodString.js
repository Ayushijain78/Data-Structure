function goodString(str){
    let consonant=0;
    let vowel=0
    let set=new Set(['a','e','i','o','u']);
    for(let char of str){
      if(set.has(char)){
        vowel++
        consonant=0;
      }else if(char!=="?"){
        consonant++
        vowel=0;
      }
      else{
        consonant++
        vowel++;
      }
        if (vowel > 5 || consonant > 3) {
              return 0; // BAD string
          }
    }
    return 1
    
  }
  // Input:
  let S = "aeioup??"
  // Output:
  // 1
  // Explanation: The String doesn't contain more
  // than 3 consonants or more than 5 vowels together.
  // So, it's a GOOD string.consonants
  console.log(goodString(S))