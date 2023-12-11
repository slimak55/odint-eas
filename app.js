const reset = document.querySelector('#reset');
let gridSize = 16

const sChange = document.querySelector('.change-size');

function sizeChange(){
    const size = document.querySelector('.size').value;
    if(size > 16){
        alert('Size cannot be larger than 16');
    }
    else{
        gridSize = size;
        resetGrid();
    }
}

function createGrid(){
    const parent = document.querySelector('.box');

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row-e');
        parent.appendChild(row);
        
        for (let i = 0; i < gridSize; i++) {
            const rowE = parent.lastElementChild;
            const colE = document.createElement('div');
            colE.classList.add('col-e');
            colE.setAttribute('id', 'col-e');
            colE.addEventListener('mouseover', fillBox);
            rowE.appendChild(colE);
        }  
    }
}

function fillBox(colE){
    
    colE.target.classList.add('fill');
}

function resetGrid(){ 
    const reset = document.querySelector('.box');
    reset.innerHTML = "";
    createGrid();
}


reset.addEventListener('click', resetGrid);
sChange.addEventListener('click', sizeChange);