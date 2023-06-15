import { Bishop } from './Bishop.js';
import * as CustomTypes from './CustomTypes.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';

export class BlackBishop extends Bishop {
    static freeIndexes = [2, 5];

    constructor() {
        super('BLACK', CustomTypes.Img.BLACK_BISHOP, CustomTypes.PieceType.BISHOP);
        this.appendPieceToBoard(BlackBishop.freeIndexes.pop() as number);
    }
}