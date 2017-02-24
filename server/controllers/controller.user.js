var modelUser = require('../models/mode.user.js');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var controllerUser = {
  addOneUser: function(req, res){
    console.log(req.body);
    var newUser = modelUser({
      username: req.body.username,
      password: passwordHash.generate(req.body.password)
    })

    newUser.save(function(err, data){
      if (err) console.log(err);
      res.json("register succesfull!")
    })
  },
  login: function(req, res){
    console.log(req.body);
    modelUser.findOne({ username: req.body.username }, function(err, data){
      if (err) throw err
        // check username find or not
        if (data) {
          // verify password
          if (passwordHash.verify(req.body.password, data.password)) {
            var token = jwt.sign({ username: data.username }, 'passing')
            res.json({ token: token, userid: data._id, username: data.username })
          }else{
            res.json("your username or password wrong")
          }
        }else{
          res.json("your username or password wrong")
        }
    })
  }
}

module.exports = controllerUser;
