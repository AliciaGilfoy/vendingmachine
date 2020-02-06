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
    console.log("candy controller works")
  }
  addCandy(event) {
    event.preventDefault();
    let formData = event.target;
    let newCandy = {
      candyBrand: formData.candyBrand.value,
      candyImg: formData.candyImg.value,
      candyPrice: formData.candyPrice.value
    }
    console.log(newCandy)

    _candyService.addCandy(newCandy)
    _draw()
  }

  deleteCandy(id) {
    _candyService.deleteCandy(id)
    _draw()
  }




}