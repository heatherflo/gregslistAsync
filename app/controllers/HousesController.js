import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { setHTML } from "../utils/Writer.js"
import { Pop } from "../utils/Pop.js"
import { getFormData } from "../utils/FormHandler.js"




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
    AppState.on('houses', _drawHouses)
    this.getHouses()

  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
  }

  async createHouse() {
    try {
      event.preventDefault()
      console.log('form show up?')
      const form = event.target
      const formData = getFormData(form)
      console.log(formData, '🗂️')
      await housesService.createHouse(formData)
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
  }
}