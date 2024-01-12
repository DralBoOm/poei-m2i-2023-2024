var drag = document.getElementById('draggable');
var drop = document.getElementById('dropper');

drop.addEventListener('dragover', function (event){
    event.preventDefault();
})

/* Quand drag au dessus de drop */
drop.addEventListener('dragenter', function (event){
    drop.style.backgroundColor = 'yellow';
})

/* Quand drag sort de la drop zone */
drop.addEventListener('dragleave', function (event){
    drop.style.backgroundColor = 'pink';
})



/* Add Data de drag à drop */
drag.addEventListener('dragstart', function (event){
    event.dataTransfer.setData('text/plain', drag.innerHTML);
})

drop.addEventListener('drop', (event) =>{
    const data = event.dataTransfer.getData('text/plain');
    drop.innerHTML = ` ${data}  ${drop.innerHTML}`;
    drop.style.backgroundColor = 'pink';
} )

