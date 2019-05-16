// 1042. Flower Planting With No Adjacent
// https://leetcode.com/problems/flower-planting-with-no-adjacent/

/*

You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.

paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.

Also, there is no garden that has more than 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.
The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 66.67% of JavaScript online submissions for Flower Planting With No Adjacent.
// Memory Usage: 56.4 MB, less than 100.00% of JavaScript online submissions for Flower Planting With No Adjacent.

// class Garden {
//   constructor() {
//     this.connectedGardens = [];
//     this.flower = '';

//     return this;
//   }

//   connectTo(g) {
//     this.connectedGardens.push(g);
//   }

//   getConnectedGardenFlowers() {
//     return this.connectedGardens.map(g => g.flower);
//   }
// }

// /**
//  * @param {number} N
//  * @param {number[][]} paths
//  * @return {number[]}
//  */
// const gardenNoAdj = (N, paths) => {
//   const gardens = new Array(N);

//   for (let i = 0; i < N; i++) {
//     gardens[i] = new Garden();
//   }

//   // console.log(gardens);
//   // console.log(gardens.length);

//   for (let i = 0; i < paths.length; i++) {
//     const [from, to] = [paths[i][0] - 1, paths[i][1] - 1];
//     gardens[from].connectTo(gardens[to]);
//     gardens[to].connectTo(gardens[from]);
//   }

//   // console.log(gardens);
//   // console.log(gardens.length);

//   for (let i = 0; i < gardens.length; i++) {
//     // console.log(i);
//     // console.log(gardens[i]);
//     if (!gardens[i].getConnectedGardenFlowers().includes(1)) {
//       gardens[i].flower = 1;
//     } else if (!gardens[i].getConnectedGardenFlowers().includes(2)) {
//       gardens[i].flower = 2;
//     } else if (!gardens[i].getConnectedGardenFlowers().includes(3)) {
//       gardens[i].flower = 3;
//     } else if (!gardens[i].getConnectedGardenFlowers().includes(4)) {
//       gardens[i].flower = 4;
//     }
//   }

//   // console.log(gardens);

//   return gardens.map(g => g.flower);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 140 ms, faster than 65.00% of JavaScript online submissions for
// Flower Planting With No Adjacent.
// Memory Usage: 47.1 MB, less than 100.00% of JavaScript online submissions for
// Flower Planting With No Adjacent.

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = (N, paths) => {
  const gardens = new Array(N);

  for (let i = 0; i < N; i++) {
    gardens[i] = {
      flower: '',
      connectedGardens: [],
    };
  }

  paths.forEach(([gn1, gn2]) => {
    const [gi1, gi2] = [gn1 - 1, gn2 - 1];
    gardens[gi1].connectedGardens.push(gardens[gi2]);
    gardens[gi2].connectedGardens.push(gardens[gi1]);
  });

  for (let i = 0; i < gardens.length; i++) {
    const connectedFlowers = gardens[i].connectedGardens.map(g => g.flower);
    for (let j = 1; j < 5; j++) {
      if (!connectedFlowers.includes(j)) {
        gardens[i].flower = j;
        break;
      }
    }
  }

  return gardens.map(g => g.flower);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // G1: G2, G3
  // G2: G1, G3
  // G3: G1, G2
  {
    name: 'Example 1',
    input: {
      N: 3,
      paths: [[1, 2], [2, 3], [3, 1]],
    },
    expected: [1, 2, 3],
  },
  {
    name: 'Example 2',
    input: {
      N: 4,
      paths: [[1, 2], [3, 4]],
    },
    expected: [1, 2, 1, 2],
  },
  {
    name: 'Example 3',
    input: {
      N: 4,
      paths: [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]],
    },
    expected: [1, 2, 3, 4],
  },
];

tests.forEach(({ name, input: { N, paths }, expected }) => {
  console.log(gardenNoAdj(N, paths));
});
