export default class Job {
  constructor(data) {
    this.id = data._id || data.id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
}

get Template() {
  return `
      <div class="col-3 bg-main m-4 p-3 border rounded shadow">
          <h2>Job Title: ${this.jobTitle}</h2>
          <h4>Company: ${this.company}</h4>
          <h4>Salary: ${this.rate}</h4>
          <h4>Hours: ${this.hours}</h4>
          <h4>Description: ${this.description}</h4>
          <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>

      </div>
      `
}
}