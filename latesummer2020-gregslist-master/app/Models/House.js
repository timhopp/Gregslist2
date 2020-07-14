export default class House {
  constructor(data) {
      this.id = data._id || data.id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.price = data.price
      this.year = data.year
      this.imgUrl = data.imgUrl
      this.description = data.description
  }

  get Template() {
      return `
          <div class="col-3 border rounded shadow bg-main m-4 p-3">
              <h2>${this.bedrooms} Bed/${this.bathrooms} Bath</h2>
              <img class="img-fluid" src="${this.imgUrl}" style="max-height:200px;"/>
              <h5>Price: ${this.price}</h5>
              <h5>Year Built: ${this.year}</h5>
              <h5>Levels: ${this.levels}</h5>
              
              <h5>Description: ${this.description}</h5>
              <button class="btn btn-danger ml-3 mr-3" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button class="btn btn-info ml-3 mr-3" onclick="app.housesController.bidOnHouse('${this.id}')">Bid</button>

          </div>
          `
  }
}