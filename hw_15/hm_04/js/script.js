export function hw_04(){
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
  
  
  
  const result = `1. Розділ студентів на пари:</br>
  &nbsp - ${pairs[0]}</br>
  &nbsp - ${pairs[1]}</br>
  &nbsp - ${pairs[2]}</br></br></br>
  
  `;
  return console.log(pairs);
}
hw_04();