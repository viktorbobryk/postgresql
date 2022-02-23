const Router = require('express')
const router = new Router()
const postController = require('../controlers/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostByUser)
// router.get('/user/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

module.exports = router