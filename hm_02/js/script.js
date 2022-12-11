const wrap = document.querySelector(".wrapper");

const n = Number(prompt("Введіть ціле число від якого будемо рахувати"));
console.log(n);
const m = Number(prompt("Введіть  ціле число до якого будемо рахувати"));
console.log(m);
if (Number.isInteger(n) && Number.isInteger(m)) {
  const boo = confirm("Чи треба пропустити парні числа?");
  let result = 0;
  for (let i = n; i <= m; i++) {
    if (
      Number.isInteger(n) &&
      Number.isInteger(m) &&
      boo === true &&
      i % 2 !== 0
    ) {
      result += i;
      wrap.innerHTML = `Результат: ${result}`;
      console.log(i);
    } else if (Number.isInteger(n) && Number.isInteger(m) && boo === false) {
      result += i;
      wrap.innerHTML = `Результат: ${result}`;
    } else {
      continue;
    }
  }
} else {
  console.log("N або M не ціле число");
}
