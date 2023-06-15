import { Queen } from './Queen.js';
import * as CustomTypes from './CustomTypes.js';

export class BlackQueen extends Queen {
    static freeIndexes = [3];

    constructor() {
        super('BLACK', CustomTypes.Img.BLACK_QUEEN, CustomTypes.PieceType.QUEEN);
        this.appendPieceToBoard(BlackQueen.freeIndexes.pop() as number);
    }
}