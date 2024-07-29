function strstr(str, x) {
    let n = x.length;
    let m = str.length;
    for (let i = 0; i <= (m - n); i++) {
        let j = 0;
        while (j < n && str[i + j] === x[j]) {
            j++;
        }
        if (j === n) {
            return i;
        }
    }
    return -1;
}

// Example usage:
let s = "abcdbcabcd";
let x = "abcd";
console.log(strstr(s, x)); // Output: 5
