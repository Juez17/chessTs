(()=>{"use strict";var e={389:(e,r,t)=>{t.d(r,{T:()=>v,h:()=>B});var n,i,s,o=t(68),l=t(425),d=t(607),a=t(834),c=t(700),u=t(605),h=t(908),p=t(501),I=t(251),f=t(32),x=t(25),g=t(734);let B;function m(e){e&&(a.X.previewOnly=!0),l.q.virtualGameBoardsArray.length>=l.q.counter&&l.q.counter>1?(l.q.counter--,v(l.q.counter)):(alert("can't go any lesser, counter is "+l.q.counter),l.q.virtualGameBoardsArray.length===l.q.counter&&(a.X.previewOnly=!1)),null!==a.X.selectedPiece&&void 0!==a.X.selectedPiece&&a.X.selectedPiece.deselectPiece()}function v(e){l.q.mapVirtualBoardToGameBoard(l.q.virtualGameBoardsArray[e-1])}null===(n=document.querySelector(".menu__previous-move-btn"))||void 0===n||n.addEventListener("click",m.bind(null,!0)),null===(i=document.querySelector(".menu__following-move-btn"))||void 0===i||i.addEventListener("click",(function(){l.q.virtualGameBoardsArray.length>l.q.counter?(l.q.counter++,v(l.q.counter)):alert("can't go any further, counter is "+l.q.counter),l.q.virtualGameBoardsArray.length===l.q.counter&&(a.X.previewOnly=!1)})),null===(s=document.querySelector(".menu__cancel-move-btn"))||void 0===s||s.addEventListener("click",(function(){var e,r;if(a.X.previewOnly)return;if(m(!1),a.X.lastMoved&&a.X.lastMoved.doneMoves--,"BLACK"===(null===(e=a.X.lastMoved)||void 0===e?void 0:e.pieceColor)?a.X.colorOfLastMoved="WHITE":a.X.colorOfLastMoved="BLACK",a.X.lastMovingAr.length>1?a.X.lastMoved=a.X.lastMovingAr[a.X.lastMovingAr.length-2]:a.X.lastMoved=null,a.X.lastMovingAr.pop(),l.q.virtualGameBoardsArray.length>1&&l.q.virtualGameBoardsArray.pop(),a.X.appVirtualGameBoardCopy.length>1){const e=e=>e.map((e=>(console.log([...e]),[...e])));console.log("Piece.appVirtualGameBoardCopy PRZED PRZYPISANIEM W IFIE:",[...a.X.appVirtualGameBoardCopy]),console.log("appVirtualGameBoard PRZED PRZYPISANIEM W IFIE: ",B),a.X.appVirtualGameBoardCopy.pop(),B=e(a.X.appVirtualGameBoardCopy[a.X.appVirtualGameBoardCopy.length-1]),console.log("appVirtualGameBoard PO PRZYPISANIEM W IFIE: ",B),console.log("Piece.appVirtualGameBoardCopy PO PRZYPISANIEM W IFIE:",[...a.X.appVirtualGameBoardCopy])}let t=document.querySelectorAll(".log-pair")[document.querySelectorAll(".log-pair").length-1],n=document.querySelectorAll(".log-pair").length;1===t.children.length&&n>1?t.remove():null===(r=t.lastElementChild)||void 0===r||r.remove()})),function(){const e=new o.r("BLACK"),r=new o.r("BLACK"),t=new o.r("BLACK"),n=new o.r("BLACK"),i=new o.r("BLACK"),s=new o.r("BLACK"),a=new o.r("BLACK"),m=new o.r("BLACK"),v=new p.k,E=new p.k,y=new u.Y,k=new u.Y,q=new I.D,A=new I.D,T=new x.W,F=new d.l("BLACK"),O=new o.r("WHITE"),P=new o.r("WHITE"),K=new o.r("WHITE"),C=new o.r("WHITE"),b=new o.r("WHITE"),W=new o.r("WHITE"),G=new o.r("WHITE"),L=new o.r("WHITE"),M=new h.a,w=new h.a,H=new c.S,S=new c.S,N=new f.B,Y=new f.B,X=new g.Q,R=new d.l("WHITE");B=[[e,e.currentIndex],[r,r.currentIndex],[t,t.currentIndex],[n,n.currentIndex],[i,i.currentIndex],[s,s.currentIndex],[a,a.currentIndex],[m,m.currentIndex],[v,v.currentIndex],[E,E.currentIndex],[y,y.currentIndex],[k,k.currentIndex],[q,q.currentIndex],[A,A.currentIndex],[T,T.currentIndex],[F,F.currentIndex],[O,O.currentIndex],[P,P.currentIndex],[K,K.currentIndex],[C,C.currentIndex],[b,b.currentIndex],[W,W.currentIndex],[G,G.currentIndex],[L,L.currentIndex],[M,M.currentIndex],[w,w.currentIndex],[H,H.currentIndex],[N,N.currentIndex],[Y,Y.currentIndex],[S,S.currentIndex],[X,X.currentIndex],[R,R.currentIndex]],new l.q(B),l.q.mapVirtualBoardToGameBoard(l.q.virtualGameBoardsArray[0]),l.q.virtualGameBoardsArray.length}()},871:(e,r,t)=>{t.d(r,{q:()=>o});var n=t(834),i=t(425),s=t(607);class o extends n.X{constructor(){super(...arguments),this.getPossibleMovesIndexes=()=>{let e=[],r=Math.floor(this.currentIndex/8),t=this.currentIndex-8*r;for(let n=1;r-n>=0&&t-n>=0;n++){if(!i.q.isFieldEmpty(this.currentIndex-9*n)){this.isYourFriendOnField(this.currentIndex-9*n)||e.push(this.currentIndex-9*n);break}e.push(this.currentIndex-9*n)}for(let n=1;r-n>=0&&t+n<8;n++){if(!i.q.isFieldEmpty(this.currentIndex-7*n)){this.isYourFriendOnField(this.currentIndex-7*n)||e.push(this.currentIndex-7*n);break}e.push(this.currentIndex-7*n)}for(let n=1;r-n<=8&&t-n>=0;n++){if(!i.q.isFieldEmpty(this.currentIndex+7*n)){this.isYourFriendOnField(this.currentIndex+7*n)||e.push(this.currentIndex+7*n);break}e.push(this.currentIndex+7*n)}for(let n=1;r-n<=8&&t+n<8;n++){if(!i.q.isFieldEmpty(this.currentIndex+9*n)){this.isYourFriendOnField(this.currentIndex+9*n)||e.push(this.currentIndex+9*n);break}e.push(this.currentIndex+9*n)}let o=[s.l.Kings[0].currentIndex,s.l.Kings[1].currentIndex];return e=e.filter((e=>!(e>63||e<0||this.isYourFriendOnField(e)||e===o[0]||e===o[1]||s.l.willMyKingBeChecked.call(this,e)))),n.X.currentPossibleMoves=e,e}}}},251:(e,r,t)=>{t.d(r,{D:()=>s});var n=t(871),i=t(559);class s extends n.q{constructor(){super("BLACK",i.E.BLACK_BISHOP,i.W.BISHOP),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[2,5]},605:(e,r,t)=>{t.d(r,{Y:()=>s});var n=t(559),i=t(494);class s extends i.J{constructor(){super("BLACK",n.E.BLACK_KNIGHT,n.W.KNIGHT),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[1,6]},25:(e,r,t)=>{t.d(r,{W:()=>s});var n=t(141),i=t(559);class s extends n.d{constructor(){super("BLACK",i.E.BLACK_QUEEN,i.W.QUEEN),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[3]},501:(e,r,t)=>{t.d(r,{k:()=>s});var n=t(559),i=t(706);class s extends i.B{constructor(){super("BLACK",n.E.BLACK_ROOK,n.W.ROOK),this.appendPieceToBoard(s.freeIndexes.pop()),s.counter++,1===s.counter?s.rightRook=this:s.leftRook=this}}s.freeIndexes=[0,7],s.counter=0},559:(e,r,t)=>{var n,i;t.d(r,{E:()=>n,W:()=>i}),function(e){e.WHITE_PAWN="images/white-pawn.png",e.WHITE_ROOK="images/white-rook.png",e.WHITE_KNIGHT="images/white-knight.png",e.WHITE_BISHOP="images/white-bishop.png",e.WHITE_QUEEN="images/white-queen.png",e.WHITE_KING="images/white-king.png",e.BLACK_PAWN="images/black-pawn.png",e.BLACK_ROOK="images/black-rook.png",e.BLACK_KNIGHT="images/black-knight.png",e.BLACK_BISHOP="images/black-bishop.png",e.BLACK_QUEEN="images/black-queen.png",e.BLACK_KING="images/black-king.png"}(n||(n={})),function(e){e[e.BISHOP=0]="BISHOP",e[e.PAWN=1]="PAWN",e[e.QUEEN=2]="QUEEN",e[e.KNIGHT=3]="KNIGHT",e[e.KING=4]="KING",e[e.ROOK=5]="ROOK"}(i||(i={}))},340:(e,r,t)=>{t.d(r,{Cd:()=>l,eN:()=>o,wt:()=>i});var n=t(834);const i=[...document.querySelectorAll(".box")];for(const e of i)e.addEventListener("click",(r=>{if(!n.X.previewOnly&&null!==n.X.selectedPiece&&void 0!==n.X.selectedPiece){let r=s(e);n.X.selectedPiece.move(r)}}));function s(e){return i.indexOf(e)}function o(e){for(const r of e)i[r].classList.remove("box--move-possible")}function l(e){for(const r of e)i[r].classList.add("box--move-possible")}},607:(e,r,t)=>{t.d(r,{l:()=>d});var n=t(834),i=t(559),s=t(425),o=t(908),l=t(501);class d extends n.X{constructor(e){super(e,"BLACK"===e?i.E.BLACK_KING:i.E.WHITE_KING,i.W.KING),this.getPossibleMovesIndexes=()=>{let e=[];if(this.currentIndex%8==7?e.push(this.currentIndex-8,this.currentIndex-9,this.currentIndex-1,this.currentIndex+7,this.currentIndex+8):this.currentIndex%8==0?e.push(this.currentIndex-8,this.currentIndex+8,this.currentIndex-7,this.currentIndex+9,this.currentIndex+1):e.push(this.currentIndex-7,this.currentIndex-8,this.currentIndex-9,this.currentIndex-1,this.currentIndex+1,this.currentIndex+7,this.currentIndex+8,this.currentIndex+9),0===this.doneMoves){if(s.q.isFieldEmpty(this.currentIndex-3)&&s.q.isFieldEmpty(this.currentIndex-1)&&!this.isKingChecked()&&!d.willMyKingBeChecked.call(this,this.currentIndex-1)){let r=l.k.leftRook;"WHITE"===this.pieceColor&&(r=o.a.leftRook);const t=s.q.virtualGameBoardsArray[s.q.virtualGameBoardsArray.length-1][s.q.findPieceInVirtualBoard(r.currentIndex)][0];0===r.doneMoves&&t===r&&e.push(this.currentIndex-2)}if(s.q.isFieldEmpty(this.currentIndex+2)&&s.q.isFieldEmpty(this.currentIndex+1)&&!this.isKingChecked()&&!d.willMyKingBeChecked.call(this,this.currentIndex+1)){let r=l.k.rightRook;"WHITE"===this.pieceColor&&(r=o.a.rightRook);const t=s.q.virtualGameBoardsArray[s.q.virtualGameBoardsArray.length-1][s.q.findPieceInVirtualBoard(r.currentIndex)][0];0===r.doneMoves&&t===r&&e.push(this.currentIndex+2)}}return e=e.filter((e=>!(e>63||e<0||this.isYourFriendOnField(e)||d.willMyKingBeChecked.call(this,e)))),e=e.filter((e=>!d.willMyKingBeChecked.call(this,e))),n.X.currentPossibleMoves=e,e},d.Kings.push(this);const r="BLACK"===e?d.freeIndexesBlack:d.freeIndexesWhite;this.appendPieceToBoard(r.pop())}castleLong(){"WHITE"===this.pieceColor?o.a.leftRook.currentIndex+=3:l.k.leftRook.currentIndex+=3}castleShort(){"WHITE"===this.pieceColor?o.a.rightRook.currentIndex-=2:l.k.rightRook.currentIndex-=2}isKingChecked(){let e=s.q.virtualGameBoardsArray[s.q.virtualGameBoardsArray.length-1],r=s.q.getArOfPiecesOfSpecifiedType(i.W.KING,"BLACK")[0][1],t=s.q.getArOfPiecesOfSpecifiedType(i.W.KING,"WHITE")[0][1];if(this.pieceColor,"WHITE"===this.pieceColor){const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.PAWN,"BLACK");for(let t=0;t<=n.length-1;t++){if(n[t][0].isBeingTaken())continue;let i=e[n[t][1]][1];i%8==7?r.push(i+7):i%8==0?r.push(i+9):r.push(i+9,i+7)}if(-1!==r.indexOf(e[t][1]))return!0}else{const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.PAWN,"WHITE");for(let r=0;r<=n.length-1;r++){if(n[r][0].isBeingTaken())continue;let i=e[n[r][1]][1];i%8==7?t.push(i-9):i%8==0?t.push(i-7):t.push(i-9,i-7)}if(-1!==t.indexOf(e[r][1]))return!0}if("BLACK"===this.pieceColor){const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.KING,"WHITE")[0][0];if(t.push(n.currentIndex-9,n.currentIndex-8,n.currentIndex-7,n.currentIndex-1,n.currentIndex+1,n.currentIndex+7,n.currentIndex+8,n.currentIndex+9),-1!==t.indexOf(e[r][1]))return!0}else{const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.KING,"BLACK")[0][0];if(r.push(n.currentIndex-9,n.currentIndex-8,n.currentIndex-7,n.currentIndex-1,n.currentIndex+1,n.currentIndex+7,n.currentIndex+8,n.currentIndex+9),-1!==r.indexOf(e[t][1]))return!0}if("BLACK"===this.pieceColor){const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.KNIGHT,"WHITE");for(let r=0;r<=n.length-1;r++){if(n[r][0].isBeingTaken())continue;let i=e[n[r][1]][1];i%8==7?t.push(i-17,i+15,i-10,i+6):i%8==0?t.push(i-15,i+17,i+10,i-6):i%8==1?t.push(i-15,i+15,i-17,i+17,i+10,i-6):i%8==6?t.push(i-15,i+15,i-17,i+17,i-10,i+6):t.push(i-15,i+15,i-17,i+17,i-10,i+6,i+10,i-6)}if(-1!==t.indexOf(e[r][1]))return!0}else{const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.KNIGHT,"BLACK");for(let t=0;t<=n.length-1;t++){if(n[t][0].isBeingTaken())continue;let i=e[n[t][1]][1];i%8==7?r.push(i-17,i+15,i-10,i+6):i%8==0?r.push(i-15,i+17,i+10,i-6):i%8==1?r.push(i-15,i+15,i-17,i+17,i+10,i-6):i%8==6?r.push(i-15,i+15,i-17,i+17,i-10,i+6):r.push(i-15,i+15,i-17,i+17,i-10,i+6,i+10,i-6)}if(-1!==r.indexOf(e[t][1]))return!0}if("BLACK"===this.pieceColor){const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.ROOK,"WHITE");e:for(let r=0;r<=n.length-1;r++){let i=e[n[r][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;e<o+1&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-8*e)){if(n[r][0].isYourFriendOnField(i-8*e)){t.push(i-8*e);break}t.push(i-8*e);break}t.push(i-8*e)}for(let e=o+1;e<8;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(l+8*e)){if(n[r][0].isYourFriendOnField(l+8*e)){t.push(l+8*e);break}t.push(l+8*e);break}t.push(l+8*e)}for(let e=1;e<l+1;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+l-e)){if(n[r][0].isYourFriendOnField(8*o+l-e)){t.push(8*o+l-e);break}t.push(8*o+l-e);break}t.push(8*o+l-e)}for(let e=l+1;e<8;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+e)){if(n[r][0].isYourFriendOnField(8*o+e)){t.push(8*o+e);break}t.push(8*o+e);break}t.push(8*o+e)}}if(-1!==t.indexOf(e[r][1]))return!0}else{const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.ROOK,"BLACK");e:for(let t=0;t<=n.length-1;t++){let i=e[n[t][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;e<o+1&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-8*e)){if(n[t][0].isYourFriendOnField(i-8*e)){r.push(i-8*e);break}r.push(i-8*e);break}r.push(i-8*e)}for(let e=o+1;e<8;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(l+8*e)){if(n[t][0].isYourFriendOnField(l+8*e)){r.push(l+8*e);break}r.push(l+8*e);break}r.push(l+8*e)}for(let e=1;e<l+1;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+l-e)){if(n[t][0].isYourFriendOnField(8*o+l-e)){r.push(8*o+l-e);break}r.push(8*o+l-e);break}r.push(8*o+l-e)}for(let e=l+1;e<8;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+e)){if(n[t][0].isYourFriendOnField(8*o+e)){r.push(8*o+e);break}r.push(8*o+e);break}r.push(8*o+e)}}if(-1!==r.indexOf(e[t][1]))return!0}if("BLACK"===this.pieceColor){const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.BISHOP,"WHITE");for(let r=0;r<=n.length-1;r++){let i=e[n[r][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;o-e>=0&&l-e>=0&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-9*e)){t.push(i-9*e);break}t.push(i-9*e)}for(let e=1;o-e>=0&&l+e<8&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-7*e)){t.push(i-7*e);break}t.push(i-7*e)}for(let e=1;o-e<=8&&l-e>=0&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+7*e)){t.push(i+7*e);break}t.push(i+7*e)}for(let e=1;o-e<=8&&l+e<8&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+9*e)){t.push(i+9*e);break}t.push(i+9*e)}}if(-1!==t.indexOf(e[r][1]))return!0}else{const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.BISHOP,"BLACK");for(let t=0;t<=n.length-1;t++){let i=e[n[t][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;o-e>=0&&l-e>=0&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-9*e)){r.push(i-9*e);break}r.push(i-9*e)}for(let e=1;o-e>=0&&l+e<8&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-7*e)){r.push(i-7*e);break}r.push(i-7*e)}for(let e=1;o-e<=8&&l-e>=0&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+7*e)){r.push(i+7*e);break}r.push(i+7*e)}for(let e=1;o-e<=8&&l+e<8&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+9*e)){r.push(i+9*e);break}r.push(i+9*e)}}if(-1!==r.indexOf(e[t][1]))return!0}if("BLACK"===this.pieceColor){const t=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.QUEEN,"WHITE");e:for(let r=0;r<=n.length-1;r++){let i=e[n[r][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;o-e>=0&&l-e>=0&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-9*e)){t.push(i-9*e);break}t.push(i-9*e)}for(let e=1;o-e>=0&&l+e<8&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-7*e)){t.push(i-7*e);break}t.push(i-7*e)}for(let e=1;o-e<=8&&l-e>=0&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+7*e)){t.push(i+7*e);break}t.push(i+7*e)}for(let e=1;o-e<=8&&l+e<8&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+9*e)){t.push(i+9*e);break}t.push(i+9*e)}for(let e=1;e<o+1&&!n[r][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-8*e)){if(n[r][0].isYourFriendOnField(i-8*e)){t.push(i-8*e);break}t.push(i-8*e);break}t.push(i-8*e)}for(let e=o+1;e<8;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(l+8*e)){if(n[r][0].isYourFriendOnField(l+8*e)){t.push(l+8*e);break}t.push(l+8*e);break}t.push(l+8*e)}for(let e=1;e<l+1;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+l-e)){if(n[r][0].isYourFriendOnField(8*o+l-e)){t.push(8*o+l-e);break}t.push(8*o+l-e);break}t.push(8*o+l-e)}for(let e=l+1;e<8;e++){if(n[r][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+e)){if(n[r][0].isYourFriendOnField(8*o+e)){t.push(8*o+e);break}t.push(8*o+e);break}t.push(8*o+e)}}if(-1!==t.indexOf(e[r][1]))return!0}else{const r=[],n=s.q.getArOfPiecesOfSpecifiedType(i.W.QUEEN,"BLACK");e:for(let t=0;t<=n.length-1;t++){let i=e[n[t][1]][1],o=Math.floor(i/8),l=i-8*o;for(let e=1;o-e>=0&&l-e>=0&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-9*e)){r.push(i-9*e);break}r.push(i-9*e)}for(let e=1;o-e>=0&&l+e<8&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-7*e)){r.push(i-7*e);break}r.push(i-7*e)}for(let e=1;o-e<=8&&l-e>=0&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+7*e)){r.push(i+7*e);break}r.push(i+7*e)}for(let e=1;o-e<=8&&l+e<8&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i+9*e)){r.push(i+9*e);break}r.push(i+9*e)}for(let e=1;e<o+1&&!n[t][0].isBeingTaken();e++){if(!s.q.isFieldEmpty(i-8*e)){if(n[t][0].isYourFriendOnField(i-8*e)){r.push(i-8*e);break}r.push(i-8*e);break}r.push(i-8*e)}for(let e=o+1;e<8;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(l+8*e)){if(n[t][0].isYourFriendOnField(l+8*e)){r.push(l+8*e);break}r.push(l+8*e);break}r.push(l+8*e)}for(let e=1;e<l+1;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+l-e)){if(n[t][0].isYourFriendOnField(8*o+l-e)){r.push(8*o+l-e);break}r.push(8*o+l-e);break}r.push(8*o+l-e)}for(let e=l+1;e<8;e++){if(n[t][0].isBeingTaken())continue e;if(!s.q.isFieldEmpty(8*o+e)){if(n[t][0].isYourFriendOnField(8*o+e)){r.push(8*o+e);break}r.push(8*o+e);break}r.push(8*o+e)}}if(-1!==r.indexOf(e[t][1]))return!0}return!1}static willMyKingBeChecked(e){const r=s.q.virtualGameBoardsArray.length-1;let t;return new s.q(s.q.virtualGameBoardsArray[r]),s.q.updateIndexesOfPieces(this,e),t="BLACK"===this.pieceColor?d.Kings[0]:d.Kings[1],t.isKingChecked()?(s.q.virtualGameBoardsArray.pop(),s.q.counter--,!0):(s.q.virtualGameBoardsArray.pop(),s.q.counter--,!1)}}d.freeIndexesWhite=[60],d.freeIndexesBlack=[4],d.Kings=[]},494:(e,r,t)=>{t.d(r,{J:()=>s});var n=t(834),i=t(607);class s extends n.X{constructor(){super(...arguments),this.getPossibleMovesIndexes=()=>{let e=[];this.currentIndex%8==7?e.push(this.currentIndex-17,this.currentIndex+15,this.currentIndex-10,this.currentIndex+6):this.currentIndex%8==0?e.push(this.currentIndex-15,this.currentIndex+17,this.currentIndex+10,this.currentIndex-6):this.currentIndex%8==1?e.push(this.currentIndex-15,this.currentIndex+15,this.currentIndex-17,this.currentIndex+17,this.currentIndex+10,this.currentIndex-6):this.currentIndex%8==6?e.push(this.currentIndex-15,this.currentIndex+15,this.currentIndex-17,this.currentIndex+17,this.currentIndex-10,this.currentIndex+6):e.push(this.currentIndex-15,this.currentIndex+15,this.currentIndex-17,this.currentIndex+17,this.currentIndex-10,this.currentIndex+6,this.currentIndex+10,this.currentIndex-6);let r=[i.l.Kings[0].currentIndex,i.l.Kings[1].currentIndex];return e=e.filter((e=>!(e>63||e<0||this.isYourFriendOnField(e)||e===r[0]||e===r[1]||i.l.willMyKingBeChecked.call(this,e)))),e=e.filter((e=>!i.l.willMyKingBeChecked.call(this,e))),n.X.currentPossibleMoves=e,e}}}},68:(e,r,t)=>{t.d(r,{r:()=>x});var n=t(834),i=t(559),s=t(425),o=t(607),l=t(734),d=t(389),a=t(25),c=t(908),u=t(32),h=t(700),p=t(501),I=t(251),f=t(605);class x extends n.X{constructor(e){super(e,"BLACK"===e?i.E.BLACK_PAWN:i.E.WHITE_PAWN,i.W.PAWN),this.hasTakenEnPassant=!1,this.getPossibleMovesIndexes=()=>{let e=[];"BLACK"===this.pieceColor?(0===this.doneMoves&&s.q.isFieldEmpty(this.currentIndex+8)&&s.q.isFieldEmpty(this.currentIndex+16)&&e.push(this.currentIndex+16),s.q.isFieldEmpty(this.currentIndex+8)&&e.push(this.currentIndex+8),s.q.isFieldEmpty(this.currentIndex+7)||this.currentIndex%8==0||e.push(this.currentIndex+7),s.q.isFieldEmpty(this.currentIndex+9)||this.currentIndex%8==7||e.push(this.currentIndex+9),this.canTakeEnPassant("LEFT")&&e.push(this.currentIndex+7),this.canTakeEnPassant("RIGHT")&&e.push(this.currentIndex+9)):(0===this.doneMoves&&s.q.isFieldEmpty(this.currentIndex-8)&&s.q.isFieldEmpty(this.currentIndex-16)&&e.push(this.currentIndex-16),s.q.isFieldEmpty(this.currentIndex-8)&&e.push(this.currentIndex-8),s.q.isFieldEmpty(this.currentIndex-7)||this.currentIndex%8==7||e.push(this.currentIndex-7),s.q.isFieldEmpty(this.currentIndex-9)||this.currentIndex%8==0||e.push(this.currentIndex-9),this.canTakeEnPassant("LEFT")&&e.push(this.currentIndex-9),this.canTakeEnPassant("RIGHT")&&e.push(this.currentIndex-7));let r=[o.l.Kings[0].currentIndex,o.l.Kings[1].currentIndex];return e=e.filter((e=>!(e>63||e<0||e===r[0]||e===r[1]||this.isYourFriendOnField(e)||o.l.willMyKingBeChecked.call(this,e)))),n.X.currentPossibleMoves=e,e};const r="BLACK"===e?x.freeIndexesBlack:x.freeIndexesWhite;this.appendPieceToBoard(r.pop())}canTakeEnPassant(e){let r=Math.floor(this.currentIndex/8),t=Math.floor(this.currentIndex%8);if(!0===this.hasTakenEnPassant)return!1;if("WHITE"===this.pieceColor&&3===r||"BLACK"===this.pieceColor&&4===r)if("LEFT"===e&&0!==t){if(!s.q.isFieldEmpty(this.currentIndex-1)){let e=s.q.findPieceInVirtualBoard(this.currentIndex-1);if(n.X.lastMoved.pieceType===i.W.PAWN&&1===n.X.lastMoved.doneMoves&&n.X.lastMoved===s.q.virtualGameBoardsArray[s.q.virtualGameBoardsArray.length-1][e][0])return!0}}else if("RIGHT"===e&&7!=t&&!s.q.isFieldEmpty(this.currentIndex+1)){let e=s.q.findPieceInVirtualBoard(this.currentIndex+1);if(n.X.lastMoved.pieceType===i.W.PAWN&&1===n.X.lastMoved.doneMoves&&n.X.lastMoved===s.q.virtualGameBoardsArray[s.q.virtualGameBoardsArray.length-1][e][0])return!0}return!1}changeIntoQueen(e){let r=0;for(let e=0;e<d.h.length;e++)if(console.log("porownanie:",d.h[e][0]===this),console.log("i:",e),d.h[e][0]===this){r=e,console.log("WPADLO W IFA",e),console.log("appVirtualGameBoard, ",[...d.h]);break}if(console.log("figure",e),"WHITE"===this.pieceColor)switch(e){case i.W.QUEEN:l.Q.freeIndexes.push(this.currentIndex),d.h.push([new l.Q,d.h[r][1]]),d.h.splice(r,1);break;case i.W.ROOK:c.a.freeIndexes.push(this.currentIndex),d.h.push([new c.a,d.h[r][1]]),d.h.splice(r,1);break;case i.W.BISHOP:u.B.freeIndexes.push(this.currentIndex),d.h.push([new u.B,d.h[r][1]]),d.h.splice(r,1);break;case i.W.KNIGHT:h.S.freeIndexes.push(this.currentIndex),d.h.push([new h.S,d.h[r][1]]),d.h.splice(r,1)}else switch(console.log("ELSE - BLACK",e),e){case i.W.QUEEN:console.log("BLACK QUEEN"),console.log("pawnIndexInAppVirtualGameBoard: ",r),console.log("appVirtualGameBoard: ",d.h),a.W.freeIndexes.push(this.currentIndex),d.h.push([new a.W,d.h[r][1]]),d.h.splice(r,1);break;case i.W.ROOK:console.log("BLACK ROOK"),p.k.freeIndexes.push(this.currentIndex),d.h.push([new p.k,d.h[r][1]]),d.h.splice(r,1);break;case i.W.BISHOP:console.log("BLACK BISHOP"),I.D.freeIndexes.push(this.currentIndex),d.h.push([new I.D,d.h[r][1]]),d.h.splice(r,1);break;case i.W.KNIGHT:console.log("BLACK KNIGHT"),f.Y.freeIndexes.push(this.currentIndex),d.h.push([new f.Y,d.h[r][1]]),d.h.splice(r,1)}}shouldChangeIntoQueen(){return this.currentIndex<8&&"WHITE"===this.pieceColor||this.currentIndex>55&&"BLACK"===this.pieceColor}}x.freeIndexesWhite=[48,49,50,51,52,53,54,55],x.freeIndexesBlack=[8,9,10,11,12,13,14,15]},834:(e,r,t)=>{t.d(r,{X:()=>a});var n=t(559),i=t(340),s=t(389),o=t(425),l=t(68),d=t(93);class a{constructor(e,r,t){this.color=e,this.img=r,this.pieceType=t,this.moves=0,this.index=-1}get pieceColor(){return this.color}appendPieceToBoard(e){this.index=e}appendImgToBoard(e){const r=document.createElement("img");r.src=this.img,r.alt=`Image of a ${this.pieceType}`,i.wt[e].appendChild(r),r.addEventListener("click",this.selectPiece.bind(this))}deselectPiece(){a.selectedPiece&&(i.eN(a.currentPossibleMoves),a.currentPossibleMoves=[],a.selectedPiece=null)}selectPiece(){if(!a.previewOnly&&this.isThisColorsTurn()){if(a.selectedPiece!==this)return null!==a.selectedPiece&&a.selectedPiece!==this?(i.eN(a.currentPossibleMoves),a.selectedPiece=this,a.currentPossibleMoves=this.getPossibleMovesIndexes(),void i.Cd.call(this,a.currentPossibleMoves)):null===a.selectedPiece?(a.selectedPiece=this,a.currentPossibleMoves=this.getPossibleMovesIndexes(),void i.Cd.call(this,a.currentPossibleMoves)):void 0;this.deselectPiece()}}isThisColorsTurn(){return this.color!==a.colorOfLastMoved}appendMoveToLog(e){var r;null===(r=document.querySelectorAll(".log-pair")[document.querySelectorAll(".log-pair").length-1])||void 0===r||r.appendChild(e),e.scrollIntoView({behavior:"smooth"})}createLog(e){var r;const t=document.createElement("p");if(t.textContent=`${o.q.virtualGameBoardsArray.length-1}: ${e}`,t.classList.add("log-pair__move"),t.addEventListener("click",(()=>{var e;const r=+(null===(e=t.textContent)||void 0===e?void 0:e.split(":")[0]);o.q.counter=r+1;let n=o.q.counter-1==o.q.virtualGameBoardsArray.length-1;(0,s.T)(r+1),a.previewOnly=!n,null!==a.selectedPiece&&void 0!==a.selectedPiece&&a.selectedPiece.deselectPiece()})),(o.q.virtualGameBoardsArray.length-1)%2!=0){const e=document.createElement("div");e.classList.add("log-pair"),null===(r=document.querySelector(".log-container"))||void 0===r||r.appendChild(e)}return null!==a.selectedPiece&&void 0!==a.selectedPiece&&a.selectedPiece.deselectPiece(),t}move(e){if(!this.canMove(e))return;let r=!1,t=0;o.q.isFieldEmpty(e)||(console.log("newIndex: ",e),r=!0,t=o.q.findPieceIndexInSpecifiedBoard(e,s.h));let i=this.currentIndex;this.currentIndex=e;let c=!1;this instanceof l.r&&this.shouldChangeIntoQueen()&&(c=!0);const u=d=>{this instanceof l.r?(console.log("this: ",this),this.shouldChangeIntoQueen()?(c=!0,void 0!==d&&(this.changeIntoQueen(d),t=o.q.findPieceIndexInSpecifiedBoard(e,s.h))):"WHITE"===this.pieceColor?(console.log("IF WHITEEEEEEEEEE"),this.currentIndex!==i-9&&this.currentIndex!==i-7||!o.q.isFieldEmpty(e)||(r=!0,t=o.q.findPieceInVirtualBoard(e+8))):"BLACK"===this.pieceColor&&(console.log("IF BLACKKKKKKKKK"),this.currentIndex!==i+9&&this.currentIndex!==i+7||!o.q.isFieldEmpty(e)||(r=!0,t=o.q.findPieceInVirtualBoard(e-8),console.log("KILLED - BLACKKKKKK, killedPieceIndex: ",t)))):this.pieceType===n.W.KING&&(this.currentIndex===i-2?this.castleLong():this.currentIndex===i+2&&this.castleShort());for(let e=0;e<s.h.length;e++)s.h[e][1]=s.h[e][0].currentIndex;r&&(console.log("KILLED?",t),console.log([...s.h]),s.h.splice(t,1));const u=e=>e.map((e=>(console.log([...e]),[...e])));console.log("pushuje to: ",u(s.h)),console.log("czy to samo?: ",s.h===u(s.h)),a.appVirtualGameBoardCopy.push(u(s.h)),console.log("KONCZE Z TYM - Piece.appVirtualGameBoardCopy: ",a.appVirtualGameBoardCopy),console.log("Z czego sie tworzy VirtualGameBoard - appVirtualBoard",s.h),new o.q(s.h),o.q.mapVirtualBoardToGameBoard(o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1]),a.lastMoved=this,a.lastMovingAr.push(a.lastMoved),a.colorOfLastMoved="BLACK"===a.colorOfLastMoved?"WHITE":"BLACK",this.doneMoves=this.doneMoves+1,this.deselectPiece(),this.appendMoveToLog(this.createLog(e))};c?new Promise((e=>{e((0,d._)())})).then((e=>{console.log("wybrano: ",e),u(e)})):u()}findPieceLastMoving(){a.lastMovingAr[a.lastMovingAr.length-1]}canMove(e){return-1!==a.currentPossibleMoves.indexOf(e)}killEnemyPiece(e){o.q.addToDeadStack(e),o.q.deletePieceFromVirtualBoard(e),o.q.renderDeadStack()}isBeingTaken(){let e=o.q.findPieceInVirtualBoard(this.currentIndex),r=0;for(let t=0;t<o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1].length;t++)o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1][e][1]===o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1][t][1]&&r++;return r>1}isYourFriendOnField(e){for(let r=0;r<o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1].length;r++)if(o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1][r][1]===e&&o.q.virtualGameBoardsArray[o.q.virtualGameBoardsArray.length-1][r][0].pieceColor===this.pieceColor)return!0;return!1}get currentIndex(){return this.index}set currentIndex(e){this.index=e}get doneMoves(){return this.moves}set doneMoves(e){this.moves=e}get image(){return this.img}}a.previewOnly=!1,a.appVirtualGameBoardCopy=[],a.currentPossibleMoves=[],a.colorOfLastMoved="BLACK",a.lastMovingAr=[]},141:(e,r,t)=>{t.d(r,{d:()=>o});var n=t(834),i=t(425),s=t(607);class o extends n.X{constructor(){super(...arguments),this.getPossibleMovesIndexes=()=>{let e=[],r=Math.floor(this.currentIndex/8),t=this.currentIndex-8*r;for(let n=1;r-n>=0&&t-n>=0;n++){if(!i.q.isFieldEmpty(this.currentIndex-9*n)){this.isYourFriendOnField(this.currentIndex-9*n)||e.push(this.currentIndex-9*n);break}e.push(this.currentIndex-9*n)}for(let n=1;r-n>=0&&t+n<8;n++){if(!i.q.isFieldEmpty(this.currentIndex-7*n)){this.isYourFriendOnField(this.currentIndex-7*n)||e.push(this.currentIndex-7*n);break}e.push(this.currentIndex-7*n)}for(let n=1;r-n<=8&&t-n>=0;n++){if(!i.q.isFieldEmpty(this.currentIndex+7*n)){this.isYourFriendOnField(this.currentIndex+7*n)||e.push(this.currentIndex+7*n);break}e.push(this.currentIndex+7*n)}for(let n=1;r-n<=8&&t+n<8;n++){if(!i.q.isFieldEmpty(this.currentIndex+9*n)){this.isYourFriendOnField(this.currentIndex+9*n)||e.push(this.currentIndex+9*n);break}e.push(this.currentIndex+9*n)}for(let t=1;t<r+1;t++){if(!i.q.isFieldEmpty(this.currentIndex-8*t)){this.isYourFriendOnField(this.currentIndex-8*t)||e.push(this.currentIndex-8*t);break}e.push(this.currentIndex-8*t)}for(let n=r+1;n<8;n++){if(!i.q.isFieldEmpty(t+8*n)){this.isYourFriendOnField(t+8*n)||e.push(t+8*n);break}e.push(t+8*n)}for(let n=1;n<t+1;n++){if(!i.q.isFieldEmpty(8*r+t-n)){this.isYourFriendOnField(8*r+t-n)||e.push(8*r+t-n);break}e.push(8*r+t-n)}for(let n=t+1;n<8;n++){if(!i.q.isFieldEmpty(8*r+n)){this.isYourFriendOnField(8*r+n)||e.push(8*r+n);break}e.push(8*r+n)}let o=[s.l.Kings[0].currentIndex,s.l.Kings[1].currentIndex];return e=e.filter((e=>!(e>63||e<0||this.isYourFriendOnField(e)||e===o[0]||e===o[1]||s.l.willMyKingBeChecked.call(this,e)))),n.X.currentPossibleMoves=e,e}}}},706:(e,r,t)=>{t.d(r,{B:()=>o});var n=t(834),i=t(425),s=t(607);class o extends n.X{constructor(){super(...arguments),this.getPossibleMovesIndexes=()=>{let e=[],r=Math.floor(this.currentIndex/8),t=this.currentIndex-8*r;for(let t=1;t<r+1;t++){if(!i.q.isFieldEmpty(this.currentIndex-8*t)){this.isYourFriendOnField(this.currentIndex-8*t)||e.push(this.currentIndex-8*t);break}e.push(this.currentIndex-8*t)}for(let n=r+1;n<8;n++){if(!i.q.isFieldEmpty(t+8*n)){this.isYourFriendOnField(t+8*n)||e.push(t+8*n);break}e.push(t+8*n)}for(let n=1;n<t+1;n++){if(!i.q.isFieldEmpty(8*r+t-n)){this.isYourFriendOnField(8*r+t-n)||e.push(8*r+t-n);break}e.push(8*r+t-n)}for(let n=t+1;n<8;n++){if(!i.q.isFieldEmpty(8*r+n)){this.isYourFriendOnField(8*r+n)||e.push(8*r+n);break}e.push(8*r+n)}let o=[s.l.Kings[0].currentIndex,s.l.Kings[1].currentIndex];return e=e.filter((e=>!(e>63||e<0||this.isYourFriendOnField(e)||e===o[0]||e===o[1]||s.l.willMyKingBeChecked.call(this,e)))),n.X.currentPossibleMoves=e,e}}}},93:(e,r,t)=>{t.d(r,{_:()=>i});var n=t(559);const i=()=>{var e;const r=document.querySelectorAll(".selection-box__choice-box");null===(e=document.querySelector(".modal"))||void 0===e||e.classList.remove("hidden");const t=new Promise((e=>{r[0].addEventListener("click",(()=>{var r;console.log("ZWRACAM ROOK"),null===(r=document.querySelector(".modal"))||void 0===r||r.classList.add("hidden"),e(n.W.ROOK)})),r[1].addEventListener("click",(()=>{var r;console.log("ZWRACAM KNIGHT"),null===(r=document.querySelector(".modal"))||void 0===r||r.classList.add("hidden"),e(n.W.KNIGHT)})),r[2].addEventListener("click",(()=>{var r;console.log("ZWRACAM BISHOP"),null===(r=document.querySelector(".modal"))||void 0===r||r.classList.add("hidden"),e(n.W.BISHOP)})),r[3].addEventListener("click",(()=>{var r;console.log("ZWRACAM QUEEN"),null===(r=document.querySelector(".modal"))||void 0===r||r.classList.add("hidden"),e(n.W.QUEEN)}))}));return t}},425:(e,r,t)=>{t.d(r,{q:()=>i});var n=t(340);class i{constructor(e){let r=[];for(let t=0;t<e.length;t++)r.push([e[t][0],e[t][1]]);i.virtualGameBoardsArray.push(r),console.log("Tworze nowa tablice:"),console.log(i.virtualGameBoardsArray),console.log("============================"),console.log(`Length: ${i.virtualGameBoardsArray.length}`),i.counter++}static updateIndexesOfPieces(e,r){let t=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1];for(let n=0;n<t.length;n++)if(e.currentIndex===t[n][1]){t[n][1]=r;break}}static isFieldEmpty(e){let r=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1],t=!0;return r.find((r=>{if(r[1]===e)return t=!1,!1})),t}static findPieceIndexInSpecifiedBoard(e,r){let t=r;for(let r=0;r<t.length;r++)if(console.log("szukam elementu: "+e,", teraz patrze na element: ",t[r][1],t[r][0]),t[r][1]===e)return console.log("TO TEN!!! ZWRACAM:",r),r;return-1}static findPieceInVirtualBoard(e){let r=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1];for(let t=0;t<r.length;t++)if(console.log("szukam elementu: "+e,", teraz patrze na element: ",r[t][1],r[t][0]),r[t][1]===e)return console.log("TO TEN!!! ZWRACAM:",t),t;return-1}static getArOfPiecesOfSpecifiedType(e,r){let t=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1];const n=[];for(let i=0;i<t.length;i++)t[i][0].pieceType===e&&t[i][0].pieceColor===r&&n.push([t[i][0],i]);return n}static deletePieceFromVirtualBoard(e){let r=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1];r.splice(e,1),console.log("AFTER DELETING",r)}static addToDeadStack(e){let r=this.virtualGameBoardsArray[this.virtualGameBoardsArray.length-1];this.deadStack.push(r[e][0])}static renderDeadStack(){const e=document.querySelector(".dead-stack");e.innerHTML="";for(const r of this.deadStack){const t=document.createElement("img");t.src=r.image,null==e||e.appendChild(t)}}static mapVirtualBoardToGameBoard(e){for(const e of n.wt)e.innerHTML="";for(let r=0;r<e.length;r++)e[r][0].appendPieceToBoard(e[r][1]),e[r][0].appendImgToBoard(e[r][1])}}i.virtualGameBoardsArray=[],i.counter=0,i.deadStack=[]},32:(e,r,t)=>{t.d(r,{B:()=>s});var n=t(871),i=t(559);class s extends n.q{constructor(){super("WHITE",i.E.WHITE_BISHOP,i.W.BISHOP),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[58,61]},700:(e,r,t)=>{t.d(r,{S:()=>s});var n=t(559),i=t(494);class s extends i.J{constructor(){super("WHITE",n.E.WHITE_KNIGHT,n.W.KNIGHT),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[57,62]},734:(e,r,t)=>{t.d(r,{Q:()=>s});var n=t(141),i=t(559);class s extends n.d{constructor(){super("WHITE",i.E.WHITE_QUEEN,i.W.QUEEN),this.appendPieceToBoard(s.freeIndexes.pop())}}s.freeIndexes=[59]},908:(e,r,t)=>{t.d(r,{a:()=>s});var n=t(559),i=t(706);class s extends i.B{constructor(){super("WHITE",n.E.WHITE_ROOK,n.W.ROOK),this.appendPieceToBoard(s.freeIndexes.pop()),s.counter++,1===s.counter?s.rightRook=this:s.leftRook=this}}s.freeIndexes=[56,63],s.counter=0}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var s=r[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t(389),t(425),t(93),t(559),t(834),t(607),t(871),t(251),t(605),t(25),t(501),t(340),t(494),t(68),t(706),t(32),t(700),t(734),t(908)})();