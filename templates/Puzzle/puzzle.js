var rows = 4;
var cols = 4;
document.addEventListener("DOMContentLoaded", function() {
    var puzzleContainer = document.getElementById("puzzleContainer");
    var start = document.getElementById("start");
    var pieceBox = document.getElementById("pieceBox");
    var message = document.getElementById("message");
    var reset = document.getElementById("reset");

    puzzleContainer.innerHTML = createGrids(true);
    start.addEventListener("click", function() {
        var allDivs = document.querySelectorAll(".piece");
        pieceBox.innerHTML = "";
        console.log(allDivs);
       
        for(var i=0; i < allDivs.length; i++) {
            var leftDistance = Math.floor((Math.random()*300)) + 'px';
            var topDistance = Math.floor((Math.random()*300)) + 'px';
            allDivs[i].setAttribute('dragabble', true);
            allDivs[i].setAttribute('ondragstart', "startDrag(event)");
            allDivs[i].setAttribute('ondragend', "end(event)");
            allDivs[i].style.position = 'absolute';
            allDivs[i].style.left = leftDistance;
            allDivs[i].style.top = topDistance;
            pieceBox.appendChild(allDivs[i]);
        };
        puzzleContainer.innerHTML = createGrids(false);
        message.innerHTML = "";
        message.style.display = "none";
        (this).style.display = "none";
        reset.style.direction = "none";
    });
    reset.addEventListener('click', function() {
        pieceBox.innerHTML = "";
        puzzleContainer.innerHTML = createGrids(true);
        (this).style.display = "none";
        message.innerHTML = "";
        message.style.display = "none";
        start.style.display = "block";
    });
});
function createGrids(image){
    var str = '';
    for(var i=0, top=0, sequence=0; i < rows; i++, top-=100) {
        for(var j=0, left=0; j < cols; j++, left-= 100, sequence++) {
            if(image) {
                str += '<div style="background-position: ' + left + 'px ' + top +'px;" class="img piece" id="'+sequence+'"></div>';
            }else{
                str += '<div style="background-image:none; position:relative" class="img zone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            }
        }
    }
    return str;
}

function startDrag(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('puzzleId', e.target.id);
    e.dataTransfer.setDragImage(e.target, 50, 50);
    return true;
}
function allowDrop(e) {
    e.preventDefault();
}
function drop(e) {
    var puzzle = e.dataTransfer.getData("puzzleId");
    puzzleId = document.getElementById(puzzle);
    var zone = e.target;
    if(e.target.className === "img zone") {
        e.target.appendChild(puzzleId)
        puzzleId.style.top = 0;
        puzzleId.style.left = 0;
        puzzleId.className += " dropped";  
    }else{
        return false;
    }    
}
function end(e) {
    checkPuzzle();
    e.dataTransfer.clearData('puzzleId');
    return true;
}
function checkPuzzle() {
    var dropped = document.querySelectorAll('.dropped');
    var message = document.getElementById('message');
    if(dropped.length != 16) {
      return false;
    }
    for(var i=0; i<16; i++) {
        if(i != dropped[i].id) {
            message.innerHTML = 'Nope! Try it again! :(';
            message.style.display = "block"
            return false;
        }
    }
    message.innerHTML = "YaY! Sean is happy now :)";
    message.style.display = "block";
            return true;
}