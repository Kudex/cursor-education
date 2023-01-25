const STAR_WARS_URL = "https://swapi.dev/api/";
const input = document.querySelector(".inputFilm");

let arr2 = [];
let arrOfPlanets = [];
let eventData = input.value;
input.addEventListener("input", (event) => {
  eventData = event.data;
});

const container = document.querySelector(".container");
const btnStart = document.querySelector(".getInfo");
btnStart.addEventListener("click", () => {
  getUsers(`/films/${eventData}/`);
});

const btnNext = document.querySelector(".next");
btnNext.addEventListener("click", () => {
  console.log("Planets in this part of film are : ", arrOfPlanets);
});

function renderSingleUser(user) {
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user");
  const dataWrapper = document.createElement("div");
  dataWrapper.classList.add("dataWrapper");
  userWrapper.style.backgroundImage = `url(src/${user.name
    .split(" ")
    .join("")}.jpg)`;
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
}

async function getUsers(url) {
  container.innerHTML = "";
  arr2 = [];
  arrOfPlanets = [];
  const request = await fetch(`${STAR_WARS_URL}${url}`);
  const result = await request.json();
  const users = Object.values(result)[6];
  const planets = Object.values(result.planets);
  for (const url of users) {
    const request_2 = await fetch(`${url}`);
    const person = await request_2.json();
    arr2.push(person);
  }

  for (const url of planets) {
    const request_planets = await fetch(`${url}`);
    const planetURL = await request_planets.json();
    arrOfPlanets.push(planetURL);
  }
  arr2.forEach(renderSingleUser);
}
