export function hw_11(){

  function getSliceOfSymbols() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = Date.now().toString().slice(-5);
        resolve(String.fromCharCode(data));
      }, 50);
    });
  }
  
  async function getRandomChinese(length) {
    let result = "";
    for (let i = 0; i <= length; i++) {
      result += await getSliceOfSymbols(length);
    }
  
    return console.log("result: ", result);
  }
  return getRandomChinese(4);
  
};

hw_11();
