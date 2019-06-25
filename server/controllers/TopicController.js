import express from 'express'
import TopicService from '../services/TopicService.js';


let _service = new TopicService()
let _repo = _service.repository


export default class TopicController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/post', this.getPostsByTopicId)
      .post('', this.create)
      .use(this.defaultRoute)
  }
  defaultRoute(req, res, next) {
    next({ status: 404, nessage: "No such route" })
  }
  async getAll(req, res, next) {
    try {
      let data = await _repo.find({})
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getById(req, res, next) {
    try {
      let data = await _repo.findOne({ _id: req.params.id }) //_id??
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getPostsByTopicId(req, res, next) {
    try {
      let data = await _repo.find({ topicId: req.params.id })
      return res.send(data)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      let data = await _repo.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

}