import Value from "./Models/Value.js";
import Chip from "./Models/Chip.js";
import Candy from "./Models/Candy.js";
import Soda from "./Models/Soda.js";

function _loadState() {
  try {
    let data = JSON.parse(localStorage.getItem("VendingMachine"))
    _state.candys = data.candys.map(c => new Candy(c))
    _state.chips = data.chips.map(ch => new Chip(ch))
    _state.sodas = data.sodas.map(s => new Soda(s))
  } catch (e) {
  }
}

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

_loadState()

const STORE = new Store();
export default STORE;
