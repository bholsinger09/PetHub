import express from 'express'
import UserService from '../services/UserService.js';


let _service = new UserService()
let _repo = _service.repository


export default class UserController {
  constructor() {
    this.router = express.Router()
      .get(':/id', this.getAnimalById)
      // .get('', this.getDogs)
      // .get('', this.getCats)
      // .get('/:id', this.getDogById)
      // .get('/:id', this.getCatById)
      .use(this.defaultRoute)
  }
  defaultRoute(req, res, next) {
    next({ status: 404, nessage: "No such route" })
  }
  async getAnimalById(req, res, next) {
    try {
      // url/id getting data.name && data.breed && data.image.medium
      let data = await _repo.findById(req.id)//findById??
      console.log(data)
      return res.send(data)
    } catch (error) { next(error) }
  }
}