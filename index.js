// 1. String with farm animal names
const farmAnimals = 'cow horse sheep pig chicken';

// 2. Array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 3. Object representing a muppet
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 4. Nested object representing a muppet
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructuring

// 1. Destructure farm animal names into individual variables
const [bessie, horse, dolly, babe, little] = farmAnimals.split(' ');

// Use sounds related to animals
const animalSounds = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Traditional animal colors (repeating from context)
const animalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};
const { blackAndWhite, black, pink } = animalColors;

// 2. Destructure rainbow colors into individual variables
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 3. Destructure rainbow colors into initials
const [r, o, y, g, b, i, v] = [red, orange, yellow, green, blue, indigo, violet];

// 4. Destructure indigo color using 'indg'
const [, , , , , indg] = colors;

// 5. Destructure muppet properties
const { muppetName, color, song, job, partner } = muppet;

// 6. Destructure nestedMuppet properties
const {
  nestedName,
  nestedColor,
  album: {
    theMuppetMovie: {
      song1,
      song2,
      song3,
      song4,
    },
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;