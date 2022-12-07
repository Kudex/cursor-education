const sven = 15.678;
const jbl = 90.2345;
const tannoy = 123.965;

console.log("Максимальна ціна:", Math.max(sven, jbl, tannoy));
console.log("Мінімальна ціна:", Math.min(sven, jbl, tannoy));

const sum = sven + jbl + tannoy;
console.log("Вартість всіх товарів:", sum);

const svenTrunc = Math.trunc(sven);
const jblTrunc = Math.trunc(jbl);
const tannoyTrunc = Math.trunc(tannoy);
console.log(
  `Вартість всіх товарів без копійок округлена в меншу сторону: ${Math.floor(
    svenTrunc + jblTrunc + tannoyTrunc
  )}  `
);

let sumFixedToHundreds = (sum / 1000).toFixed(3);
sumFixedToHundreds = parseFloat(sumFixedToHundreds).toFixed(1) * 1000;
console.log("Вартість всіх товарів округлена до сотень", sumFixedToHundreds);

const sumFloor = Math.floor(sum);
let isEven = Boolean;
isEven = sumFloor % 2 === 0 ? (isEven = true) : (isEven = false);
console.log("Чи парна вартість?", isEven);

const change = 500 - sum;
console.log("Шановний клієнт, Ваша решта:", change);

const middlePrice = (sven + jbl + tannoy) / 3;
console.log("Середнє значення:", middlePrice.toFixed(2));

const discountGenerator = Math.floor(Math.random() * (100 - 0 + 1) + 0);
const discountAmount = (sum * discountGenerator) / 100;
console.log(
  `Сума знижки: ${discountAmount.toFixed(2)} (${discountGenerator}%)`
);
const discountedAmount = sum - (sum * discountGenerator) / 100;
console.log("Сума зі знижкою:", discountedAmount.toFixed(2));

const profit = sum / 2 - discountAmount;
console.log("Профіт:", profit.toFixed(2));
