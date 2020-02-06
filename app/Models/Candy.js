import { generateId } from "../utils.js"

export default class Candy {


  constructor(data) {
    this.candyBrand = data.candyBrand
    this.candyImg = data.candyImg
    this.candyPrice = data.candyPrice
    this.id = data.id || generateId()
  }




  get Template() {
    return `
    <div class="col-3 options">
    <h5>${this.candyBrand}</h5>
    <img class="item-img" height="75px" width="25px" src="${this.candyImg}" alt="">
    <p class="m-0 p-0">Price: $<span>${this.candyPrice}</span></p>
    <button class="btn btn-success">Buy</button>
    </div>
  `
  }
}