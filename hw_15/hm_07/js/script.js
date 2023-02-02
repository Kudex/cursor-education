export function hw_07(){

  const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
  const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
  const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
  
  // 1 //
  const getMyTaxes = function(salary){
  return console.log((this.tax * salary).toFixed(1));
  };
  
  
  
  getMyTaxes.call(ukraine,1789);
};

hw_07();
