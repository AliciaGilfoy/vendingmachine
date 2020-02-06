import { generateId } from "../utils.js"

export default class Soda {

  constructor(data) {
    this.sodaBrand = data.sodaBrand
    this.sodaImg = data.sodaImg
    this.sodaPrice = data.sodaPrice
    this.id = data.id || generateId()
  }

  get Template() {
    return `
<div class="col-3 options">
<h5>${this.sodaBrand}</h5>
<img class="item-img" height="75px" width="25px" src="${this.sodaImg}" alt="">
<p class="m-0 p-0">Price: $<span>${this.sodaPrice}</span></p>
<button class="btn btn-success">Buy</button>
</div>
`
  }


}