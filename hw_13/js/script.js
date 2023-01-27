// 1
function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const idGenerator = createIdGenerator();

// 2
let fontSize = 14;
const btnUp = document.querySelector(".up");
const btnNone = document.querySelector(".none");
const btnDown = document.querySelector(".down");
const text = document.querySelector(".text");
const fontSizeGenerator = FontSizeGen();
function* FontSizeGen(size = 14) {
  let value = yield size;
  while (true) {
    if (value === "up") {
      size += 2;
      value = yield size;
    } else if (value === "down") {
      size -= 2;
      value = yield size;
    } else {
      size = size;
      value = yield size;
    }
  }
}
btnUp.addEventListener("click", () => {
  fontSize = fontSizeGenerator.next().value;
  fontSize = fontSizeGenerator.next("up").value;
  text.style.fontSize = fontSize + "px";
  text.textContent = `Font Size Area is: ${fontSize} px`;
});
btnDown.addEventListener("click", () => {
  fontSize = fontSizeGenerator.next().value;
  fontSize = fontSizeGenerator.next("down").value;
  text.style.fontSize = fontSize + "px";
  text.textContent = `Font Size Area is: ${fontSize} px`;
});
btnNone.addEventListener("click", () => {
  fontSize = fontSizeGenerator.next().value;
  text.style.fontSize = fontSize + "px";
  text.textContent = `Font Size Area still: ${fontSize} px`;
});
