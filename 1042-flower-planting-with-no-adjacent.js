// 1042. Flower Planting With No Adjacent
// https://leetcode.com/problems/flower-planting-with-no-adjacent/

/*

You have N gardens, labelled 1 to N.  In each garden, you want to plant
one of 4 types of flowers.

paths[i] = [x, y] describes the existence of a bidirectional path
from garden x to garden y.

Also, there is no garden that has more than 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that,
for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is
the type of flower planted in the (i+1)-th garden.
The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 66.67% of JavaScript online submissions
// Memory Usage: 56.4 MB, less than 100.00% of JavaScript online submissions

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

// Runtime: 140 ms, faster than 65.00% of JavaScript online submissions
// Memory Usage: 47.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @param {number[][]} paths
//  * @return {number[]}
//  */
// const gardenNoAdj = (N, paths) => {
//   const gardens = new Array(N);

//   for (let i = 0; i < N; i++) {
//     gardens[i] = {
//       flower: '',
//       connectedGardens: [],
//     };
//   }

//   paths.forEach(([gn1, gn2]) => {
//     const [gi1, gi2] = [gn1 - 1, gn2 - 1];
//     gardens[gi1].connectedGardens.push(gardens[gi2]);
//     gardens[gi2].connectedGardens.push(gardens[gi1]);
//   });

//   for (let i = 0; i < gardens.length; i++) {
//     const connectedFlowers = gardens[i].connectedGardens.map(g => g.flower);
//     for (let j = 1; j < 5; j++) {
//       if (!connectedFlowers.includes(j)) {
//         gardens[i].flower = j;
//         break;
//       }
//     }
//   }

//   return gardens.map(g => g.flower);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 89.01% of JavaScript online submissions
// Memory Usage: 54.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @param {number[][]} paths
//  * @return {number[]}
//  */
// const gardenNoAdj = (N, paths) => {
//   const gardens = new Array(N + 1).fill().map(_ => ({
//     flower: '',
//     connectedGardens: [],
//   }));

//   for (const [a, b] of paths) {
//     gardens[a].connectedGardens.push(gardens[b]);
//     gardens[b].connectedGardens.push(gardens[a]);
//   }

//   const flowers = [...new Array(4).keys()].map(f => f + 1);

//   for (const garden of gardens.slice(1))
//     for (const flower of flowers)
//       if (!garden.connectedGardens.map(g => g.flower).includes(flower)) {
//         garden.flower = flower;
//         break;
//       }

//   return gardens.slice(1).map(g => g.flower);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 188 ms, faster than 41.76% of JavaScript online submissions
// Memory Usage: 58.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @param {number[][]} paths
//  * @return {number[]}
//  */
// const gardenNoAdj = (N, paths) => {
//   const gardens = Object.assign({}, [
//     ,
//     ...new Array(N).fill().map(_ => ({
//       flower: '',
//       connectedGardens: [],
//     })),
//   ]);

//   for (const [a, b] of paths) {
//     gardens[a].connectedGardens.push(gardens[b]);
//     gardens[b].connectedGardens.push(gardens[a]);
//   }

//   const flowers = [...new Array(4).keys()].map(f => f + 1);

//   for (const g in gardens)
//     for (const f of flowers)
//       if (!gardens[g].connectedGardens.map(cg => cg.flower).includes(f)) {
//         gardens[g].flower = f;
//         break;
//       }

//   return Object.entries(gardens).map(([_, { flower }]) => flower);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 232 ms, faster than 25.27% of JavaScript online submissions
// Memory Usage: 74.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = (N, paths) => {
  const gardens = new Map(
    [...new Array(N).keys()].map(g => [
      g + 1,
      {
        flower: '',
        connectedGardens: [],
      },
    ]),
  );

  for (const [a, b] of paths) {
    gardens.get(a).connectedGardens.push(gardens.get(b));
    gardens.get(b).connectedGardens.push(gardens.get(a));
  }

  const flowers = [...new Array(4).keys()].map(f => f + 1);

  for (const [_, g] of gardens)
    for (const f of flowers)
      if (!g.connectedGardens.map(cg => cg.flower).includes(f)) {
        g.flower = f;
        break;
      }

  return [...gardens.entries()].map(([_, { flower }]) => flower);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  gardenNoAdj(3, [
    [1, 2],
    [2, 3],
    [3, 1],
  ]),
  [1, 2, 3],
);
// G1: G2, G3
// G2: G1, G3
// G3: G1, G2

deepStrictEqual(
  gardenNoAdj(4, [
    [1, 2],
    [3, 4],
  ]),
  [1, 2, 1, 2],
);

deepStrictEqual(
  gardenNoAdj(4, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [1, 3],
    [2, 4],
  ]),
  [1, 2, 3, 4],
);
