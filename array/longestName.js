function longest(names) {
    if (names.length === 0) {
        return "";
    }

    let maxLength = 0;
    let s = names[0];
    for (let i = 0; i < names.length; i++) {
        let len = names[i].length;
        if (len > maxLength) {
            maxLength = len;
            s = names[i];
        }
    }
    return s;
}
// Input: names[]= ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: GeeksforGeeks
// Explanation: name "GeeksforGeeks" has maximum length among all names. 
