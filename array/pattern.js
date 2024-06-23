// * * * *
// * * * *
// * * * *
// * * * *

function printStar1(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mydiv.innerText += " * ";
    }
    mydiv.innerText += "\n";
  }
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
function printStar2(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      mydiv.innerText += " * ";
    }
    mydiv.innerText += "\n";
  }
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
function printStar3(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      mydiv.innerText += " " + j + " ";
    }
    mydiv.innerText += "\n";
  }
}
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function printStar4(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      mydiv.innerText += " " + j + " ";
    }
    mydiv.innerText += "\n";
  }
}
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
// 7 7 7 7 7 7 7
function printStar5(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      mydiv.innerText += " " + i + " ";
    }
    mydiv.innerText += "\n";
  }
}
//            *
//          * * *
//       * * * * * *
//    * * * * * * * *
//   * * * * * * * * *
// * * * * * * * * * * *
function printStar6(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 0; i < n; i++) {
    let line = "";
    // Add leading spaces
    for (let j = 0; j < n - i - 1; j++) {
      line += "&nbsp;&nbsp;&nbsp;";
    }
    // Add stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += " * ";
    }

    // Add line break
    line += "<br>";

    mydiv.innerHTML += line;
  }
}
// * * * * * * * * * * *
//   * * * * * * * * *
//     * * * * * * *
//       * * * * *
//         * * *
//           *
function printStar7(n) {
  let mydiv = document.getElementById("star");
  // mydiv.innerHTML = ""; // Clear any existing content
  for (let i = 0; i < n; i++) {
    let line = "";
    // Add leading spaces
    for (let j = 0; j < i; j++) {
      line += "&nbsp;&nbsp;&nbsp;";
    }
    // Add stars
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      line += " * ";
    }
    // Add line break
    line += "<br>";
    mydiv.innerHTML += line;
  }
}

//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
//   * * * * * * * * *
//     * * * * * * *
//       * * * * *
//         * * *
//           *
function printStar8(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  printStar6(n); // Print the first inverted pyramid
  // mydiv.innerHTML += "<br>"; // Add a line break
  printStar7(n); // Print the second pyramid
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function printStar9(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content

  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = "";
    let star = i;
    if (i > n) star = 2 * n - i; // Adjust star count after the peak

    for (let j = 1; j <= star; j++) {
      line += " * ";
    }

    line += "<br>";
    mydiv.innerHTML += line;
  }
}

// 0
// 10
// 010
// 1010
// 01010
// 101010
// 0101010
function printStar10(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  let start = 1;
  for (let i = 0; i < n; i++) {
    let line = "";
    start = i % 2 == 0 ? 1 : 0;
    for (let j = 0; j < i; j++) {
      line += start;
      start = 1 - start;
    }
    line += "<br>";
    mydiv.innerHTML += line;
  }
}

// 1              1
// 12            21
// 123          321
// 1234        4321
// 12345      54321
// 123456    654321
// 1234567  7654321
// 1234567887654321
function printStar11(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  let space = 2 * (n - 1); // 2*(5-1)=>8
  for (let i = 1; i <= n; i++) {
    let line = "";
    //numbers
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    //space
    for (let j = 1; j <= space; j++) {
      //1 to 8
      line += "&nbsp;&nbsp;";
    }
    for (let j = i; j >= 1; j--) {
      line += j;
    }
    line += "<br>";
    space -= 2;
    mydiv.innerHTML += line;
  }
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// 29 30 31 32 33 34 35 36
function printStar12(n) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (j = 1; j <= i; j++) {
      line += " " + num;
      num++;
    }
    line += "<br>";
    mydiv.innerHTML += line;
  }
}

// a
// a b
// a b c
// a b c d
// a b c d e
// a b c d e f
// a b c d e f g
function printStar13(start, end) {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  const startChar = "a"; // starting character
  const endChar = "g"; // ending character

  // Get the Unicode values for the start and end characters
  const startCharCode = startChar.charCodeAt(0);
  const endCharCode = endChar.charCodeAt(0);

  for (let i = startCharCode; i <= endCharCode; i++) {
    let line = "";
    for (let j = startCharCode; j <= i; j++) {
      line += String.fromCharCode(j) + " ";
    }
    line += "<br>";
    mydiv.innerHTML += line; // Remove the trailing space and print the line
  }
}

// a
// b a
// c b a
// d c b a
// e d c b a
// f e d c b a
// g f e d c b a
function printStar14() {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  const startChar = "a"; // starting character
  const endChar = "g"; // ending character

  // Get the Unicode values for the start and end characters
  const startCharCode = startChar.charCodeAt(0);
  const endCharCode = endChar.charCodeAt(0);
  for (let i = startCharCode; i <= endCharCode; i++) {
    let line = "";
    for (let j = i; j >= startCharCode; j--) {
      line += String.fromCharCode(j) + " ";
    }
    line += "<br>";
    mydiv.innerHTML += line; // Remove the trailing space and print the line
  }
}

// A B C D E F G
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A
function printStar15() {
  let mydiv = document.getElementById("star");
  mydiv.innerHTML = ""; // Clear any existing content
  const startChar = "A"; // starting character
  const endChar = "G"; // ending character

  // Get the Unicode values for the start and end characters
  const startCharCode = startChar.charCodeAt(0);
  const endCharCode = endChar.charCodeAt(0);

  for (let i = endCharCode; i >= startCharCode; i--) {
    let line = "";
    for (let j = startCharCode; j <= i; j++) {
      line += String.fromCharCode(j) + " ";
    }
    line += "<br>"; // Add a line break at the end of each line
    mydiv.innerHTML += line.trim(); // Remove the trailing space and print the line
  }
}
