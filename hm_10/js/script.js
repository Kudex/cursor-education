window.addEventListener("DOMContentLoaded", (event) => {
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
  function pressKeyUp(key) {
    return document.addEventListener("keyup", (e) => {
      keys.forEach((key) => {
        key.classList.remove("plaing");
      });
      if (e.code === key) {
        isPressed = false;
      }
    });
  }
  keys.forEach((key) => {
    key.addEventListener("click", (event) => {
      const { target } = event;
      classActivator(key);
      const key_65 = target.className.includes("65");
      const key_83 = target.className.includes("83");
      const key_68 = target.className.includes("68");
      const key_70 = target.className.includes("70");
      const key_71 = target.className.includes("71");
      const key_72 = target.className.includes("72");
      const key_74 = target.className.includes("74");
      const key_75 = target.className.includes("75");
      const key_76 = target.className.includes("76");
      if (key_65) {
        const audio = new Audio();
        audio.src = "src/audio/boom.wav";
        audio.autoplay = true;
      } else if (key_83) {
        const audio = new Audio();
        audio.src = "src/audio/clap.wav";
        audio.autoplay = true;
      } else if (key_68) {
        const audio = new Audio();
        audio.src = "src/audio/hihat.wav";
        audio.autoplay = true;
      } else if (key_70) {
        const audio = new Audio();
        audio.src = "src/audio/kick.wav";
        audio.autoplay = true;
      } else if (key_71) {
        const audio = new Audio();
        audio.src = "src/audio/openhat.wav";
        audio.autoplay = true;
      } else if (key_72) {
        const audio = new Audio();
        audio.src = "src/audio/ride.wav";
        audio.autoplay = true;
      } else if (key_74) {
        const audio = new Audio();
        audio.src = "src/audio/snare.wav";
        audio.autoplay = true;
      } else if (key_75) {
        const audio = new Audio();
        audio.src = "src/audio/tink.wav";
        audio.autoplay = true;
      } else if (key_76) {
        const audio = new Audio();
        audio.src = "src/audio/tom.wav";
        audio.autoplay = true;
      }
    });
    document.addEventListener("keydown", (e) => {
      if (isPressed) {
        return;
      }
      if (e.code === "KeyA") {
        const keyA = document.querySelector("#A65");
        classActivator(keyA);
        const audio = new Audio();
        audio.src = "src/audio/boom.wav";
        audio.autoplay = true;
        pressKeyUp("KeyA");
      } else if (e.code === "KeyS") {
        const keyS = document.querySelector("#S83");
        classActivator(keyS);
        const audio = new Audio();
        audio.src = "src/audio/clap.wav";
        audio.autoplay = true;
        pressKeyUp("KeyS");
      } else if (e.code === "KeyD") {
        const keyD = document.querySelector("#D68");
        classActivator(keyD);
        const audio = new Audio();
        audio.src = "src/audio/hihat.wav";
        audio.autoplay = true;
        pressKeyUp("KeyD");
      } else if (e.code === "KeyF") {
        const keyF = document.querySelector("#F70");
        classActivator(keyF);
        const audio = new Audio();
        audio.src = "src/audio/kick.wav";
        audio.autoplay = true;
        pressKeyUp("KeyF");
      } else if (e.code === "KeyG") {
        const keyG = document.querySelector("#G71");
        classActivator(keyG);
        const audio = new Audio();
        audio.src = "src/audio/openhat.wav";
        audio.autoplay = true;
        pressKeyUp("KeyG");
      } else if (e.code === "KeyH") {
        const keyH = document.querySelector("#H72");
        classActivator(keyH);
        const audio = new Audio();
        audio.src = "src/audio/ride.wav";
        audio.autoplay = true;
        pressKeyUp("KeyH");
      } else if (e.code === "KeyJ") {
        const keyJ = document.querySelector("#J74");
        classActivator(keyJ);
        const audio = new Audio();
        audio.src = "src/audio/snare.wav";
        audio.autoplay = true;
        pressKeyUp("KeyJ");
      } else if (e.code === "KeyK") {
        const keyK = document.querySelector("#K75");
        classActivator(keyK);
        const audio = new Audio();
        audio.src = "src/audio/tink.wav";
        audio.autoplay = true;
        pressKeyUp("KeyK");
      } else if (e.code === "KeyL") {
        const keyL = document.querySelector("#L76");
        classActivator(keyL);
        const audio = new Audio();
        audio.src = "src/audio/tom.wav";
        audio.autoplay = true;
        pressKeyUp("KeyL");
      }
    });
  });
});
