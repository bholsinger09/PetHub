import express from 'express'
import PetApiService from '../services/PetApiService.js';


let _service = new PetApiService()
let _repo = _service.getAnimals


export default class AnimalController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAnimals)
      .get('', this.getDogs)
      // .get('', this.getCats)
      // .get('/:id', this.getDogById)
      // .get('/:id', this.getCatById)
      .use(this.defaultRoute)
  }
  defaultRoute(req, res, next) {
    next({ status: 404, nessage: "No such route" })
  }
  async getAnimals(req, res, next) {
    try {
      let data = await _service.getAnimals()
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getDogs(req, res, next) {
    try {
      let data = await _repo.find({})
      return res.send
    } catch (error) {

    }
  }
  async getById(req, res, next) {
    try {
      let data = await _repo.findOne({ _id: req.params.id }) //_id??
      return res.send(data)
    } catch (error) { next(error) }
  }


}