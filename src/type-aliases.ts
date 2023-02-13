export {};

type Mojiretsu = string;

const gooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Hum',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Hum',
  age: 43,
};

type Profile2 = typeof example1;