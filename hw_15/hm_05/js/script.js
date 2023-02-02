export function getRandomArray(length, min, max) {
  let result = [];
  min = min;
  max = max;
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return console.log(result);
}
getRandomArray(15, 1, 100);
