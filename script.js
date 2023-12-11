const container = document.querySelector(".container");
let defaultGridSize = 16;

//loop that creates div 16x16
const createGrid = (x) => {
  for (let i = 0; i < x ** 2; i++) {
    let childDiv = document.createElement("div");
    //adds flex size for pixel and changes the pixel based on user input
    childDiv.style.flex = `1 1 calc(100%/${x})`;
    container.append(childDiv);

    //on mouse over changes color to red
    childDiv.addEventListener("mousemove", () => {
      childDiv.style.backgroundColor = "green";
    });
  }
};

//New Grid button asks user for grid size
const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
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
  createGrid(gridSize);
});

createGrid(defaultGridSize);
