import _housesService from '../Services/HousesService.js'
import _store from '../store.js'
import store from '../store.js';

// we need a blank template
// we need the cars
// we need the element to inject into
function _draw() {
    let template = ""
    console.log("draw house ran");
    let houses = _store.State.houses
    // NOTE sorts cars by their price. this custom sort expects either a positive or a negative to either move the item up or down in the array 
    houses.sort((a, b) => b.price - a.price)
    houses.forEach(house => template += house.Template)
    document.getElementById("houses").innerHTML = template
}

export default class HousesController {
    constructor() {
        console.log("Hello from houses controller");
        store.subscribe("houses", _draw)
    }

    addHouse(event) {
        event.preventDefault();
        let formData = event.target
        console.log("it happened", formData.price.value);
        let rawHouseData = {
           bedrooms: formData.bedrooms.value,
           bathrooms: formData.bathrooms.value,
           levels: formData.levels.value,
           price: formData.price.value,
           year: formData.year.value,
           imgUrl: formData.imgUrl.value,
           description: formData.description.value,
        }
        _housesService.addHouse(rawHouseData)
        formData.reset()
    }

    deleteHouse(houseId) {
        _housesService.deleteHouse(houseId)
    }

    bidOnHouse(houseId) {
        _housesService.bidOnHouse(houseId)
    }

    // NOTE you can use this for an on click to draw the car form and then get the cars triggering the draw car method from our listeners
    // getCars() {
    //     _drawCarForm()
    //     _carsService.getCars()
    // }
}