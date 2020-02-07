import { generateId } from "../utils.js"

export default class Candy {


  constructor(data) {
    this.candyBrand = data.candyBrand
    this.candyPrice = data.candyPrice
    this.id = data.id || generateId()
  }




  get Template() {
    return `
    <div class="col-3 options">
    <h5>${this.candyBrand}</h5>
    <img class="item-img" height="75px" width="25px" src="./candy.png" alt="">
    <p class="m-0 p-0">Price: $<span>${this.candyPrice}</span></p>
    <button class="btn btn-success" onclick="app.candyController.deleteCandy(id)">Buy</button>
    </div>
  `
  }
}