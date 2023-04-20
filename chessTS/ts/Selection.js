import { PieceType } from './CustomTypes.js';
const waitForSelection = () => {
    return new Promise((resolve) => { });
};
export const selectFigure = () => {
    var _a;
    const choices = document.querySelectorAll('.selection-box__choice-box');
    (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    const figure = new Promise((resolve) => {
        choices[0].addEventListener('click', () => {
            var _a;
            console.log('ZWRACAM ROOK');
            (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            resolve(PieceType.ROOK);
        });
        choices[1].addEventListener('click', () => {
            var _a;
            console.log('ZWRACAM KNIGHT');
            (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            resolve(PieceType.KNIGHT);
        });
        choices[2].addEventListener('click', () => {
            var _a;
            console.log('ZWRACAM BISHOP');
            (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            resolve(PieceType.BISHOP);
        });
        choices[3].addEventListener('click', () => {
            var _a;
            console.log('ZWRACAM QUEEN');
            (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            resolve(PieceType.QUEEN);
        });
    });
    return figure;
};
