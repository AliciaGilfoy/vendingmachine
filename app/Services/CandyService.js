import Candy from "../Models/Candy.js"
import _store from "../store.js"







class CandyService {
  deleteCandy(id) {
    let candys = _store.State.candys.filter(candy => candy.id !== id)
    _store.State.candys = candys
    _store.saveState()
  }
  addCandy(newCandy) {
    newCandy = new Candy(newCandy)
    _store.State.candys.push(newCandy)
    _store.saveState()
  }

  constructor() {
    console.log("candy service works")
  }




}

const CANDYSERVICE = new CandyService
export default CANDYSERVICE