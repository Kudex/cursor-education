export function hw_08(){

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
  
  const student1 = new Student("UMSA", 6, "Кідрон-Лісовський Євген");
  
  return student1.getInfo();
  };
  
  hw_08();