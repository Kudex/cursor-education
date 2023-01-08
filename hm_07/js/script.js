const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 //
const getMyTaxes = function(salary){
return (this.tax * salary).toFixed(1);
};
console.log( "Податок в Україні:",getMyTaxes.call(ukraine,1789));

// 2 //
const getMiddleTaxes = function(){
  return (this.tax * this.middleSalary).toFixed(1);
};
console.log( "Податок в Україні:", getMiddleTaxes.call(ukraine));
console.log( "Податок у Латвії:", getMiddleTaxes.call(latvia));
console.log( "Податок у Литві:", getMiddleTaxes.call(litva));

// 3 //

const getTotalTaxes = function(){
  return (this.tax * this.middleSalary*this.vacancies).toFixed(1);
};

console.log( "Податок від всієї IT-сфери в Україні:", getTotalTaxes.call(ukraine));
console.log( "Податок від всієї IT-сфери у Латвії:", getTotalTaxes.call(latvia));
console.log( "Податок від всієї IT-сфери у Литві:", getTotalTaxes.call(litva));

// 4 //

function getMySalary() {
  let result = {};
  result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
  result.taxes = (this.tax * result.salary).toFixed(0);
  result.profit = result.salary - result.taxes;
  return result;
};

const interval = setInterval( () => console.log("Зарплатня: ", getMySalary.call(litva)), 1000);