import _store from '../store.js'
import Car from "../Models/Car.js";

class CarsService {
    constructor() {
        console.log("Hello from the car service");

    }

    deleteCar(carId) {
        _store.deleteCar(carId)
    }

    addCar(rawCarData) {
        if (rawCarData.make != "Chevy" && rawCarData.make != "Subaru") {
            console.error("Invalid Make, Please choose Chevy or Subaru");
            return
        }
        let newCar = new Car(rawCarData)
        _store.addCar(newCar)
    }
}


const SERVICE = new CarsService()

export default SERVICE