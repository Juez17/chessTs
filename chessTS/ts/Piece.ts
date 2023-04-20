import * as CustomTypes from './CustomTypes.js';
import * as GameBoard from './GameBoard.js';
import { appVirtualGameBoard, showNthMove } from '../app.js';
import { VirtualGameBoard } from './VirtualGameBoard.js';
import { Pawn } from './Pawn.js';
import { King } from './King.js';
import { selectFigure } from './Selection.js';

export abstract class Piece {
    private color: CustomTypes.Color;
    private img: string;
    pieceType: CustomTypes.PieceType;
    private moves: number;
    private index: number;

    static previewOnly = false;
    static appVirtualGameBoardCopy: any = [];
    static selectedPiece: Piece | null;
    static currentPossibleMoves: number[] = [];
    static colorOfLastMoved: CustomTypes.Color = 'BLACK';
    static lastMoved: Piece | null;
    static lastMovingAr: Piece[] = [];

    constructor(color: CustomTypes.Color, img: CustomTypes.Img, pieceType: CustomTypes.PieceType) {
        this.color = color;
        this.img = img;
        this.pieceType = pieceType;
        this.moves = 0;
        this.index = -1;
    }
    get pieceColor() {
        return this.color;
    }
    appendPieceToBoard(this: Piece, index: number): void {
        // this.appendImgToBoard(index);
        this.index = index;
    }
    appendImgToBoard(this: Piece, index: number): void {
        const img = document.createElement('img');
        img.src = this.img;
        img.alt = `Image of a ${this.pieceType}`;
        GameBoard.gameBoard[index].appendChild(img);

        img.addEventListener('click', this.selectPiece.bind(this));
    }

    deselectPiece(this: Piece) {
        if(!Piece.selectedPiece) return;

        // console.log('deselecting');
        GameBoard.hideImpossibleMoves(Piece.currentPossibleMoves);
        Piece.currentPossibleMoves = [];
        Piece.selectedPiece = null;
    }

    selectPiece(this: Piece) {
        if(Piece.previewOnly) return;
        //uncomment to introduce round system
        if(!this.isThisColorsTurn()) {
            // alert('it\'s not your turn, buoy');
            return;
        }


        // if the piece is already selected, unselect it and hide its moves, return 
        if(Piece.selectedPiece === this) {
            this.deselectPiece();
            return;
        }
        // if sth was selected and we select sth else
        if(Piece.selectedPiece !== null && Piece.selectedPiece !== this) {
            // alert('ups')
            GameBoard.hideImpossibleMoves(Piece.currentPossibleMoves);
            Piece.selectedPiece = this;
            Piece.currentPossibleMoves = this.getPossibleMovesIndexes();
            GameBoard.showPossibleMoves.call(this, Piece.currentPossibleMoves);
            // console.log(`possible moves: ${Piece.currentPossibleMoves}`)
            return;
        }
        //if we select totally a new piece (without anything selected beforehand)
        if(Piece.selectedPiece === null) {
            Piece.selectedPiece = this;
            Piece.currentPossibleMoves = this.getPossibleMovesIndexes();
            GameBoard.showPossibleMoves.call(this, Piece.currentPossibleMoves);
            // console.log(`possible moves: ${Piece.currentPossibleMoves}`)
            return;
        }
    }

    isThisColorsTurn(this: Piece) {
        if(this.color === Piece.colorOfLastMoved) return false;
        return true;
    }

    appendMoveToLog(log: HTMLParagraphElement) {
        document.querySelectorAll('.log-pair')[document.querySelectorAll('.log-pair').length - 1]?.appendChild(log);
        log.scrollIntoView({behavior: 'smooth'});
    }

    createLog(newIndex: number): HTMLParagraphElement {
        const par = document.createElement('p');
        par.textContent = `${VirtualGameBoard.virtualGameBoardsArray.length - 1}: ${newIndex}`;
        par.classList.add('log-pair__move');
        par.addEventListener('click', ()=> {
            const movementNumber = +par.textContent?.split(':')[0]!;
            // console.log(movementNumber);
            // console.log('counter', VirtualGameBoard.counter);
            // let numberOfBackMoves = (VirtualGameBoard.counter - movementNumber) - 1;
            
            VirtualGameBoard.counter =  movementNumber + 1
            let isLastMovePicked = (VirtualGameBoard.counter - 1) === (VirtualGameBoard.virtualGameBoardsArray.length - 1);
            // console.log('(VirtualGameBoard.virtualGameBoardsArray.length - 1):',VirtualGameBoard.virtualGameBoardsArray.length - 1);
            // console.log('VirtualGameBoard.counter',VirtualGameBoard.counter);
            // console.log('isLastMovePicked',isLastMovePicked);
            
            // console.log('numberOfBackMoves:', numberOfBackMoves);
            
            // for(let i = 0; i < numberOfBackMoves; i++) showPreviousMove(true);
            
            
            showNthMove(movementNumber + 1); 
            if(!isLastMovePicked) {
                // console.log('TRUE');
                
                Piece.previewOnly = true;
            } 
            else {
                Piece.previewOnly = false;
            }
            if(Piece.selectedPiece !== null && Piece.selectedPiece !== undefined) {
        Piece.selectedPiece.deselectPiece();
    }
                     
        });
        if((VirtualGameBoard.virtualGameBoardsArray.length - 1) % 2 !== 0) {
            const logPair = document.createElement('div');
            logPair.classList.add('log-pair');
            document.querySelector('.log-container')?.appendChild(logPair);
        }

        if(Piece.selectedPiece !== null && Piece.selectedPiece !== undefined) {
            Piece.selectedPiece.deselectPiece();
        }

        return par;
    }

    move(this: Piece, newIndex: number) {

        if(!this.canMove(newIndex)) {
            // console.log('Sorry, cant move like that')
            return;
        }

        // else {

            let killed = false;
            let killedPieceIndex: number = 0;
            //TODO: implement killPiece(), safeguard against king pawns
            if(!VirtualGameBoard.isFieldEmpty(newIndex)){
                console.log('newIndex: ', newIndex);
                killed = true;
                killedPieceIndex = VirtualGameBoard.findPieceIndexInSpecifiedBoard(newIndex, appVirtualGameBoard);
            }
            
            
            let oldIndex = this.currentIndex;
            // console.log('Moving from index ' + this.currentIndex);
            this.currentIndex = newIndex;
            // console.log('To index ' + this.currentIndex);
            let shouldWait = false;
            //changing a pawn into a queen - note that the currentIndex is already changed
            if(this instanceof Pawn && this.shouldChangeIntoQueen()) shouldWait = true;

            const moveOn = (piece?: CustomTypes.PieceType) => {

                if(this instanceof Pawn) {
                    //instanceof Pawn starts here
                    console.log('this: ', this);
                    // console.log('pionek, powinien sie zmienic w krolowa');
                    if(this.shouldChangeIntoQueen()) {
                        //shouldWait - boolean which states if you should wait for the response
                        //from the user (selecting the proper chess piece)
                        shouldWait = true;
                        if(piece !== undefined) {
                            this.changeIntoQueen(piece);
                            killedPieceIndex = VirtualGameBoard.findPieceIndexInSpecifiedBoard(newIndex, appVirtualGameBoard);

                        }
                        // this.changeIntoQueen();
                    }
                    //takenEnPass
                    else if(this.pieceColor === 'WHITE') {
                        console.log('IF WHITEEEEEEEEEE');
                        if(((this.currentIndex === oldIndex - 9) || (this.currentIndex === oldIndex - 7)) && VirtualGameBoard.isFieldEmpty(newIndex)) {
                            killed = true;
                            killedPieceIndex = VirtualGameBoard.findPieceInVirtualBoard(newIndex + 8);
                        } 
                    }
    
                    else if(this.pieceColor === 'BLACK') {
                        console.log('IF BLACKKKKKKKKK')
                        if(((this.currentIndex === oldIndex + 9) || (this.currentIndex === oldIndex + 7)) && VirtualGameBoard.isFieldEmpty(newIndex)) {
                            killed = true;
                            killedPieceIndex = VirtualGameBoard.findPieceInVirtualBoard(newIndex - 8);
                            console.log('KILLED - BLACKKKKKK, killedPieceIndex: ', killedPieceIndex);
                        } 
                    }
                    
                    //instanceof Pawn ends here
                }
                else if(this.pieceType === CustomTypes.PieceType.KING) {
                    if(this.currentIndex === oldIndex - 2) {
                        (this as King).castleLong();
                    }
                    else if(this.currentIndex === oldIndex + 2) {
                        (this as King).castleShort();
                    }
                }

                

                for(let i = 0; i < appVirtualGameBoard.length; i++) {
                    appVirtualGameBoard[i][1] = appVirtualGameBoard[i][0].currentIndex;
                    // console.log(appVirtualGameBoard[i][0].currentIndex);
                    // console.log(appVirtualGameBoard[i][1]);
                }
                if(killed) {
                    // this.killEnemyPiece(killedPieceIndex);
                    console.log('KILLED?', killedPieceIndex);
                    console.log([...appVirtualGameBoard])
                    appVirtualGameBoard.splice(killedPieceIndex, 1);
                }
                // console.log('BEFORE DELETING', VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1]);
                

                const copyAr = (ar: Array<[Piece, number]>)=> {
                    return ar.map(el => {
                        // console.log(el);
                        console.log([...el]);

                        return [...el];
                    });
                };

                // console.log('pushuje to: ', [...appVirtualGameBoard]);
                console.log('pushuje to: ', copyAr(appVirtualGameBoard));
                console.log('czy to samo?: ', appVirtualGameBoard === copyAr(appVirtualGameBoard));
                
                Piece.appVirtualGameBoardCopy.push(copyAr(appVirtualGameBoard));
                console.log('KONCZE Z TYM - Piece.appVirtualGameBoardCopy: ', Piece.appVirtualGameBoardCopy);
                
                // console.log('COPY',Piece.appVirtualGameBoardCopy);
                // console.log('appVirtual:', appVirtualGameBoard);
                
                console.log('Z czego sie tworzy VirtualGameBoard - appVirtualBoard', appVirtualGameBoard);

                new VirtualGameBoard(appVirtualGameBoard);
                // new VirtualGameBoard(Piece.appVirtualGameBoardCopy[Piece.appVirtualGameBoardCopy.length - 1]);
                // console.log('NOW THEYRE IN THE SAME INDEX', VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1]);
                
    
                VirtualGameBoard.mapVirtualBoardToGameBoard(VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1]);
                
                // let threatenedKing = Piece.colorOfLastMoved === 'WHITE'? King.Kings[0]: King.Kings[1];
                // if(threatenedKing.isKingChecked()) {
                //     alert('check')
                // }
                Piece.lastMoved = this;
                // console.log(Piece.lastMoved);
                
                Piece.lastMovingAr.push(Piece.lastMoved);
    
                Piece.colorOfLastMoved = Piece.colorOfLastMoved === 'BLACK'? 'WHITE': 'BLACK';
                this.doneMoves = this.doneMoves + 1;
    
                // alert(this.doneMoves);
                this.deselectPiece();
            // }
            // console.log(VirtualGameBoard.virtualGameBoardsArray);
            
            this.appendMoveToLog(this.createLog(newIndex));
            };

            //if you don't wait for the user to choose the chess piece, execute the rest
            //of the function synchronously
            if(!shouldWait) {
                moveOn();
            }
            //wait for the user's decision
            else {
                const selectedFigure = new Promise(resolve => {
                    resolve(selectFigure());
                });

                selectedFigure.then((data)=> {
                    console.log('wybrano: ', data);
                    moveOn(data);
                });
            }

    }

    findPieceLastMoving() {
        Piece.lastMovingAr[Piece.lastMovingAr.length - 1];
    }

   

    canMove(this: Piece, newIndex: number): boolean {
        // console.log('current possibleeeeeeee: ' + Piece.currentPossibleMoves);
        if(Piece.currentPossibleMoves.indexOf(newIndex) !== -1) {
            return true;
        }
        else return false;
    }

    killEnemyPiece(index: number) {
        VirtualGameBoard.addToDeadStack(index);
        VirtualGameBoard.deletePieceFromVirtualBoard(index);
        VirtualGameBoard.renderDeadStack();
    }

    isBeingTaken(this: Piece) {
        // if() return false;
        let indexInVirtualAr = VirtualGameBoard.findPieceInVirtualBoard(this.currentIndex);
        // console.log('IS BEING TAKEN:');
        
        // console.log('IS BEING TAKEN:',VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1]);
        // console.log('IS BEING TAKEN:',VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][indexInVirtualAr]);
        let counter = 0;
        for(let i = 0; i < VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1].length; i++) {
            
            // console.log('IS BEING TAKEN:',VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][indexInVirtualAr][1]);
            // console.log('IS BEING TAKEN:',VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][i][1]);
            
            if(VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][indexInVirtualAr][1] === VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][i][1]) counter++;
        }
        // console.log('==========');
        
        if(counter > 1) return true;

        return false;
    }

    isYourFriendOnField(this:Piece, index: number) {
        // console.log('IS YOUR FRIEND HERE?',VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1])
       
        for(let i = 0; i < VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1].length; i++) {
            if(VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][i][1] === index) {
                if(VirtualGameBoard.virtualGameBoardsArray[VirtualGameBoard.virtualGameBoardsArray.length - 1][i][0].pieceColor === this.pieceColor)
                    return true;
            }
        }

        return false;
    }

    get currentIndex() {
        return this.index;
    }

    set currentIndex(index: number) {
        this.index = index;
    }

    get doneMoves() {
        return this.moves;
    }

    set doneMoves(value: number) {
        this.moves = value;
    }

    get image() {
        return this.img;
    }

    abstract getPossibleMovesIndexes: ()=> number[];
}