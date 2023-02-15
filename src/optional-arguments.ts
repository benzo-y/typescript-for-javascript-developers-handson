export {};

let bim: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bim: number = weight / (height * height);
  if (printable) {
    console.log({ bim });
  }
  return bim;
};

bim(1.78, 86);

// bmi(身長, 体重, console.logで出力するかどうか？)
// bim(1.78, 86, true);
// bim(1.78, 86, false);
// bim(1.78, 86);
