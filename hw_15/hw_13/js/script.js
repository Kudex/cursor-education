// 1
export function hw_13(){

  function* createIdGenerator() {

    let i = 1;
    while (true) {
      yield i++;
      
    console.log(i);
    }
 
  }
  const gen = createIdGenerator();
  console.log(gen);
};
hw_13();