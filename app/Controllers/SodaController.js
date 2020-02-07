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
    _draw()
  }
  addSoda(event) {
    event.preventDefault();
    let formData = event.target;
    let newSoda = {
      sodaBrand: formData.sodaBrand.value,
      sodaPrice: formData.sodaPrice.value
    }

    _sodaService.addSoda(newSoda)
    formData.reset()
    // @ts-ignore
    $('#soda-form').modal('toggle');
    _draw()
  }

  deleteSoda(id) {
    _sodaService.deleteSoda(id)
    _draw()
  }

}