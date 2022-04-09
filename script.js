const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGrid);
createGrid();



function createGrid(dimension = 16){
    const body = document.querySelector("body");
    const sketchBody = document.createElement("div");
    
    sketchBody.id = "sketchBody";
    sketchBody.style.cssText = `grid-template-columns: repeat(${dimension}, 1fr)`;

    for (let x = 0; x < (dimension * dimension); x++)
    {
        const gridSquare = document.createElement("div");
        gridSquare.classList.toggle("gridSquare");

        gridSquare.addEventListener("mouseover", changeColor);

        sketchBody.appendChild(gridSquare);
        body.appendChild(sketchBody);
    }

}

function resetGrid(){
    const body = document.querySelector("body");
    let dimensions;
    let notValid = true;

    while(notValid){
        dimensions = prompt("Enter the number of squares for the new grid.(100 is the max)");
    
        if (dimensions != NaN && (dimensions < 100 && dimensions > 0)){
            body.removeChild(document.querySelector("#sketchBody"));
            createGrid(dimensions);
            notValid = false;
        }
        else {
            alert("invalid number was entered")
        }
    } 

     

    
}

function changeColor(){
    this.style.backgroundColor = "blue";
}

function resetColor(){
    this.style.backgroundColor = "white";
}

