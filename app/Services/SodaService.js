import Soda from "../Models/Soda.js"
import _store from "../store.js"


class SodaService {
  deleteSoda(id) {
    let sodas = _store.State.sodas.filter(soda => soda.id !== id)
    _store.State.sodas = sodas
    _store.saveState()
  }
  addSoda(newSoda) {
    newSoda = new Soda(newSoda)
    _store.State.sodas.push(newSoda)
    _store.saveState()
  }


  constructor() {
    console.log("soda service works")
  }
}

const SODASERVICE = new SodaService
export default SODASERVICE