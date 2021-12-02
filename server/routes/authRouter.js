const authCntrl = require('../controllers/authCntrl')
const router = require('express').Router()

router.post('/register', authCntrl.register)
router.post('/login', authCntrl.login)

router.get('/verify_token', authCntrl.verifyToken)
router.get('/logout', authCntrl.logout)

module.exports = router