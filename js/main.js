const boxKeyArr = document.querySelectorAll('.box__key .key-value');
const boxCodeArr = document.querySelectorAll('.box__code .key-value');
const boxWhichArr = document.querySelectorAll('.box__which .key-value');
const insert = document.querySelector('#insert');
const boxStart = document.querySelector('.box__start');
const boxBigWhichArr = document.querySelectorAll('.box__big-which .key-value');

window.addEventListener('keydown', (e) => {
    const code = e.code;
    const key = e.key;
    const which = e.which;

    boxCodeArr.forEach(boxCode => {
        boxCode.innerHTML = code;
    });
    boxKeyArr.forEach(boxKey => {
        boxKey.innerHTML = key;
    });
    boxWhichArr.forEach(boxWhich => {
        boxWhich.innerHTML = which;
    });
    boxBigWhichArr.forEach(boxBigWhich => {
        boxBigWhich.innerHTML = which;
    });

    boxStart.style.display = 'none';
    insert.style.display = 'flex';
});