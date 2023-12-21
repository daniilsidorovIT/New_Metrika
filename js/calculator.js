const sizeInputNode = document.querySelector(".calculator__slider");
const additionalServicesInputNode = document.querySelector(
  ".calculator__services-list"
);
const projectTotalCost = document.querySelector(".js-total");
const buildingType = document.querySelector("select");

const squareMeterCostNode = document.querySelector(".js-cost");

const solutionsDecrementBtnNode = document.querySelector(
  ".counter__decrement-btn1"
);

const variantsDecrementBtnNode = document.querySelector(
  ".counter__decrement-btn2"
);
const visualizationsDecrementBtnNode = document.querySelector(
  ".counter__decrement-btn3"
);

const solutionsIncrementBtnNode = document.querySelector(
  ".counter__increment-btn1"
);

const variantsIncrementBtnNode = document.querySelector(
  ".counter__increment-btn2"
);

const visualizationsIncrementBtnNode = document.querySelector(
  ".counter__increment-btn3"
);

const solutionCounterNode = document.querySelector(".counter__value1");
const variantsCounterNode = document.querySelector(".counter__value2");
const visualizationsCounterNode = document.querySelector(".counter__value3");

//------------------------------------Инициализация------------------------------------

let squareMeterCost = 1000;

const init = () => {
  squareMeterCostNode.innerText = squareMeterCost.toLocaleString();
};

init();

//---------------------------------------Функции---------------------------------------

const increment = (output) => {
  counter = output.innerText;
  counter++;
  output.innerText = counter;
};

const decrement = (output) => {
  counter = output.innerText;
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  output.innerText = counter;
};

const totalCost = () => {
  let cost = sizeInputNode.value * squareMeterCost;
  projectTotalCost.innerText = cost.toLocaleString();

  let inputsStorage = document.querySelectorAll(
    ".calculator__services-checkbox"
  );

  for (input of inputsStorage) {
    if (input.checked) {
      cost += parseInt(input.value);
      projectTotalCost.innerText = cost.toLocaleString();
    }
  }

  return cost;
};

const buildingTypeHandler = (e) => {
  if (e.target.value === "Квартира") {
    squareMeterCost = 1000;
    squareMeterCostNode.innerText = squareMeterCost.toLocaleString();
    totalCost();
  }
  if (e.target.value === "Дом") {
    squareMeterCost = 1500;
    squareMeterCostNode.innerText = squareMeterCost.toLocaleString();
    totalCost();
  }
};

//----------------------------------Слушатели событий----------------------------------

buildingType.addEventListener("change", buildingTypeHandler);

sizeInputNode.addEventListener("input", totalCost);

additionalServicesInputNode.addEventListener("click", totalCost);

solutionsIncrementBtnNode.addEventListener("click", () =>
  increment(solutionCounterNode)
);

variantsIncrementBtnNode.addEventListener("click", () =>
  increment(variantsCounterNode)
);

visualizationsIncrementBtnNode.addEventListener("click", () =>
  increment(visualizationsCounterNode)
);

solutionsDecrementBtnNode.addEventListener("click", () =>
  decrement(solutionCounterNode)
);

variantsDecrementBtnNode.addEventListener("click", () =>
  decrement(variantsCounterNode)
);

visualizationsDecrementBtnNode.addEventListener("click", () =>
  decrement(visualizationsCounterNode)
);

// Method #1
var num = 1234567890;
var result = num.toLocaleString(); // or .toLocaleString('ru');
console.log(result);

// // Method #2
// function numberWithSpaces(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// }
// console.log(numberWithSpaces(100));
// console.log(numberWithSpaces(10000));
