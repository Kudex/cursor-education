// 1 //
const getBiggestNum = (number) => {
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
  return result;
};

// 2 //

const getPow = (a, b) => {
  // this.a = a;
  // this.b = b;
  for (let i = 1, power = a; i < b; i++) {
    a *= power;
  }
  return a;
};

// 3 //

const getCapitalLetter = (name) => {
  const result = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return result;
};

// 4 //

const getSalary = (salary, ...rest) => {
  const result = salary * ((100 - rest.reduce((acc, i) => acc + i)) / 100);
  return result;
};

// 5 //

const getRandomNum = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

// 6 //

const countLetter = (letter, word) => {
  let arr = [];
  const str = word.toLowerCase();
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      arr.push(str[i]);
    } else {
      continue;
    }
  }
  return arr.length;
};

// 7 + 8 //

const exchangeCurrency = (currency) => {
  if (currency.includes("$")) {
    return currency.replace("$", "") * 36 + "UAH";
  } else if (currency.toUpperCase().includes("UAH")) {
    return currency.toUpperCase().replace("UAH", "") / 36 + "$";
  } else {
    alert(
      "Ми працюємо лише з долларом та гривнею, зверніться в інший ексченджер"
    );
  }
};

// 9 + 10 //

const getRandomPassword = (letter = 8) => {
  let pass = "";
  for (let i = 1; i <= letter; i++) {
    pass += (Math.random() * (9 - 1) + 1).toFixed();
  }
  return pass;
};

// 11 //

const deleteLetters = (letter, word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      continue;
    } else {
      result += word[i];
    }
  }
  return result;
};
deleteLetters("l", "blabla");

// 12 //

const isPolyndrom = (str) => {
  const beforeReverse = str.toLowerCase().split(" ").join("");
  const afterReverse = str
    .toLowerCase()
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("");
  const isTrulyPolyndrom = beforeReverse === afterReverse;
  return isTrulyPolyndrom;
};

// 13 //

const deleteDuplicateLetter = (data) => {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    let letterCount = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[i].toLowerCase() === data[j].toLowerCase()) {
        letterCount++;
      }
    }
    if (letterCount < 2) {
      result += data[i];
    }
  }
  return result;
};

// # //

document.writeln(`HM_03`, "<br /><br />");
document.writeln(`1: ${getBiggestNum(3859)}`, "<br />");
document.writeln(`2: ${getPow(5, 7)}`, "<br />");
document.writeln(`3: ${getCapitalLetter("marK")}`, "<br />");
document.writeln(`4: ${getSalary(1000, 18, 1.5)}`, "<br />");
document.writeln(`5: ${getRandomNum(1, 10)}`, "<br />");
document.writeln(`6: ${countLetter("а", "Асталавіста")}`, "<br />");
document.writeln(`7+8: ${exchangeCurrency("3600uAh")}`, "<br />");
document.writeln(`9+10: ${getRandomPassword(4)}`, "<br />");

document.writeln(`11: ${countLetter("а", "Асталавіста")}`, "<br />");
document.writeln(`12: ${isPolyndrom("я несу гусеня")}`, "<br />");
document.writeln(
  `13: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`,
  "<br />"
);
