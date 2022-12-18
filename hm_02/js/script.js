const wrap = document.querySelector(".wrapper");

let firstNum = 0;
let secondNum = 0;

do {
  firstNum = Number(prompt("Введіть ціле число від якого будемо рахувати"));
  if (!Number.isInteger(firstNum) || firstNum <= 0) {
    alert("Перше число не є цілим або менше одиниці. Введіть коректні данні");
  }
} while (!Number.isInteger(firstNum) || firstNum <= 0);

do {
  secondNum = Number(
    prompt(
      "Введіть ціле число до якого будемо рахувати, воно має бути більшим за перше число"
    )
  );
  if (!Number.isInteger(secondNum) || secondNum <= firstNum) {
    alert(
      "Перше число не є цілим, меншим або дорівнює. Введіть коректні данні"
    );
  }
} while (!Number.isInteger(secondNum) || secondNum <= firstNum);

const boo = confirm("Чи треба пропустити парні числа?");

let result = 0;
for (let i = firstNum; i <= secondNum; i++) {
  if (boo === true && i % 2 !== 0) {
    result += i;
    wrap.innerHTML = `Результат: ${result}`;
    console.log(i);
  } else if (boo === false) {
    result += i;
    wrap.innerHTML = `Результат: ${result}`;
  } else {
    continue;
  }
}
