const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization')
        if(!token) return res.status(400).json({msg: 'Authentication error'})

        const verifyTkn = jwt.verify(token, process.env.ACCESS_TOKEN)
        if(!verifyTkn) return res.status(400).json({msg: 'Authentication error'})

        const user = await User.findById(verifyTkn.id).select('-password')
        if(!user) return res.status(400).json({msg: 'Register please!'})

        req.user = user
        next()
    } catch(err){
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth