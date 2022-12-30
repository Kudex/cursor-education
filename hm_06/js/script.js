const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },

  {
    name: "Jeka",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 5, 4, 5, 4, 5],
      english: [5, 5],
      cosmology: [5, 5, 5, 5],
    },
  },

  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1 //

const getSubjects = (student) => {
  const subjectsArr = Object.keys(student.subjects).map(
    (el) =>
      (el = el[0].toUpperCase() + el.slice(1).toLowerCase().replace("_", " "))
  );

  return subjectsArr;
};
console.log("Предмети студента: " + getSubjects(students[0]));

// 2 //

const getAverageMark = (student) => {
  let arr = [];

  for (let i in student.subjects) {
    arr = [...arr, ...student.subjects[i]];
  }
  const resultMark = (
    arr.reduce((acc, el) => acc + el, 0) / arr.length
  ).toFixed(2);

  return resultMark;
};

console.log("Середня оцінка: " + getAverageMark(students[0]));

// 3 //

const getStudentInfo = (student) => {
  const info = { ...student };
  delete info.subjects;
  info.averageMark = getAverageMark(student);
  return info;
};

console.log("Інформація про студента: ", getStudentInfo(students[0]));

// 4 //

const getStudentsNames = (students) => {
  let arrOfNames = [];
  for (const names of students) {
    arrOfNames = [...arrOfNames, names.name].sort();
  }
  return arrOfNames;
};
console.log("Імена студентів: " + getStudentsNames(students));

// 5 //
const getBestStudent = (students) => {
  let bestStudent = "";
  let bestMark = 0;
  for (const student of students) {
    const bestAverageMark = getAverageMark(student);
    if (bestAverageMark > bestMark) {
      bestStudent = student.name;
      bestMark = bestAverageMark;
    }
  }
  return bestStudent;
};
console.log("Найкращий студент: " + getBestStudent(students));

// 6 //

const calculateWordLetters = (test) => {
  const countOfLetters = {};
  test.split("").forEach((el) => {
    countOfLetters[el] ? countOfLetters[el]++ : (countOfLetters[el] = 1);
    console.log("countOfLetters[el]", countOfLetters[el]);
  });
  return countOfLetters;
};
console.log("Кількість літер: ", calculateWordLetters("resttt"));
