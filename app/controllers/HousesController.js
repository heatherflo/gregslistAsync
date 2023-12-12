import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"



function _drawHouses() {
  const houses = AppState.houses
  let content = ""
  houses.forEach(house => content += house.houseTemplate)
  setHTML('houses-list', content)
}


export class HousesController {
  constructor() {
    console.log('getting started')
    _drawHouses()
    AppState.on()
  }
}