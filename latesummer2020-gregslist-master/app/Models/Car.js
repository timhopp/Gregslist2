
export default class Car {
    constructor(data) {
        this.id = data._id || data.id
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }

    get Template() {
        return `
            <div class="col-3 border rounded shadow m-4 p-3 bg-main">
                <h2>${this.make} - ${this.model} </h2>
                <img class="img-fluid" src="${this.imgUrl}" style="max-height:200px;"/>
                <h5>Year: ${this.year}</h5>
                <h5>Price: ${this.price}</h5>
                <h5>Description: ${this.description}</h5>
                <button class="btn btn-danger ml-3 mr-3" onclick="app.carsController.deleteCar('${this.id}')">Delort</button>
                <button class="btn btn-info ml-3 mr-3" onclick="app.carsController.bidOnCar('${this.id}')">Bid</button>

            </div>
            `
    }
}