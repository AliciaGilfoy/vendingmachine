import _chipService from "../Services/ChipService.js"
import _store from "../store.js"

function _draw() {
  let chips = _store.State.chips
  let chipElem = document.getElementById("chipRow")
  let template = ""

  chips.forEach(chip => {
    template += chip.Template
  })

  chipElem.innerHTML = template
}



export default class ChipController {


  constructor() {
    console.log("chip controller works")
  }
  addChip(event) {
    event.preventDefault();
    let formData = event.target;
    let newChip = {
      chipBrand: formData.chipBrand.value,
      chipImg: formData.chipImg.value,
      chipPrice: formData.chipPrice.value
    }
    console.log(newChip)

    _chipService.addChip(newChip)
    _draw()
  }

  deleteChip(id) {
    _chipService.deleteChip(id)
    _draw()
  }
}