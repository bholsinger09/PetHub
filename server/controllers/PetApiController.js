import express from 'express'
import PetApiService from '../services/PetApiService.js';


let _service = new PetApiService()
let _repo = _service.getAnimals


export default class AnimalController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAnimals)
      .get('/:id', this.getAnimal)
      // .get('', this.getDogs)
      // .get('', this.getCats)
      // .get('/:id', this.getCatById)
      .use(this.defaultRoute)
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No such route" })
  }
  async getAnimals(req, res, next) {
    try {
      let data = await _service.getAnimals(req.url)
      console.log(data)
      return res.send(data)
    } catch (error) { next(error.message) }
  }
  async getAnimal(req, res, next) {
    try {
      let data = await _service.getAnimal(req.url)
      console.log(data)
      return res.send(data)
    } catch (error) { next(error.message) }
  }
}