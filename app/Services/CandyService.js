import Candy from "../Models/Candy.js"
import _store from "../store.js"


// function _reset() {
//   document.getElementById("purchase").innerHTML = ""
// }



// function _purchase(id) {
//   let candyP = _store.State.candys.find(candy => candy.id == id)
//   document.getElementById("purchase").innerHTML = candyP.Template
//   setTimeout(_reset, 3000)
// }




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

  }




}

const CANDYSERVICE = new CandyService
export default CANDYSERVICE