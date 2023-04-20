import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';
import { Knight } from './Knight.js';

export class BlackKnight extends Knight {
    static freeIndexes = [1, 6];

    constructor() {
        super('BLACK', CustomTypes.Img.BLACK_KNIGHT, CustomTypes.PieceType.KNIGHT);
        this.appendPieceToBoard(BlackKnight.freeIndexes.pop() as number);
    }
    
}