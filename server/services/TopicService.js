import mongoose from 'mongoose'
import Axios from 'axios'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  title: { type: String, required: true },
})



export default class TopicService {
  get repository() {
    return mongoose.model('Topic', _schema)
  }
}