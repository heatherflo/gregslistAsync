
import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }


  get houseTemplate() {
    return `
    <div class="col-4">
      <div class="card">
      <img src="${this.imgUrl}" class="img-fluid"/>
      <h4 class="text-center mt-1"> ${this.bedrooms} - ${this.bathrooms} - ${this.year}</h4>
      <p class="text-end text-success me-2 fw-bold">$${this.price}</p>
      </div>
      </div>`
  }


}