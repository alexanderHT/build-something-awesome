var modelPost = require('../models/model.posting')

var controllerPosting = {
  /* get all posting */
  getAllPosting: function (req, res) {
    modelPost
      .find({})
      .populate('postBy')
      .exec(function (err, data) {
        if (err) return handleError(err)
        // else console.log({data})
        else res.json(data)
      })
  },
  /* create one post */
  addOnePost: function (req, res) {
    console.log(req.body.title)
    console.log(req.body.description)
    console.log(req.body.img)
    console.log(req.body.userid)

    let newPost = modelPost({
      title: req.body.title,
      description: req.body.description,
      img: req.body.img,
      postBy: req.body.userid
    })

    newPost.save(function (err, data) {
      if (err) throw err
      modelPost
        .findOne({ _id: data._id })
        .populate('postBy')
        .exec(function (err, data) {
          if (err) return handleError(err)
          else res.json(data)
        })
    })
  },
  /* get one post */
  getOnePost: function (req, res) {
    modelPost
      .findOne({ _id: req.params.id })
      .populate('postBy')
      .exec(function (err, data) {
        if (err) return handleError(err)
        else res.json(data)
      })
  },
  deleteOnePost: function (req, res) {
    modelPost.findOneAndRemove({ _id: req.body.id }, function (err, data) {
      if (err) throw err
      res.json(data._id)
    })
  },
  getAllPostingByUser: function (req, res) {
    modelPost
      .find({ postBy: req.params.userid })
      .populate('postBy')
      .exec(function (err, data) {
        if (err) return handleError(err)
        // else console.log({data})
        else res.json(data)
      })
  },
  editOnePost: function (req, res) {
    modelPost.findOneAndUpdate({ _id: req.body.id }, { title: req.body.title, description: req.body.description, img: eq.body.img }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerPosting
