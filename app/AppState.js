import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { House } from './models/House.js'

class ObservableAppState extends EventEmitter {

  //NOTE leave the user and account alone, it is used by the authService to track user identity
  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {Car[]} */
  cars = [
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Accord",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
          "_id": "63f7d6202d1cf882287f12e2",
          "name": "Charles Francis Xavier",
          "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
          "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    ),
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Civic",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
          "_id": "63f7d6202d1cf882287f12e2",
          "name": "Charles Francis Xavier",
          "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
          "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    )
  ]
  /** @type {House[]} */
  houses = [
    new House({
      "_id": "645d60f381faf24223ae886b",
      "bedrooms": 3,
      "bathrooms": 2,
      "levels": 2,
      "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
      "year": 2003,
      "price": 230000,
      "description": "Super sick house",
      "creatorId": "63f7d6202d1cf882287f12e2",
      "createdAt": "2023-05-11T21:41:07.979Z",
      "updatedAt": "2023-05-11T21:41:07.979Z",
      "__v": 0,
      "creator": {
        "_id": "63f7d6202d1cf882287f12e2",
        "name": "Charles Francis Xavier",
        "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
        "id": "63f7d6202d1cf882287f12e2"
      },
    }),
    new House({
      "_id": "645d60f381faf24223ae886b",
      "bedrooms": 4,
      "bathrooms": 2,
      "levels": 3,
      "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
      "year": 1990,
      "price": 240000,
      "description": "amazing views",
      "creatorId": "63f7d6202d1cf882287f12e2",
      "createdAt": "2023-05-11T21:41:07.979Z",
      "updatedAt": "2023-05-11T21:41:07.979Z",
      "__v": 0,
      "creator": {
        "_id": "63f7d6202d1cf882287f12e2",
        "name": "Jeffrey Dalmer",
        "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
        "id": "63f7d6202d1cf882287f12e2"
      },
    }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())