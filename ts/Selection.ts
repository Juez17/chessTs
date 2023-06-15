import { PieceType } from './CustomTypes.js';
import { Piece } from './Piece';

const waitForSelection = () => {
  return new Promise((resolve) => {});
};

export const selectFigure: () => Promise<PieceType> = () => {
  const choices = document.querySelectorAll('.selection-box__choice-box');
  document.querySelector('.modal')?.classList.remove('hidden');
  
  const figure: Promise<PieceType> = new Promise((resolve) => {
    choices[0].addEventListener('click', () => {
      console.log('ZWRACAM ROOK');
      document.querySelector('.modal')?.classList.add('hidden');
      resolve(PieceType.ROOK);
    });
    choices[1].addEventListener('click', () => {
      console.log('ZWRACAM KNIGHT');
      document.querySelector('.modal')?.classList.add('hidden');
      resolve(PieceType.KNIGHT);
    });
    choices[2].addEventListener('click', () => {
      console.log('ZWRACAM BISHOP');
      document.querySelector('.modal')?.classList.add('hidden');
      resolve(PieceType.BISHOP);
    });
    choices[3].addEventListener('click', () => {
      console.log('ZWRACAM QUEEN');
      document.querySelector('.modal')?.classList.add('hidden');
      resolve(PieceType.QUEEN);
    });
  });

  return figure;
};
