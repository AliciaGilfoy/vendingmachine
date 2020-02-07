import _candyService from "../Services/CandyService.js"
import _store from "../store.js"


function _draw() {
  let candys = _store.State.candys
  let candyElem = document.getElementById("candyRow")
  let template = ""

  candys.forEach(candy => {
    template += candy.Template
  })

  candyElem.innerHTML = template
}


export default class CandyController {


  constructor() {
    _draw()
  }
  addCandy(event) {
    event.preventDefault();
    let formData = event.target;
    let newCandy = {
      candyBrand: formData.candyBrand.value,
      candyPrice: formData.candyPrice.value
    }

    _candyService.addCandy(newCandy)
    formData.reset()
    // @ts-ignore
    $('#candy-form').modal('toggle');
    _draw()
  }

  deleteCandy(id) {
    _candyService.deleteCandy(id)
    _draw()
  }




}