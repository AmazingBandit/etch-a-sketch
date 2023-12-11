const container = document.querySelector(".container");
let defaultGridSize = 16;
let rainbow = false;

//loop that creates div 16x16
const createGrid = (gridSize, rainbow) => {
  for (let i = 0; i < gridSize ** 2; i++) {
    let childDiv = document.createElement("div");
    //adds flex size for pixel and changes the pixel based on user input
    childDiv.style.flex = `1 1 calc(100%/${gridSize})`;
    container.append(childDiv);

    //on mouse over changes color
    childDiv.addEventListener("mousemove", () => {
      //Check if rainbow button was pressed
      if (rainbow == true) {
        childDiv.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      } else {
        childDiv.style.backgroundColor = "#202124";
      }
    });
  }
};

const deleteGrid = (rainbow) => {
  let gridSize;
  const askUser = () => {
    gridSize = prompt("Enter a number per side for new grid: ");
    return gridSize;
  };

  //checks for conditions of value entered and continues asking until conditions met
  do {
    askUser();
    if (gridSize == null) {
      return;
    }
  } while (
    gridSize == undefined ||
    gridSize > 200 ||
    gridSize < 1 ||
    isNaN(gridSize) == true
  );

  //clear out grid by removing all child div to prepare for new grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridSize, rainbow);
};

//New Grid button asks user for grid size
const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
  deleteGrid();
});

//Rainbow button makes pixel you hover over random colors
const rainbowBtn = document.querySelector(".rainbowBtn");
rainbowBtn.addEventListener("click", () => {
  rainbow = true;
  deleteGrid(rainbow);
});

createGrid(defaultGridSize, rainbow);
