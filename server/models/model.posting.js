// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var postSchema = new Schema({
  title: { type: String },
  description: { type: String },
  img: { type: String },
  postBy: { type: Schema.ObjectId, ref: 'User' }
})

// the schema is useless so far
// we need to create a model using it
var Post = mongoose.model('Post', postSchema)

// make this available to our Posts in our Node applications
module.exports = Post
