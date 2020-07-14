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
          <div class="col-3 border rounded shadow">
              <h1>${this.bedrooms} Bed/${this.bathrooms} Bath</h1>
              <h1>${this.price}</h1>
              <h1>${this.year}</h1>
              <h1>${this.levels}</h1>
              <img class="img-fluid" src="${this.imgUrl}"/>
              <h1>${this.description}</h1>
              <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button class="btn btn-info" onclick="app.housesController.bidOnHouse('${this.id}')">Bid</button>

          </div>
          `
  }
}