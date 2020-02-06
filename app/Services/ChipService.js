import Chip from "../Models/Chip.js"
import _store from "../store.js"

class ChipService {
  deleteChip(id) {
    let chips = _store.State.chips.filter(chip => chip.id !== id)
    _store.State.chips = chips
    _store.saveState()
  }
  addChip(newChip) {
    newChip = new Chip(newChip)
    _store.State.chips.push(newChip)
    _store.saveState()
  }

  constructor() {
    console.log("chip service works")
  }


}

const CHIPSERVICE = new ChipService
export default CHIPSERVICE