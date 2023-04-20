import { Piece } from './Piece.js';
import * as CustomTypes from './CustomTypes.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';
import { King } from './King.js';

export abstract class Knight extends Piece {
    getPossibleMovesIndexes: () => number[] = ()=> {
        let possibleMoves: number[] = [];
        if(this.currentIndex % 8 === 7) {
            possibleMoves.push(this.currentIndex - 17, this.currentIndex + 15, this.currentIndex - 10, this.currentIndex + 6);
        }
        else if(this.currentIndex % 8 === 0) {
            possibleMoves.push(this.currentIndex - 15, this.currentIndex + 17, this.currentIndex + 10, this.currentIndex - 6);
        }
        else if(this.currentIndex % 8 === 1) {
            possibleMoves.push(this.currentIndex - 15,this.currentIndex + 15, this.currentIndex - 17,this.currentIndex + 17, this.currentIndex + 10, this.currentIndex - 6);
        }
        else if(this.currentIndex % 8 === 6) {
            possibleMoves.push(this.currentIndex - 15,this.currentIndex + 15, this.currentIndex - 17,this.currentIndex + 17, this.currentIndex - 10, this.currentIndex + 6);
        }
        else {
            possibleMoves.push(this.currentIndex - 15,this.currentIndex + 15, this.currentIndex - 17,this.currentIndex + 17, this.currentIndex - 10, this.currentIndex + 6, this.currentIndex + 10, this.currentIndex - 6);
        }

        let kingsIndexAr = [King.Kings[0].currentIndex, King.Kings[1].currentIndex];

        possibleMoves =  possibleMoves.filter((digit)=> {
            if((digit > 63) || (digit < 0)) return false;
            if(this.isYourFriendOnField(digit)) return false;
            if(digit === kingsIndexAr[0] || digit === kingsIndexAr[1]) 
            return false;
            if (King.willMyKingBeChecked.call(this, digit)) return false;
            return true;
        });

        possibleMoves = possibleMoves.filter((possibleMove) => {
            if (King.willMyKingBeChecked.call(this, possibleMove)) {
              return false;
            }
            return true;
          });
        Piece.currentPossibleMoves = possibleMoves;
        return possibleMoves;
    };
}