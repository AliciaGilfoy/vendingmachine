import ValuesController from "./Controllers/ValuesController.js";
import ChipController from "./Controllers/ChipController.js"
import CandyController from "./Controllers/CandyController.js"
import SodaController from "./Controllers/SodaController.js"

class App {
  valuesController = new ValuesController();
  chipController = new ChipController();
  candyController = new CandyController();
  sodaController = new SodaController();
}

window["app"] = new App();
