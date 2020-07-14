import _store from "../store.js"
import _jobsService from "../Services/JobsService.js"


function _draw(){
 let template = ''
 console.log('job draw ran')
 let jobs = _store.State.jobs
 jobs.sort((a, b) => b.rate - a.rate)
 jobs.forEach(job => template += job.Template)
 document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
 constructor(){
   console.log('Hello from job controller')
   _store.subscribe("jobs", _draw)
 }
 
 addJob(event){
   event.preventDefault()
   let formData = event.target
   console.log('data logging', formData.title)
   let rawJobData = {
     jobTitle: formData.jobTitle.value,
     company: formData.company.value,
     rate: formData.rate.value,
     hours: formData.hours.value,
     description: formData.description.value,
   }
   _jobsService.addJob(rawJobData)
   formData.reset()
 }

 deleteJob(jobId){
   _jobsService.deleteJob(jobId)
 }




}