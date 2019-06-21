import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
const SALT = 10

let favoritesSchema = new Schema({
  petId: { type: String },
})

let environmentSchema = new mongoose.Schema({
  children: { type: Boolean },
  dogs: { type: Boolean },
  cats: { type: Boolean }
})

let searchesSchema = new Schema({
  gender: { type: String, enum: ["Male", "Female"] },
  age: { type: String, enum: ["Baby", "Young", "Adult", "Senior"] },
  size: { type: String, enum: ["Small", "Medium", "Large", "xlarge"] },
  type: { type: String, enum: ["Dog", "Cat"] },
  environment: [environmentSchema]
  //we'll finish building out this data when we solidfy the search criteria
})

let _schema = new Schema({
  name: { type: String, required: true },
  //every email must be unique on the database
  email: { type: String, required: true, unique: true },
  zip: { type: Number },
  hash: { type: String, required: true },
  searches: [searchesSchema],
  favorites: [favoritesSchema],
}, { timestamps: true })

//schema.methods are used to add a method to a Model instance
_schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.hash, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err)
      }
      return resolve(isMatch)
    })
  })
}

export default class UserService {
  get repository() {
    return mongoose.model('User', _schema)
  }
  generateHash(password) {
    return bcrypt.hashSync(password, SALT)
  }
}


