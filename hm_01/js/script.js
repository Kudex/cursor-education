const sven = 15.678;
const jbl = 90.2345;
const tannoy = 123.965;

const maxNum = Math.max(sven, jbl, tannoy);
const minNum = Math.min(sven, jbl, tannoy);
console.log("Максимальна ціна:", maxNum);
console.log("Мінімальна ціна:", minNum);

const sum = sven + jbl + tannoy;
console.log("Вартість всіх товарів:", sum);

const svenTrunc = Math.trunc(sven);
const jblTrunc = Math.trunc(jbl);
const tannoyTrunc = Math.trunc(tannoy);
const sumTrunced = Math.floor(svenTrunc + jblTrunc + tannoyTrunc);

console.log(
  "Вартість всіх товарів без копійок округлена в меншу сторону:",
  sumTrunced
);

let sumFixedToHundreds = (sum / 1000).toFixed(3);
sumFixedToHundreds = parseFloat(sumFixedToHundreds).toFixed(1) * 1000;
console.log("Вартість всіх товарів округлена до сотень", sumFixedToHundreds);

const sumFloor = Math.floor(sumTrunced);
let isEven = Boolean;
isEven = sumFloor % 2 === 0 ? (isEven = true) : (isEven = false);

console.log("Чи парна вартість?", isEven);

const change = 500 - sum;
console.log("Шановний клієнт, Ваша решта з 500 грн :", change);

let middlePrice = ((sven + jbl + tannoy) / 3).toFixed(2);
console.log("Середнє значення цін:", middlePrice);

const discountGenerator = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log("Випадкова знижка", discountGenerator + "%");

const discountAmount = (sum * discountGenerator) / 100;
const discountedAmount = (sum - (sum * discountGenerator) / 100).toFixed(2);
console.log("Сума до оплати:", discountedAmount);

const profit = (sum / 2 - discountAmount).toFixed(2);
console.log("Чистий прибуток, якщо клієнт заплатив зі знижкою:", profit);

///////////////////////////ADVANCED//////////////////////////////////

const max = document.querySelector(".max");
max.innerHTML = `Максимальна ціна: ${maxNum}`;

const min = document.querySelector(".min");
min.innerHTML = `Мінімальна ціна: ${minNum}`;

const sumToPay = document.querySelector(".sum");
sumToPay.innerHTML = ` Вартість всіх товарів: ${sum}`;

const sumRoundUp = document.querySelector(".sumRoundUp");
sumRoundUp.innerHTML = `Вартість всіх товарів без копійок округлена в меншу сторону: ${sumTrunced}`;

const sumRoundUpToHundreds = document.querySelector(".sumRoundUpToHundreds");
sumRoundUpToHundreds.innerHTML = `Вартість всіх товарів округлена до сотень: ${sumFixedToHundreds}`;

const bool = document.querySelector(".bool");
bool.innerHTML = `Чи парна вартість? ${isEven}`;

const changeTo = document.querySelector(".change");
changeTo.innerHTML = `Шановний клієнт, Ваша решта з 500 грн : ${change}`;

const sumAverage = document.querySelector(".sumAverage");
sumAverage.innerHTML = `Середнє значення цін: ${middlePrice}`;

const percent = document.querySelector(".percent");
percent.innerHTML = `Випадкова знижка: ${discountGenerator}%`;

const discont = document.querySelector(".discont");
discont.innerHTML = `Сума до оплати: ${discountedAmount}`;

const profitOf = document.querySelector(".profit");
profitOf.innerHTML = `Чистий прибуток, якщо клієнт заплатив зі знижкою: ${profit}`;
