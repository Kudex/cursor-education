// 1 //

const getRandomArray = (length, min, max) => {
  let result = [];
  min = min;
  max = max;
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return result;
};
const res = getRandomArray(15, 1, 100);
console.log("1: ", res);

// 2 //

const getModa = (...numbers) =>
  numbers.reduce((acc, i, index, arr, len = 0) => {
    let filteredArr = arr.filter((el) => el == i).length;
    Number.isInteger(i) && filteredArr > len
      ? ((acc = i), (len = filteredArr))
      : acc;
    return acc;
  }, 0);

const res2 = getModa(1, 2, 5, 5);
console.log("2: ", res2);

// 3 //
const getAverage = (...numbers) => {
  const newArr = numbers.filter((el) => Number.isInteger(el));
  let sum = 0;
  newArr.forEach((el, i) => {
    sum += el;
  });
  return sum / newArr.length;
};
const res3 = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log("3: ", res3);

// 4 //

const getMedian = (...numbers) => {
  const filteredArr = numbers.filter((el) => Number.isInteger(el));
  const mid = Math.floor(filteredArr.length / 2),
    nums = [...filteredArr].sort((a, b) => a - b);
  return filteredArr.length % 2 !== 0
    ? nums[mid]
    : (nums[mid - 1] + nums[mid]) / 2;
};
const res4 = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log("4: ", res4);

// 5 //

const filterEvenNumbers = (...numbers) => {
  const filteredArr = numbers.filter((el) => el % 2 !== 0);
  return filteredArr;
};
const res5 = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log("5: ", res5);

// 6 //

const countPositiveNumbers = (...numbers) =>
  numbers.filter((el) => el >= 0).length;
const res6 = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log("6: ", res6);

// 7 //

const getDividedByFive = (...numbers) => numbers.filter((el) => el % 5 == 0);
const res7 = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
console.log("7: ", res7);

// 8 //

const replaceBadWords = (string, ...bad_words) => {
  return string
    .split(" ")
    .map((el) => {
      let words = bad_words.find((x) => el.includes(x));
      return words ? el.replace(words, "****") : el;
    })
    .join(" ");
};
const res8 = replaceBadWords(
  "Are you fucking kidding or shitting?",
  "fuck",
  "shit"
);
console.log("8: ", res8);

// 9 //

const divideByThree = (word) => {
  let arr = [];
  let str = word.replaceAll(" ", "").toLowerCase();
  for (let i = 0; i < str.length; i = i + 3) {
    console.log("str.substring(i,i+3): ", str.substring(i, i + 3));
    arr.push(str.substring(i, i + 3));
  }
  return arr;
};
const res9 = divideByThree("liver");
console.log("9: ", res9);

// 10 //

const generateCombinations = (word) => {
  if (word.length < 2) return word;
  if (word.length > 10) return "Введіть строку до 10ти символів";
  let result = [];
  let arr = [...word];
  arr.forEach((el, i) => {
    console.log("el: ", el);
    for (let options of generateCombinations(
      word.slice(0, i) + word.slice(i + 1, word.length)
    )) {
      result.push(el + options);
    }
  });
  return result;
};
const res10 = generateCombinations("man");
console.log("10: ", res10);
