import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';
import { King } from './King.js';
import { Queen } from './Queen.js';
import { WhiteQueen } from './WhiteQueen.js';
import { appVirtualGameBoard } from '../app.js';
import { BlackQueen } from './BlackQueen.js';
import { WhiteRook } from './WhiteRook.js';
import { WhiteBishop } from './WhiteBishop.js';
import { WhiteKnight } from './WhiteKnight.js';
import { BlackRook } from './BlackRook.js';
import { BlackBishop } from './BlackBishop.js';
import { BlackKnight } from './BlackKnight.js';
import { selectFigure } from './Selection.js';

export class Pawn extends Piece {
  // indexes of free spaces to allocate pawns to
  // if lengths reach 0, no more pawns can be created of that color
  static freeIndexesWhite = [48, 49, 50, 51, 52, 53, 54, 55];
  static freeIndexesBlack = [8, 9, 10, 11, 12, 13, 14, 15];

  hasTakenEnPassant = false;

  constructor(color: CustomTypes.Color) {
    super(
      color,
      color === 'BLACK'
        ? CustomTypes.Img.BLACK_PAWN
        : CustomTypes.Img.WHITE_PAWN,
      CustomTypes.PieceType.PAWN
    );


    // arrayOfPawnsToBeCreated - either freeIndexesWhite OR  freeIndexesBlack
    const arrayOfPawnsToBeCreated =
      color === 'BLACK' ? Pawn.freeIndexesBlack : Pawn.freeIndexesWhite;
    this.appendPieceToBoard(arrayOfPawnsToBeCreated.pop() as number);
  }

  canTakeEnPassant(direction: 'LEFT' | 'RIGHT') {
    let row = Math.floor(this.currentIndex / 8);
    let column = Math.floor(this.currentIndex % 8);
    //it can only do it once
    if(this.hasTakenEnPassant === true) return false;

    // console.log('CANTAKE, row', row);
    

    // for white pawn, check if is in the right row
    if((this.pieceColor === 'WHITE' && row === 3) || (this.pieceColor === 'BLACK' && row === 4)) {
      // check if it can even go left
      if(direction === 'LEFT' && column !== 0) {
        if(!VirtualGameBoard.isFieldEmpty(this.currentIndex - 1)) {
            let suspectedPawnIndex = VirtualGameBoard.findPieceInVirtualBoard(this.currentIndex - 1);
            // checks if it's a pawn that is taken into consideration to takeEnPass

            //checks if the pawn on the left really moved twofold and that it's the piece that moved as the last one
            if(Piece.lastMoved.pieceType === CustomTypes.PieceType.PAWN && Piece.lastMoved.doneMoves === 1 && Piece.lastMoved === VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][suspectedPawnIndex][0]) {
              return true;
            }
        }
      }
      // check if it can go right
      else if(direction === 'RIGHT' && column != 7){
        if(!VirtualGameBoard.isFieldEmpty(this.currentIndex + 1)) {
          let suspectedPawnIndex = VirtualGameBoard.findPieceInVirtualBoard(this.currentIndex + 1);
          // checks if it's a pawn that is taken into consideration to takeEnPass

          //checks if the pawn on the left really moved twofold and that it's the piece that moved as the last one
          if(Piece.lastMoved.pieceType === CustomTypes.PieceType.PAWN && Piece.lastMoved.doneMoves === 1 && Piece.lastMoved === VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][suspectedPawnIndex][0]) {
            return true;
          }
      }
      }
    }

    return false;
  }

  changeIntoQueen(this: Pawn, figure: CustomTypes.PieceType) {
    let pawnIndexInAppVirtualGameBoard: number = 0;

    for(let i = 0; i < appVirtualGameBoard.length; i++) {
        console.log('porownanie:', appVirtualGameBoard[i][0] === this);
        console.log('i:',i);
        
        if(appVirtualGameBoard[i][0] === this) {
            pawnIndexInAppVirtualGameBoard = i;
            console.log('WPADLO W IFA', i);
            console.log('appVirtualGameBoard, ', [...appVirtualGameBoard])
            break;
        }
    }

    // const selectedFigure = new Promise(resolve => {
    //   resolve(selectFigure());
    // });
    // let selectedFigure = CustomTypes.PieceType;
   

    // selectedFigure.then(data => {
    // });
    console.log('figure', figure);

   

    // selectedFigure.then(figure => {

      if(this.pieceColor === 'WHITE') {
        switch(figure){
          case CustomTypes.PieceType.QUEEN:
            WhiteQueen.freeIndexes.push(this.currentIndex);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard] = [new WhiteQueen(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]];
            appVirtualGameBoard.push([new WhiteQueen(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
          break;
          case CustomTypes.PieceType.ROOK:
            WhiteRook.freeIndexes.push(this.currentIndex);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new WhiteRook();
            appVirtualGameBoard.push([new WhiteRook(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
          break;
          case CustomTypes.PieceType.BISHOP:
            WhiteBishop.freeIndexes.push(this.currentIndex);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new WhiteBishop();
            appVirtualGameBoard.push([new WhiteBishop(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
          break;
          case CustomTypes.PieceType.KNIGHT:
            WhiteKnight.freeIndexes.push(this.currentIndex);
            appVirtualGameBoard.push([new WhiteKnight(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new WhiteKnight();
          break;
          }
      }
      else {
        console.log('ELSE - BLACK', figure);
        switch(figure){
          case CustomTypes.PieceType.QUEEN:
            console.log('BLACK QUEEN');
            console.log('pawnIndexInAppVirtualGameBoard: ', pawnIndexInAppVirtualGameBoard);
            console.log('appVirtualGameBoard: ', appVirtualGameBoard);
            BlackQueen.freeIndexes.push(this.currentIndex);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new BlackQueen();
            appVirtualGameBoard.push([new BlackQueen(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
          break;
          case CustomTypes.PieceType.ROOK:
            console.log('BLACK ROOK');
            BlackRook.freeIndexes.push(this.currentIndex);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new BlackRook();
            appVirtualGameBoard.push([new BlackRook(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
          break;
          case CustomTypes.PieceType.BISHOP:
            console.log('BLACK BISHOP');
            BlackBishop.freeIndexes.push(this.currentIndex);
            appVirtualGameBoard.push([new BlackBishop(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new BlackBishop();
          break;
          case CustomTypes.PieceType.KNIGHT:
            console.log('BLACK KNIGHT');
            BlackKnight.freeIndexes.push(this.currentIndex);
            appVirtualGameBoard.push([new BlackKnight(), appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][1]]);
            appVirtualGameBoard.splice(pawnIndexInAppVirtualGameBoard, 1);
            // appVirtualGameBoard[pawnIndexInAppVirtualGameBoard][0] = new BlackKnight();
          break;
          }
      }

    // });

  }

  shouldChangeIntoQueen(this: Pawn): boolean {
      if(this.currentIndex < 8 && this.pieceColor === 'WHITE') return true;
      if(this.currentIndex > 55 && this.pieceColor === 'BLACK') return true;

      return false;
  }

  getPossibleMovesIndexes: (this: Pawn) => number[] = () => {
    let possibleMoves: number[] = [];


    
    // alert(this.doneMoves);
    // checks if moved pawn is black - if it is, it can go only down the board
    if (this.pieceColor === 'BLACK') {
      // if -  checks if you move initially - you can move then 2 checkers forward
      if (this.doneMoves === 0) {
        if (
          VirtualGameBoard.isFieldEmpty(this.currentIndex + 8) &&
          VirtualGameBoard.isFieldEmpty(this.currentIndex + 16)
        ) {
          possibleMoves.push(this.currentIndex + 16);
        }
      }
      // if it's not pawn's initial move, you can move only 1 checker forward then
      if (VirtualGameBoard.isFieldEmpty(this.currentIndex + 8)) {
        possibleMoves.push(this.currentIndex + 8);
      }

      if (!VirtualGameBoard.isFieldEmpty(this.currentIndex + 7) && (this.currentIndex % 8 !== 0)) {
        possibleMoves.push(this.currentIndex + 7);
      }
      if (!VirtualGameBoard.isFieldEmpty(this.currentIndex + 9) && (this.currentIndex % 8 !== 7)) {
        possibleMoves.push(this.currentIndex + 9);
      }
      if(this.canTakeEnPassant('LEFT')) {
        possibleMoves.push(this.currentIndex + 7);
      }
      if(this.canTakeEnPassant('RIGHT')) {
        possibleMoves.push(this.currentIndex + 9);
      }
    }

    // checks if moved pawn is black - if it is, it can go only up the board
    else {
      // if -  checks if you move initially - you can move then 2 checkers forward
      if (this.doneMoves === 0) {
        if (
          VirtualGameBoard.isFieldEmpty(this.currentIndex - 8) &&
          VirtualGameBoard.isFieldEmpty(this.currentIndex - 16)
        ) {
          possibleMoves.push(this.currentIndex - 16);
        }
      }
      // if it's not pawn's initial move, you can move only 1 checker forward then
      if (VirtualGameBoard.isFieldEmpty(this.currentIndex - 8)) {
        possibleMoves.push(this.currentIndex - 8);
      }

      if (!VirtualGameBoard.isFieldEmpty(this.currentIndex - 7) &&  (this.currentIndex % 8 !== 7)) {
        possibleMoves.push(this.currentIndex - 7);
      }
      if (!VirtualGameBoard.isFieldEmpty(this.currentIndex - 9) && (this.currentIndex % 8 !== 0)) {
        possibleMoves.push(this.currentIndex - 9);
      }
      if(this.canTakeEnPassant('LEFT')) {
        possibleMoves.push(this.currentIndex - 9);
      }
      if(this.canTakeEnPassant('RIGHT')) {
        possibleMoves.push(this.currentIndex - 7);
      }
    }

    // for(const index of possibleMoves) {
    //     console.log('INDEX:' , index)
    //     if(King.willMyKingBeChecked.call(this, index)) {
    //         // if it can't be moved to this index, delete the impossible index from possibleMoves array
    //         possibleMoves.splice(possibleMoves.indexOf(index), 1);
    //     }
    // }

    let kingsIndexAr = [King.Kings[0].currentIndex, King.Kings[1].currentIndex];

    possibleMoves = possibleMoves.filter((digit) => {
      if (digit > 63 || digit < 0) return false;
      if (digit === kingsIndexAr[0] || digit === kingsIndexAr[1]) return false;
      if (this.isYourFriendOnField(digit)) return false;
      if (King.willMyKingBeChecked.call(this, digit)) return false;
      return true;
    });

    Piece.currentPossibleMoves = possibleMoves;
    return possibleMoves;
  };



}
