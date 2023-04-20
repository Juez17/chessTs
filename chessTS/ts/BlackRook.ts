import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { Rook } from './Rook.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';

export class BlackRook extends Rook {
    // don't change the order! it's useful here: if(WhiteRook.counter === 1) WhiteRook.leftRook = this;
    static freeIndexes = [0,7];
    static leftRook: BlackRook;
    static rightRook: BlackRook;
    static counter = 0;
    
    constructor() {
        super('BLACK', CustomTypes.Img.BLACK_ROOK, CustomTypes.PieceType.ROOK);
        this.appendPieceToBoard(BlackRook.freeIndexes.pop() as number);

        BlackRook.counter++;
        // order of freeIndexes is important, should be   static freeIndexes = [56, 63];
        if(BlackRook.counter === 1) BlackRook.rightRook = this;
        else BlackRook.leftRook = this;
    }  
}