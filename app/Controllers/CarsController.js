import _carsService from '../Services/CarsService.js'
import _store from '../store.js'

// we need a blank template lasjfoisajfoijwfoiwjsfo
// we need the cars
// we need the element to inject into
function _draw() {
    let template = ""
    let cars = _store.State.cars
    cars.forEach(car => template += car.Template)
    document.getElementById("cars").innerHTML = template
}

export default class CarsController {
    constructor() {
        console.log("Hello from cars controller");
        _draw()
    }

    addCar(event) {
        event.preventDefault();
        let formData = event.target
        console.log("it happened", formData.make.value);
        let rawCarData = {
            make: formData.make.value,
            model: formData.model.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value,
        }
        _carsService.addCar(rawCarData)
        formData.reset()
        _draw()
    }

    deleteCar(carId) {
        _carsService.deleteCar(carId)
        _draw()
    }
}