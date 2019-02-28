// 999. Available Captures for Rook
// https://leetcode.com/problems/available-captures-for-rook/

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
    // console.log(direction);
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

  // const boardMap = boardToMap(board);
  // console.log(boardMap);

  const rookCoords = findPiece(board, 'R');
  // console.log(rookCoords);

  const whatsAboveRook = whatsInDirection(board, rookCoords, 'up');
  // console.log(whatsAboveRook);
  const whatsBelowRook = whatsInDirection(board, rookCoords, 'down');
  // console.log(whatsBelowRook);
  const whatsToLeftOfRook = whatsInDirection(board, rookCoords, 'left');
  // console.log(whatsToLeftOfRook);
  const whatsToRightOfRook = whatsInDirection(board, rookCoords, 'right');
  // console.log(whatsToRightOfRook);

  const sortedUpwardSquares = sortedSquareMapForMovement(whatsAboveRook, 'up');
  // console.log(sortedUpwardSquares);
  const sortedDownwardSquares = sortedSquareMapForMovement(whatsBelowRook, 'down');
  // console.log(sortedDownwardSquares);
  const sortedLeftwardSquares = sortedSquareMapForMovement(whatsToLeftOfRook, 'left');
  // console.log(sortedLeftwardSquares);
  const sortedRightwardSquares = sortedSquareMapForMovement(whatsToRightOfRook, 'right');
  // console.log(sortedRightwardSquares);

  const firstPieceAbove = coalesceSquareMapContents(sortedUpwardSquares);
  // console.log(firstPieceAbove);
  const firstPieceBelow = coalesceSquareMapContents(sortedDownwardSquares);
  // console.log(firstPieceBelow);
  const firstPieceLeftward = coalesceSquareMapContents(sortedLeftwardSquares);
  // console.log(firstPieceLeftward);
  const firstPieceRightWard = coalesceSquareMapContents(sortedRightwardSquares);
  // console.log(firstPieceRightWard);

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
