import { generateId } from "../utils.js"
import { generateMonsterImg } from "../utils.js"

export default class Candy {


  constructor(data) {
    this.candyBrand = data.candyBrand
    this.candyPrice = data.candyPrice
    this.id = data.id || generateId()
    this.candyImg = data.Img || generateMonsterImg()
  }




  get Template() {
    return `
    <div class="col-3 options">
    <h5>${this.candyBrand}</h5>
    <img class="item-img" height="75px" width="25px" src="${this.candyImg}" alt="">
    <p class="m-0 p-0">Price: $<span>${this.candyPrice}</span></p>
    <button class="btn btn-success" onclick="app.candyController.deleteCandy('${this.id}')">Buy</button>
    </div>
    `
  }
}