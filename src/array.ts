export {};

let numbers: number[] = [1, 2, 3];

// 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3,];
let strings2: Array<string> = ['a', 'b', 'c'];

let strings: string[] = ['TypeScript', 'JavaScript', 'coffeeScript'];

let nijigenHairetsu: number[][] = [
[50, 100],
[150, 200]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];

console.log({ numbers, numbers2 });
console.log({ strings, strings2 });