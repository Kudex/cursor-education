const STAR_WARS_URL = "https://swapi.dev/api/";
const input = document.querySelector(".inputFilm");
let getPlanet = document.querySelector(".mainwrapper");
const container = document.querySelector(".container");
const btnStart = document.querySelector(".getInfo");
let arr2 = [];
let arrOfPlanets = [];
let filmPath = input.value;
let url = `/films/${filmPath}/`;

input.addEventListener("input", (event) => {
  filmPath = event.data;
});
getPlanet = addEventListener("click", function (el) {
  const { target } = el;
  if (target.innerText == "NEXT>>>") {
    container.innerHTML = "";
    arrOfPlanets.forEach((el) => {
      renderSinglePlanet(el);
    });
  }
});

function renderSinglePlanet(planet) {
  console.log("renderSinglePlanet(planet): ", planet);
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user");
  const dataWrapper = document.createElement("div");
  dataWrapper.classList.add("dataWrapper");
  console.log("Planets user.name : ", planet.name);
  userWrapper.style.backgroundImage = `url(src/${planet.name
    .split(" ")
    .join("")}.jpg)`;
  const planetName = document.createElement("h2");
  planetName.classList.add("user__name");
  planetName.textContent = planet.name;
  const diameter = document.createElement("h3");
  diameter.classList.add("user__birthday");
  diameter.textContent = `D: ${planet.diameter}`;
  const rotation_period = document.createElement("h4");
  rotation_period.classList.add("user__gender");
  rotation_period.textContent = `Period: ${planet.rotation_period}`;
  userWrapper.append(planetName);
  userWrapper.append(dataWrapper);
  dataWrapper.append(diameter);
  dataWrapper.append(rotation_period);
  container.append(userWrapper);
}

btnStart.addEventListener("click", () => {
  url = `/films/${filmPath}/`;
  getUsers(STAR_WARS_URL, url);
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

async function getUsers(STAR_WARS_URL, url) {
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
