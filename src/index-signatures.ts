export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: tyoeFOrValue }

profile.name = 'Hum';
profile.age = 43;
profile.nationality = 'Japan';
