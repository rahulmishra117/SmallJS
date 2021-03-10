var color=["red","yellow","green"];
var colindex=0;
function colorchange(){
    var col=document.getElementById("block");
    if(colindex >= color.length){
        colindex=0;

    }
    col.style.backgroundColor=color[colindex];
    colindex++;
}


var shape=["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];
var shapeindex=0;
function shapechange(){
    var shacol=document.getElementById("square");
    if(shapeindex >= shape.length){
        shapeindex=0;
    }
    shacol.style.background=shape[shapeindex];
    shapeindex++;
}