export {};

let bim: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bim(1.78, 86));
