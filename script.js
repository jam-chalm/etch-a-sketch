let containerDiv = document.querySelector(".container");
let newDivs = document.createElement('div');
let blackButton = document.querySelector("#black");
let redButton = document.querySelector("#red");
let clearButton = document.querySelector("#clear");
let resizeButton = document.querySelector("#resize");

var number = prompt("How big would you like your Etch-A-Sketch?");

createGrid(number);

function createGrid(number)
{   
    var area = number * number;

    //Sets styles and size for big container
    containerDiv.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    //Resize button
    resizeButton.addEventListener("click", function() {
       
    });
    

    //Creates divs
    for(i=1; i<=area; i++){
        let newDivs = document.createElement('div');
        newDivs.id = "newDivs";
        containerDiv.appendChild(newDivs);
        console.log("div created");

        //Black color button
        blackButton.addEventListener("click", function() {
            newDivs.addEventListener("mouseover", function(){ 
                newDivs.style.backgroundColor = "black";
                //console.log("f");
            });
        });

        //Red color button
        redButton.addEventListener("click", function() {
            newDivs.addEventListener("mouseover", function() {
                newDivs.style.backgroundColor = "red";
            });
        });

        //Clear button
        clearButton.addEventListener("click", function() {
            newDivs.style.backgroundColor = "white";
        });
    }
}
function resize(number) {
    for (i=0; i < number; i++)
    {
        let divToDelete = document.querySelector("#newDivs");
        divToDelete.remove();
    }
    let resize = prompt("How big would you like your Etch-A-Sketch?");
    createGrid(resize);
}
