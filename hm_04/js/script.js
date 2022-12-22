const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const girls = students.filter((el) => el.slice(-1) === "а");
const boys = students.filter((el) => el.slice(-1) !== "а");

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// 1
const getPairs = (girls, boys) => {
  let pairs = [];
  for (let i = 0; i < girls.length; i++) {
    pairs = [...pairs, [girls[i], `&nbsp ` + boys[i]]];
  }
  return pairs;
};
const pairs = getPairs(girls, boys);

// 2
const getPairsAndThemes = (girls, boys, themes) => {
  let pairsAndThemesArr = [];
  for (let i = 0; i < boys.length; i++) {
    pairsAndThemesArr = [
      ...pairsAndThemesArr,
      [`${girls[i]} та ${boys[i]}`, `&nbsp ` + themes[i]],
    ];
  }
  return pairsAndThemesArr;
};
const pairs_and_themes = getPairsAndThemes(girls, boys, themes);

// 3
const getMark = (students, marks) => {
  let studentsSuccess = [];
  for (let i = 0; i < students.length; i++) {
    studentsSuccess = [...studentsSuccess, [students[i], `&nbsp ` + marks[i]]];
  }
  return studentsSuccess;
};
const students_marks = getMark(students, marks);

//Task 4
const getRandomMark = (pairsAndThemesArr) => {
  const studentsThemesAndMarks = pairsAndThemesArr.map((el) => [
    ...el,
    `&nbsp ` + Math.floor(Math.random() * 5 + 1),
  ]);
  return studentsThemesAndMarks;
};
const random_marks = getRandomMark(pairs_and_themes);

const result = `1. Розділ студентів на парам:</br>
&nbsp - ${pairs[0]}</br>
&nbsp - ${pairs[1]}</br>
&nbsp - ${pairs[2]}</br></br></br>

2. Пари та теми проектів: </br>
&nbsp - ${pairs_and_themes[0]}</br>
&nbsp - ${pairs_and_themes[1]}</br>
&nbsp - ${pairs_and_themes[2]}</br></br></br>

3. Оцінки зі студентом: </br>

&nbsp - ${students_marks[0]}</br>
&nbsp - ${students_marks[1]}</br>
&nbsp - ${students_marks[2]}</br>
&nbsp - ${students_marks[3]}</br>
&nbsp - ${students_marks[4]}</br>
&nbsp - ${students_marks[5]}</br></br></br>

4. Кожній парі випадкову оцінка: </br>
&nbsp - ${random_marks[0]}</br>
&nbsp - ${random_marks[1]}</br>
&nbsp - ${random_marks[2]}</br></br></br>
`;
console.log(pairs, pairs_and_themes, students_marks, random_marks);
document.writeln(result);
