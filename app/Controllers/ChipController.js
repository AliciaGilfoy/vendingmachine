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
    _draw()
  }
  addChip(event) {
    event.preventDefault();
    let formData = event.target;
    let newChip = {
      chipBrand: formData.chipBrand.value,
      chipPrice: formData.chipPrice.value
    }
    console.log(newChip)

    _chipService.addChip(newChip)
    formData.reset()
    // @ts-ignore
    $('#chip-form').modal('toggle');
    _draw()
  }

  deleteChip(id) {
    _chipService.deleteChip(id)
    _draw()
  }
}