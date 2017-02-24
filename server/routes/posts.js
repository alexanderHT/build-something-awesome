var express = require('express')
var router = express.Router()
var controllerPosting = require('../controllers/controller.posting')

/* get all posting from database */
router.get('/', controllerPosting.getAllPosting)
/* create one posting */
router.post('/', controllerPosting.addOnePost)
/* get one posting from database */
router.get('/post/:id', controllerPosting.getOnePost)
/* delete one posting from database */
router.delete('/', controllerPosting.deleteOnePost)
/* get all posting from database by userid */
router.get('/user/:userid', controllerPosting.getAllPostingByUser)

module.exports = router
