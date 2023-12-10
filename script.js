const container = document.querySelector(".container");
let defaultGridSize = 16;

//loop that creates div 16x16
const createGrid = (x) => {
  for (let i = 0; i < x ** 2; i++) {
    let childDiv = document.createElement("div");
    container.append(childDiv);

    //on mouse over changes color to red
    childDiv.addEventListener("mouseover", () => {
      childDiv.style.backgroundColor = "red";
    });
  }
};

//New Grid button asks user for grid size
const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
  let gridSize;
  const askUser = () => {
    gridSize = prompt(
      "What size would you like the grid to be? (ex 5 will result in 5x5, ect."
    );
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
    gridSize > 100 ||
    gridSize < 1 ||
    isNaN(gridSize) == true
  );

  //clear out grid by removing all child div to prepare for new grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridSize);
});

createGrid(defaultGridSize);
