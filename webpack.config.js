const path = require('path');

const entry = [
  './app.js',
  './ts/VirtualGameBoard.js',
  './ts/Selection.js',
  './ts/CustomTypes.js',
  './ts/Piece.js',
  './ts/King.js',
  './ts/Bishop.js',
  './ts/BlackBishop.js',
  './ts/BlackKnight.js',
  './ts/BlackQueen.js',
  './ts/BlackRook.js',
  './ts/GameBoard.js',
  './ts/Knight.js',
  './ts/Pawn.js',
  './ts/Rook.js',
  './ts/WhiteBishop.js',
  './ts/WhiteKnight.js',
  './ts/WhiteQueen.js',
  './ts/WhiteRook.js',
];

module.exports = {
  entry: entry, // Array of entry points
  output: {
    filename: 'bundle.js', // The name of the output bundle file
    path: path.resolve(__dirname, 'dist'), // The path to the output directory
  },
};
