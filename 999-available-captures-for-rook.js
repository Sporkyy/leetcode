// 999. Available Captures for Rook
// https://leetcode.com/problems/available-captures-for-rook/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {character[][]} board
 * @return {number}
 */
// const numRookCaptures = board => {
//   const getRow = (board, rowNum) => board[rowNum];
//   const getColumn = (board, columnNum) =>
//     board.reduce(
//       (column, row) => [
//         ...column,
//         row.reduce((piece, curr, rowI) => (!piece && rowI === columnNum ? curr : piece), undefined)
//       ],
//       []
//     );
//   const rookCoords = board.reduce(
//     (position, row, rowI) => ({
//       x: !position.x && row.includes('R') ? row.indexOf('R') : position.x,
//       y: !position.y && row.includes('R') ? rowI : position.y
//     }),
//     {
//       x: undefined,
//       y: undefined
//     }
//   );
//   const isPiece = squareContents => '.' !== squareContents;
//   const pieceUpward = (board, coords) =>
//     getColumn(board, coords.x)
//       .slice(0, coords.y)
//       .reverse()
//       .reduce(
//         (answer, squareContents) => (!answer && isPiece(squareContents) ? squareContents : answer),
//         undefined
//       );
//   const pieceDownward = (board, { x, y }) =>
//     y < board.length
//       ? getColumn(board, x)
//           .slice(y + 1)
//           .reduce(
//             (answer, squareContents) =>
//               !answer && isPiece(squareContents) ? squareContents : answer,
//             undefined
//           )
//       : undefined;
//   console.log(rookCoords);
//   console.log(getRow(board, rookCoords.y));
//   console.log(getColumn(board, rookCoords.x));
//   console.log(pieceUpward(board, rookCoords));
//   console.log(pieceDownward(board, rookCoords));
//   // console.log(pieceLeftward(board, rookCoords));
//   // console.log(pieceRightward(board, rookCoords));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {character[][]} board
 * @return {number}
 */
// const numRookCaptures = board => {
//   const squaresMap = board.reduce(
//     (map, row, i) => ({
//       ...map,
//       ...row.reduce(
//         (rowMap, squareContents, j) => ({
//           ...rowMap,
//           [`${String.fromCharCode(97 + j)}${8 - i}`]: squareContents
//         }),
//         {}
//       )
//     }),
//     {}
//   );
//   const objectFromEntries = entries =>
//     entries.reduce((acc, [name, value]) => ({ ...acc, [name]: value }), {});
//   // const isPiece = squareContents => '.' !== squareContents;
//   // const isFriend = piece => /[A-Z]/.test(piece);
//   // const isFoe = piece => /[a-z]/.test(piece);
//   // const rowName = coords => coords.split('')[1];
//   // const colName = coords => coords.split('')[0];
//   // const rowContents = (boardMap, rowName) =>
//   //   objectFromEntries(Object.entries(boardMap).filter(entry => rowName === entry[0].split('')[1]));
//   // const colContents = (boardMap, colName) =>
//   //   objectFromEntries(Object.entries(boardMap).filter(entry => colName === entry[0].split('')[0]));
//   const rookCoords = boardMap =>
//     Object.entries(boardMap).reduce(
//       (answer, [coords, contents]) => (!answer && 'R' === contents ? coords : answer),
//       undefined
//     );
//   const squaresInDirection = (boardMap, start, direction) => {
//     const [startColName, startRowName] = start.split('');
//     return Object.entries(boardMap).reduce((acc, [coords, content]) => {
//       const [colName, rowName] = coords.split('');
//       let comparisonResult;
//       switch (direction) {
//         case 'up':
//           comparisonResult =
//             startColName === colName && parseInt(startRowName, 10) < parseInt(rowName, 10);
//           break;
//         case 'down':
//           comparisonResult =
//             startColName === colName && parseInt(rowName, 10) < parseInt(startRowName, 10);
//           break;
//         case 'left':
//           comparisonResult = colName < startColName && startRowName === rowName;
//           break;
//         case 'right':
//           comparisonResult = startColName < colName && startRowName === rowName;
//           break;
//       }
//       return comparisonResult ? { ...acc, [coords]: content } : acc;
//     }, {});
//   };
//   const squaresUpward = (boardMap, start) => squaresInDirection(boardMap, start, 'up');
//   const squaresDownward = (boardMap, start) => squaresInDirection(boardMap, start, 'down');
//   const squaresLeftward = (boardMap, start) => squaresDownward(boardMap, start, 'left');
//   const squaresRightward = (boardMap, start) => squaresInDirection(boardMap, start, 'right');

//   const squareContentsByDirection = (squaresMap, start, direction) => {
//     const squares = squaresInDirection(squaresMap, start, direction);
//     Object.entries(squares).reduce((acc, [coords, contents]) => {}, []);
//   };

//   const firstPieceInDirection = (boardMap, start, direction) => {
//     const squares = squaresInDirection(boardMap, start, direction);
//   };

//   // const rowNameToArrayIndex = rowName => 8 - parseInt(rowName, 10);
//   // const colNameToArrayIndex = colName => parseInt(97 + colName.charCodeAt(0));
//   // const sliceColEntries = (colEntries, startRowName, endRowName) =>
//   //   colEntries.slice(
//   //     rowNameToArrayIndex(startRowName),
//   //     rowNameToArrayIndex(endRowName) || colEntries.length
//   //   );
//   // const pieceUpward = (boardMap, coords) =>
//   //   sliceColEntries(Object.entries(colContents(boardMap, colName(coords))), 0, colName(coords));
//   // console.log(boardMap);
//   // console.log(rowContents(boardMap, rowName(rookCoords)));
//   // console.log(colContents(boardMap, colName(rookCoords)));
//   // console.log(pieceUpward(boardMap, rookCoords));
//   // console.log(pieceDownward(board, rookCoords));
//   // console.log(pieceLeftward(board, rookCoords));
//   // console.log(pieceRightward(board, rookCoords));

//   console.log(rookCoords(squaresMap));
//   console.log(squaresUpward(squaresMap, rookCoords(squaresMap)));
//   console.log(squareContentsByDirection(squaresUpward(squaresMap, rookCoords(squaresMap)), 'up'));
//   console.log(squaresDownward(squaresMap, rookCoords(squaresMap)));
//   console.log(squaresLeftward(squaresMap, rookCoords(squaresMap)));
//   console.log(squaresRightward(squaresMap, rookCoords(squaresMap)));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = board => {
  const boardToMap = board =>
    board.reduce((map, row, i) => {
      row.forEach((squareContents, j) => {
        map.set(`${String.fromCharCode(97 + j)}${8 - i}`, squareContents);
      });
      return map;
    }, new Map());

  const findPieces = (board, piece) => {
    let pieceCoords = [];
    for (const [squareCoords, squareContents] of boardToMap(board)) {
      if (squareContents === piece) {
        pieceCoords.push(squareCoords);
      }
    }
    return pieceCoords;
  };

  const findPiece = (board, piece) => {
    const boardCoords = findPieces(board, piece);
    if (0 === boardCoords.length) return null;
    return boardCoords[0];
  };

  const whatsInDirection = (board, start, direction) => {
    const [startColName, startRowName] = start.split('');
    let mapToReturn = new Map();
    for (const [boardCoords, boardSquareContent] of boardToMap(board)) {
      const [boardColName, boardRowName] = boardCoords.split('');
      let comparisonResult;
      switch (direction) {
        case 'up':
          comparisonResult =
            startColName === boardColName &&
            parseInt(startRowName, 10) < parseInt(boardRowName, 10);
          break;
        case 'down':
          comparisonResult =
            startColName === boardColName &&
            parseInt(boardRowName, 10) < parseInt(startRowName, 10);
          break;
        case 'left':
          comparisonResult = boardColName < startColName && startRowName === boardRowName;
          break;
        case 'right':
          comparisonResult = startColName < boardColName && startRowName === boardRowName;
          break;
      }
      if (comparisonResult) {
        mapToReturn.set(boardCoords, boardSquareContent);
      }
    }
    return mapToReturn;
  };

  const sortedSquareMapForMovement = (squareMap, direction) => {
    let sortedSquareCoords = [];
    let mapToReturn = new Map();
    for (const coords of squareMap.keys()) {
      sortedSquareCoords.push(coords);
    }
    console.log(direction);
    sortedSquareCoords.sort((aCoords, bCoords) => {
      const [aColName, aRowName] = aCoords.split('');
      const [bColName, bRowName] = bCoords.split('');
      switch (direction) {
        case 'up':
          return parseInt(aRowName, 10) < parseInt(bRowName, 10)
            ? -1
            : parseInt(bRowName, 10) < parseInt(aRowName, 10)
            ? 1
            : 0;
        case 'down':
          return parseInt(aRowName, 10) < parseInt(bRowName, 10)
            ? 1
            : parseInt(bRowName, 10) < parseInt(aRowName, 10)
            ? -1
            : 0;
        case 'left':
          return aColName < bColName ? 1 : bColName < aColName ? -1 : 0;
        case 'right':
          return aColName < bColName ? -1 : bColName < aColName ? 1 : 0;
      }
    });

    for (const coords of sortedSquareCoords) {
      mapToReturn.set(coords, squareMap.get(coords));
    }

    return mapToReturn;
  };

  const isPiece = squareContents => '.' !== squareContents;

  const coalesceSquareMapContents = squareMap => {
    let coalescedContent;
    for (const entry of squareMap) {
      const squareContent = entry[1];
      if (isPiece(squareContent)) {
        coalescedContent = squareContent;
        break;
      }
    }
    return coalescedContent;
  };

  const isFoe = piece => piece && isPiece(piece) && /[a-z]/.test(piece);

  const boardMap = boardToMap(board);
  console.log(boardMap);

  const rookCoords = findPiece(board, 'R');
  console.log(rookCoords);

  const whatsAboveRook = whatsInDirection(board, rookCoords, 'up');
  console.log(whatsAboveRook);
  const whatsBelowRook = whatsInDirection(board, rookCoords, 'down');
  console.log(whatsBelowRook);
  const whatsToLeftOfRook = whatsInDirection(board, rookCoords, 'left');
  console.log(whatsToLeftOfRook);
  const whatsToRightOfRook = whatsInDirection(board, rookCoords, 'right');
  console.log(whatsToRightOfRook);

  const sortedUpwardSquares = sortedSquareMapForMovement(whatsAboveRook, 'up');
  console.log(sortedUpwardSquares);
  const sortedDownwardSquares = sortedSquareMapForMovement(whatsBelowRook, 'down');
  console.log(sortedDownwardSquares);
  const sortedLeftwardSquares = sortedSquareMapForMovement(whatsToLeftOfRook, 'left');
  console.log(sortedLeftwardSquares);
  const sortedRightwardSquares = sortedSquareMapForMovement(whatsToRightOfRook, 'right');
  console.log(sortedRightwardSquares);

  const firstPieceAbove = coalesceSquareMapContents(sortedUpwardSquares);
  console.log(firstPieceAbove);
  const firstPieceBelow = coalesceSquareMapContents(sortedDownwardSquares);
  console.log(firstPieceBelow);
  const firstPieceLeftward = coalesceSquareMapContents(sortedLeftwardSquares);
  console.log(firstPieceLeftward);
  const firstPieceRightWard = coalesceSquareMapContents(sortedRightwardSquares);
  console.log(firstPieceRightWard);

  let answer = 0;
  if (isFoe(firstPieceAbove)) {
    answer++;
  }
  if (isFoe(firstPieceBelow)) {
    answer++;
  }
  if (isFoe(firstPieceLeftward)) {
    answer++;
  }
  if (isFoe(firstPieceRightWard)) {
    answer++;
  }

  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', 'R', '.', '.', '.', 'p'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ],
    expected: 3
  },
  {
    name: 'Example 2',
    input: [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ],
    expected: 0
  },
  {
    name: 'Example 3',
    input: [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'B', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ],
    expected: 3
  }
];

tests.forEach(({ name, input, expected }) => {
  const result = numRookCaptures(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Got ${result} but expected ${expected}`);
  }
});
