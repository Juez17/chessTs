import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { Rook } from './Rook.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';

export class WhiteRook extends Rook {

    // don't change the order! it's useful here: if(WhiteRook.counter === 1) WhiteRook.leftRook = this;
    static freeIndexes = [56, 63];
    static leftRook: WhiteRook;
    static rightRook: WhiteRook;
    static counter = 0;

    constructor() {
        super('WHITE', CustomTypes.Img.WHITE_ROOK, CustomTypes.PieceType.ROOK);
        this.appendPieceToBoard(WhiteRook.freeIndexes.pop() as number);
        WhiteRook.counter++;
        // order of freeIndexes is important, should be   static freeIndexes = [56, 63];
        if(WhiteRook.counter === 1) WhiteRook.rightRook = this;
        else WhiteRook.leftRook = this;
    }  
}