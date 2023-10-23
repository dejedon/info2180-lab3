window.onload = function(){
    const game=document.getElementById("game");
    const status=document.getElementById("status");
    const board=document.getElementById("board");
    const controls=document.getElementsByClassName("controls");
    const button=document.getElementsByClassName("btn")[0];

    const e= board.querySelectorAll('div');
    let play = 'X';
    let poslst=['', '', '', '', '', '', '', '', ''];

    const wincrit= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let z=0; z<=8; z++){
        e[z].setAttribute("class", "square");
    }

    e.forEach( (element, index) => {
        element.addEventListener('click', () => user(element, index));
        element.addEventListener('mouseover', function(){
            element.classList.add('hover');
        });
        element.addEventListener('mouseout', function(){
            element.classList.remove('hover');
        });
    });
    
    button.addEventListener('click', ()=>{
        poslst=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        e.forEach(element =>{
            element.innerText ='';
            element.classList.remove('X');
            element.classList.remove('O');
        });
    });