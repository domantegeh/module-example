const { coffeeStock, isCoffeeMachineReady } = require("./state");

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    if (isCoffeeMachineReady) {
      console.log("Coffee is made successfully.");
    } else {
      console.log("Machine is not ready");
    }
  } else {
    console.log("Coffee bean is empty");
  }
};

makeCoffee("robusta", 80);
