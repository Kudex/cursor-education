function hw_10() {
  const keys = document.querySelectorAll(".key");
  let isPressed = false;
  function classActivator(key) {
    return (
      (isPressed = true),
      keys.forEach((key) => {
        key.classList.remove("plaing");
      }),
      key.classList.add("plaing")
    );
  }
  classActivator(key);
}
hw_10();
