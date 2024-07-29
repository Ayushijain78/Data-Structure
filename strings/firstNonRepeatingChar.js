function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let rep = true;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        rep = false;
        break;
      }
    }
    if (rep) {
      return str[i];
    }
  }
}
console.log(firstNonRepeatingCharacter("swiss"));

function firstNonRepeatingCharacterOptimal(str) {
  let map = {}; 
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] === 1) {
      return i;
    }
  }
}
