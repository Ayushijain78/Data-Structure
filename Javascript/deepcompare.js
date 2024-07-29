function deepCompare(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    obj1 === null ||
    typeof obj1 !== "object" ||
    obj2 === null ||
    typeof obj2 !== "object"
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
let a = {
  name: "ayushi",
  age: 26,
  class: ["A", "B", "C", "D"],
  city: {
    state: "uttar pradeshee",
  },
};
let b = {
  name: "ayushi",
  age: 26,
  class: ["A", "B", "C"],
  city: {
    state: "uttar pradesh",
  },
};
console.log(deepCompare(a, b));
