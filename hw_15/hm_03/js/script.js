export function getBiggestNum(number) {
  const str = String(number);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let result = 0;
  for (let j = 0; j < arr.length; j++) {
    if (str[j] > result) {
      result = str[j];
    } else {
      continue;
    }
  }
  return console.log("result", result);
};

getBiggestNum(38569);