const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGrid);
const maxToolBarColors = 20;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
createGrid();
createToolBar();



function createGrid(dimension = 16){
    const body = document.querySelector("#sketchArea");
    const sketchBody = document.createElement("div");
    
    sketchBody.id = "sketchBody";
    sketchBody.style.cssText = `grid-template-columns: repeat(${dimension}, 1fr)`;

    for (let x = 0; x < (dimension * dimension); x++)
    {
        const gridSquare = document.createElement("div");
        gridSquare.classList.toggle("gridSquare");

        gridSquare.addEventListener("mouseover", changeColor);
        gridSquare.addEventListener("mousedown", changeColor);

        sketchBody.appendChild(gridSquare);
        body.appendChild(sketchBody);
    }

}

function createToolBar() {
    const toolBar = document.querySelector("#toolBar");
    
    for (let color = 0; color < maxToolBarColors - 1; color++){
        const toolBarColor = document.createElement("div");
        toolBarColor.classList.toggle("toolBarColor");
        toolBarColor.style.backgroundColor = setToolBarColor(color);
        
        toolBar.appendChild(toolBarColor);
    }

    // this creates the random color selector
    const toolBarRandomColor = document.createElement("div");
    toolBarRandomColor.style.cssText = "display: inline-grid;grid-template-columns: repeat(2, 1fr);";
    toolBarRandomColor.classList.toggle("toolBarColor");

    for (let color = 0; color < 4; color++){
        const rainbowColor = document.createElement("div");

        switch (color){
            case 0:
                rainbowColor.style.backgroundColor = "red";
                break;
            case 1:
                rainbowColor.style.backgroundColor = "yellow";
                break;
            case 2:
                rainbowColor.style.backgroundColor = "green";
                break;
            case 3:
                rainbowColor.style.backgroundColor = "blue";
                break;
            default:
                console.log("something went wrong in the random color set up");
                break;
        }

        toolBarRandomColor.appendChild(rainbowColor);
        toolBar.appendChild(toolBarRandomColor);
    }
}

function resetGrid(){
    const body = document.querySelector("#sketchArea");
    let dimensions;
    let notValid = true;

    while (notValid){
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

function setToolBarColor(color){
    switch (color){
        case 0:
            return("white");
        case 1:
            return("black");;
        case 2:
            return("gray");
        case 3:
            return("brown");
        case 4:
            return("#ba0f30");
        case 5:
            return("#2f2440");
        case 6:
            return("#c6b79b");
        case 7:
            return("#ff2511");
        case 8:
            return("#145da0");
        case 9:
            return("#0c2d48");
        case 10:
            return("#2e8bc0");
        case 11:
            return("#b1d4e0");
        case 12:
            return("#76b947");
        case 13:
            return("#b1d8b7");
        case 14:
            return("#2f5233");
        case 15:
            return("#94c973");
        case 16:
            return("#fbb80f");
        case 17:
            return("#fbee0f");
        case 18:
            return("#c598af");
        default:
            console.log("something went wrong in setToolBarColor");
            break;
    }
}

function changeColor(event){
    
    if (event.type === "mouseover" && !mouseDown)
        return;      
    this.style.backgroundColor = getRandomColor();
}

function resetColor(){
    this.style.backgroundColor = "white";
}

function getRandomColor(){
    let hue = Math.floor(Math.random() * 360) + 1;

    return(`hsl(${hue}, 100%, 50%)`);
}