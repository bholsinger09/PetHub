import mongoose from 'mongoose'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let commentSchema = new Schema({
  description: { type: String, require: true },
  creator: { type: String, required: true },
}, { timestamps: true })

let _schema = new Schema({
  topicId: { type: ObjectId, ref: "Topic", required: true },
  authorId: { type: ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: [commentSchema]
}, { timestamps: true })

export default class PostService {
  get repository() {
    return mongoose.model("Post", _schema)
  }
}