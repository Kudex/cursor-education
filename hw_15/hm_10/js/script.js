const keys = document.querySelectorAll(".key");
let isPressed = false;

export function press() {
  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyA") {
      console.log("A is pressed");
    } else {
      console.log("Not A is pressed");
    }
  });
}
press();
