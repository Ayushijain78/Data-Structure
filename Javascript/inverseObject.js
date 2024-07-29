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
