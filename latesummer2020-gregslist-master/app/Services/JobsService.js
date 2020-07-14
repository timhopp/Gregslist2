import _store from "../store.js"
import Job from "../Models/Jobs.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})

class JobsService {

  constructor() {
    console.log("Hello from the job service");
    this.getJobs()
}
  addJob(rawJobData) {
    _api.post('jobs', rawJobData).then(res =>{
      console.log(res)
      this.getJobs()
    }).catch(err => console.error(err))
  }

  getJobs(){
    _api.get("jobs").then(res => {
      console.log(res)
      let jobs = res.data.data.map(rawJobData => new Job(rawJobData))
      _store.commit('jobs', jobs)
    }).catch(err => console.error(err))
  }

  deleteJob(jobId){
    _api.delete("jobs/" + jobId).then(res => {
      this.getJobs()
    }).catch(err => console.error(err))
  }



}


const SERVICE = new JobsService()
export default SERVICE