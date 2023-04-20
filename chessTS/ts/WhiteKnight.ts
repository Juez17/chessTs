import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';
import { Knight } from './Knight.js';

export class WhiteKnight extends Knight {

    static freeIndexes = [57, 62];

    constructor() {
        super('WHITE', CustomTypes.Img.WHITE_KNIGHT, CustomTypes.PieceType.KNIGHT);
        this.appendPieceToBoard(WhiteKnight.freeIndexes.pop() as number);
    }
}