


export function hw_09(){
  const wrapper = document.querySelector(".wrapper");
  const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
      const block = document.createElement("div");
      block.className = "blocks";
      block.style.height = "50px";
      block.style.width = "50px";
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      block.style.backgroundColor = `rgb(${r},${g},${b})`;
      wrapper.appendChild(block);
    }
  };
  
  const deleteBlocks = () => {
    const blocks = document.querySelectorAll(".blocks");
    blocks.forEach((block) => {
      block.remove();
    });
  };
  
  const generateBlocksInterval = () => {
    generateBlocks();
    const interval = setInterval(() => {
      deleteBlocks();
      generateBlocks();
    }, 1000);
    return interval;
  };
  
  generateBlocksInterval();
  
  const btn = document.querySelector(".btn");
  const colors = ["red", "green", "blue", "#ba94de", "#88a4de"];
  
  btn.addEventListener("click", () => {
    onBtnPress();
  });
  
  function onBtnPress() {
    const randomColor = Math.floor(Math.random() * (colors.length + 1));
    document.body.style.backgroundColor = colors[randomColor];
  }
  
};
hw_09();
