
export function hw_12(){
  const STAR_WARS_URL = "https://swapi.dev/api/";
  const input = document.querySelector(".inputFilm");
  let getPlanet = document.querySelector(".mainwrapper");
  const container = document.querySelector(".container");
  const btnStart = document.querySelector(".getInfo");
  let arrOfPlanets = ["Nuri","test"];
  let filmPath = input.value;
  let url = `/films/${filmPath}/`;
      container.innerHTML = "";
      arrOfPlanets.forEach((el) => {
        renderSinglePlanet(el);
        console.log(el);
      });
  function renderSinglePlanet(planet) {
    const userWrapper = document.createElement("div");
    userWrapper.classList.add("user");
    const dataWrapper = document.createElement("div");
    dataWrapper.classList.add("dataWrapper");
  
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
};
hw_12();

