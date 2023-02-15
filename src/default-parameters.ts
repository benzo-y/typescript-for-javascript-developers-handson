export {};

const nextYearSalary = (curentSalary: number, rate: number = 1.1) => {
  return curentSalary * rate;
};

console.log(nextYearSalary(1000));
