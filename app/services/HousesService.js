import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {

  async getHouses() {
    const response = await fetch('https://sandbox.codeworksacademy.com/api/houses')
    const axiosResponse = await api.get('api/houses')
    console.log('response', response)
    const body = await response.json()
    console.log(body)
    const newHouses = body.map(houseData => new House(houseData))
    console.log(newHouses, '🏠🏠')
    AppState.houses = newHouses
  }

  async createHouse(formData) {
    const response = await api.post('api/houses', formData)
    console.log(response, '🏣')
  }

}

export const housesService = new HousesService