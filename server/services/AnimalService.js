import mongoose from 'mongoose'
import Axios from 'axios'

let environmentSchema = new mongoose.Schema({
  children: { type: Boolean },
  dogs: { type: Boolean },
  cats: { type: Boolean }
})

let _schema = new mongoose.Schema({
  gender: { type: String, enum: ["Male", "Female"] },
  age: { type: String, enum: ["Baby", "Young", "Adult", "Senior"] },
  size: { type: String, enum: ["Small", "Medium", "Large", "Xlarge"] }, //is it Xl or xl??
  type: { type: String, enum: ["Dog", "Cat"] },
  environment: [environmentSchema]
})

export default class AnimalService {
  get repository() {
    return mongoose.model('Animal', _schema)
  }
}