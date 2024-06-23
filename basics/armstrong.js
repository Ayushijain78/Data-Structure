function findSumOfCubesOfDigits(n) {
  let num = n;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit * digit;
    n = Math.floor(n / 10);
  }
  return sum === num
    ? `${num} is an armstrong number`
    : `${num} is not an armstrong number`;
}

console.log("Sum of cubes of digits:", findSumOfCubesOfDigits(126)); // Outputs: 9

function printDivisor(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(printDivisor(78));

const t1 = {
  1: "a",
  2: "b",
  3: ["c", "d", "e"],
  4: "a",
};

const t2 = {
  a: [1, 4],
  b: 2,
  c: 3,
  d: 3,
  e: 3,
};

function inverse(t1) {
  const result = Object.entries(t1).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        acc[val] = key;
      });
    } else {
      if (!acc[value]) {
        acc[value] = [];
      }
      acc[value].push(key);
    }
    return acc;
  }, {});

  for (const key in result) {
    if (result[key].length === 1) {
      result[key] = result[key][0];
    }
  }

  return result;
}

console.log("hello", inverse(t1));
