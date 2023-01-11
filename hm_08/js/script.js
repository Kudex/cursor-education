// 1 //
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.rating = [];
    this.studentEnlisted = true;
  }
  getInfo() {
    return console.log(
      `Студент ${this.course} курсу ${this.university}, ${this.fullName}`
    );
  }

  get marks() {
    return !this.rating
      ? console.log("Студента було відраховано")
      : console.log("Ваші оцінки: ", this.rating);
  }

  set marks(mark) {
    if (
      Number.isInteger(mark) &&
      mark > 0 &&
      mark < 6 &&
      this.studentEnlisted
    ) {
      this.rating.push(mark);
    } else if (!this.studentEnlisted) {
      return (this.rating = [null]), console.log("Студента було відраховано");
    } else {
      console.log("Лекторе, виставте вірну оцінку!");
    }
  }

  getAverageMark() {
    return this.rating.reduce((acc, mark) => acc + mark) / this.rating.length;
  }
  dismiss() {
    this.studentEnlisted = false;
  }
  recover() {
    this.studentEnlisted = true;
  }
}

// 1 //
const student1 = new Student("UMSA", 6, "Кідрон-Лісовський Євген");

// 2 //
student1.getInfo();

// 3 //
student1.marks = 5;
student1.marks = 4;
student1.marks = 4;
student1.marks = 5;
student1.marks;

// 4 //
student1.marks = 5;
student1.marks;

// 5 //
student1.dismiss();

// 6 //
student1.getAverageMark();

// 7 //
student1.recover();

// Advanced //

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
    if (this.getAverageMark() >= 4) {
      console.log("Ви отримали 1400 грн. стипендії");
    } else {
      console.log("В цьому місяці ви не отримаєте стипендію!");
    }
  }
}

const student2 = new BudgetStudent("UMSA", 5, "Гергель Дмитро");

student2.getInfo();
student2.marks = 5;
student2.marks = 3;
student2.marks = 4;
student2.marks = 3;
student2.marks;
console.log(student2.getAverageMark());
