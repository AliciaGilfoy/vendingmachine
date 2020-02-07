import _sodaService from "../Services/SodaService.js"
import _store from "../store.js"


function _draw() {
  let sodas = _store.State.sodas
  let sodaElem = document.getElementById("sodaRow")
  let template = ""

  sodas.forEach(soda => {
    template += soda.Template
  })

  sodaElem.innerHTML = template
}


export default class SodaController {

  constructor() {
    console.log("soda controller works")
    _draw()
  }
  addSoda(event) {
    event.preventDefault();
    let formData = event.target;
    let newSoda = {
      sodaBrand: formData.sodaBrand.value,
      sodaPrice: formData.sodaPrice.value
    }
    console.log(newSoda)

    _sodaService.addSoda(newSoda)
    _draw()
  }

  deleteSoda(id) {
    _sodaService.deleteSoda(id)
    _draw()
  }

}