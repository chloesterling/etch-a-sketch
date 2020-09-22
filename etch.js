
const container = document.getElementById("container");
const reset = document.getElementById("reset");
const black = document.getElementById("black");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const lime = document.getElementById("lime");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const pink = document.getElementById("pink");

// Function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16); 

    $("#red").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "red");
        });
    });
    
    $("#orange").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "orange");
        });
    });
    
    $("#yellow").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "yellow");
        });
    });
    
    $("#lime").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "lime");
        });
    });
    
    $("#green").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "green");
        });
    });
    
    $("#blue").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "blue");
        });
    });
    
    $("#purple").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "purple");
        });
    });
    
    $("#pink").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "pink");
        });
    });

    $("#black").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });

    $("#reset").click(function() {
        refreshGrid();
        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });
});

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// random color function

// rainbow color function
function rainbowPen(event) {
    if (event.target !== event.currentTarget) {
        event.target.style.background = setBackground(Color.GREEN);
    }
    event.stopPropagation();
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};



