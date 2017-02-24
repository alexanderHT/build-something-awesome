var modelPost = require('../models/model.posting.js');

var controllerPosting = {
  /* get all posting */
  getAllPosting: function(req, res){
    modelPost
      .find({})
      .populate('postBy')
      .exec(function (err, data) {
      if (err) return handleError(err)
      // else console.log({data})
      else res.json(data)
      })
  }
}

module.exports = controllerPosting;
