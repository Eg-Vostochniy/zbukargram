const authCntrl = require('../controllers/authCntrl')
const router = require('express').Router()

router.post('/register', authCntrl.register)
router.post('/login', authCntrl.login)

module.exports = router