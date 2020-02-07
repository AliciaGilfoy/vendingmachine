import { generateId } from "../utils.js"

export default class Soda {

  constructor(data) {
    this.sodaBrand = data.sodaBrand
    this.sodaPrice = data.sodaPrice
    this.id = data.id || generateId()
  }

  get Template() {
    return `
<div class="col-3 options">
<h5>${this.sodaBrand}</h5>
<img class="item-img" height="75px" width="25px" src="./soda.png" alt="">
<p class="m-0 p-0">Price: $<span>${this.sodaPrice}</span></p>
<button class="btn btn-success" onclick="app.sodaController.deleteSoda(id)">Buy</button>
</div>
`
  }


}