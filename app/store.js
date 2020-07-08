import Value from "./Models/Value.js";
import Car from "./Models/Car.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars: [
    // new Car("Chevy", "Tracker", 1989, 2000, "", "Its a trackin"),
    // new Car("Subaru", "Forester", 2017, 23000, "", "The Jim Mobile")
  ]
};

class Store {
  deleteCar(carId) {
    let indexToRemove = _state.cars.findIndex(car => car.id == carId)
    // let indexToRemove = _state.cars.findIndex(function (car) {
    //   return car.id == carId
    // })
    if (indexToRemove < 0) {
      console.error("INVALID CAR ID")
      return
    }
    _state.cars.splice(indexToRemove, 1)
  }

  addCar(newCar) {
    _state.cars.push(newCar)
  }

  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
