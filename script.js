var drag = document.getElementById('draggable');
var drop = document.getElementById('dropper');

drop.addEventListener('dragover', function (event){
    event.preventDefault();
})