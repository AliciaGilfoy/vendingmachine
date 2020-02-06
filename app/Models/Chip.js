import { generateId } from "../utils.js"


export default class Chip {


  constructor(data) {
    this.chipBrand = data.chipBrand
    this.chipImg = data.chipImg
    this.chipPrice = data.chipPrice
    this.id = data.id || generateId()
  }

  get Template() {
    return `
  <div class="col-3 options">
  <h5>${this.chipBrand}</h5>
  <img class="item-img" height="75px" width="25px" src="${this.chipImg}" alt="">
  <p class="m-0 p-0">Price: $<span>${this.chipPrice}</span></p>
  <button class="btn btn-success">Buy</button>
  </div>
`
  }



}