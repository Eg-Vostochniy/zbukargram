const postCntrl = require('../controllers/postCntrl')
const router = require('express').Router()
const auth = require('../middleware/auth')

router.post('/add_post', auth, postCntrl.createPost)
router.get('/posts', auth, postCntrl.getPosts)

module.exports = router