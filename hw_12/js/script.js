const STAR_WARS_URL = "https://swapi.dev/api/";
//const URL1="https://jsonplaceholder.typicode.com/";
const container = document.querySelector(".container");
const btnStart = document.querySelector(".getInfo");
btnStart.addEventListener("click", () => {
  getUsers();
});
let arrName = [];

let userOBJ = {};
let photoOBJ = {};

function renderSingleUser(user) {
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user");
  const dataWrapper = document.createElement("div");
  dataWrapper.classList.add("dataWrapper");
  console.log("userS: ", user);

  // console.log("user.bg", user.bg);
  if (user.bg) {
    userWrapper.style.backgroundImage = `url(${user.bg})`;
  }

  const name = document.createElement("h2");
  name.classList.add("user__name");
  name.textContent = user.name;
  const birthday = document.createElement("h3");
  birthday.classList.add("user__birthday");
  birthday.textContent = user.birth_year;
  const gender = document.createElement("h4");
  gender.classList.add("user__gender");
  gender.textContent = user.gender;
  userWrapper.append(name);
  userWrapper.append(dataWrapper);
  dataWrapper.append(birthday);
  dataWrapper.append(gender);
  container.append(userWrapper);

  // console.log("OBJECT: ", userOBJ);
  // arrMain.push(userOBJ);
}

// let timeoutID;
// function delayedAlert() {
//   timeoutID = window.setTimeout(g, 5000);
// }
// delayedAlert();
// function g() {
//   console.log("arrMain: ", arrMain);
//   // console.log("OBJECTMAIN: ", userOBJ);
// }

let arr = [];
let arr2 = [];

async function getUsers() {
  const request = await fetch(`${STAR_WARS_URL}films/2/`);
  const result = await request.json();
  console.log("FILMS RESULT are result.name: ", result);
  const data = result;
  console.log("FILMS RESULT are result.name: ", data);

  data.characters.forEach(async (el) => {
    // console.log("result.forEach", el);
    const request = await fetch(el);
    const data = await request.json();
    console.log("data.name: ", data.name);
    // console.log("data.birth_year: ", data.birth_year);
    // console.log("data.gender: ", data.gender);
    arrName.push(data.name);
  });
  console.log("arrName", arrName);

  const users = Object.values(result)[6];
  // console.log("USERSIN: ", users);
  //console.log("data: ", data);
  //console.log("ARRAY: ", arr);

  for (const url of users) {
    arr.push(url);
    //console.log("url: ", url);
    const request_2 = await fetch(`${url}`);
    //console.log("request2: ", request2);
    const person = await request_2.json();
    console.log("person: ", person);
    arr2.push(person);
  }
  arr2.forEach((el, index) => {
    userOBJ[index] = el.name;
    photoOBJ[el.name] = index;
  });
  // console.log("arr2_NAME:", arr2.name);
  //console.log("ARRAY:", arr);
  console.log("ARRAY2:", arr2);
  console.log("userOBJ: ", userOBJ);
  console.log("photoOBJ: ", photoOBJ);
  const result2 = arr2;
  console.log("result22:", result2);
  result2[0].bg = "../src/heroes/luke.jpg";
  result2[1].bg = "1.jpg";
  result2[2].bg = "../src/heroes/R2-D2.jpg";
  result2[3].bg = "../src/heroes/Darth-Vader.jpg";

  result2.forEach(renderSingleUser);
}
