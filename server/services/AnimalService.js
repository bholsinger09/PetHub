import mongoose from 'mongoose'
import Axios from 'axios'

let _schema = new mongoose.Schema({
  //I dont know whats going in here
})

export default class AnimalService {
  get repository() {
    return mongoose.model('Animal', _schema)
  }
}