import Value from "./Models/Value.js";
import Chip from "./Models/Chip.js";
import Candy from "./Models/Candy.js";
import Soda from "./Models/Soda.js";


let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Chip[]} */
  chips: [],
  /** @type {Candy[]} */
  candys: [],
  /** @type {Soda[]} */
  sodas: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("VendingMachine", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
