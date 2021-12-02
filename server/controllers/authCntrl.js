const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const token = require('../config/generateToken')
const jwt = require('jsonwebtoken')

const authCntrl = {
    register: async (req, res) => {
        try{
            const {username, password, email, gender, fullname} = req.body
            
            let LC_username = username.toLowerCase().replace(/ /g, '')
            const isUsername = await User.findOne({username: LC_username})
            if(isUsername)
                return res.status(400).json({msg: 'This user name is already exist'})

            const isEmail = await User.findOne({email})
            if(isEmail)
                return res.status(400).json({msg: 'This email is already exist'})

            if(password.length < 6)
                return res.status(400).json({msg: 'Password must be more than 6 characters'})

            const hashedPassword = await bcrypt.hash(password, 12)

            const newUser = new User({
                username: LC_username, 
                password: hashedPassword,
                fullname, 
                email, 
                gender
            })

            const access_token = token.generateAccessToken({id: newUser._id})    
            const refresh_token = token.generateRefreshToken({id: newUser._id})

            res.cookie('verifytoken', refresh_token, {
                httpOnly: true,
                path: '/api/verify_token',
                maxAge: 30*24*60*60
            })

            await newUser.save()
            
            res.json({
                msg: 'Register success!',
                user: {
                    ...newUser._doc,
                    password: ''
                },
                access_token
            })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body

            const user = await User.findOne({email})
            if(!user)
                return res.status(400).json({msg: 'User with this email does not exist'})

            const comparePassword = await bcrypt.compare(password, user.password)
            if(!comparePassword)
                return res.status(400).json({msg: 'User data is incorrect'})

            const access_token = token.generateAccessToken({id: user._id})
            const refresh_token = token.generateRefreshToken({id: user._id})

            res.cookie('verifytoken', refresh_token, {
                httpOnly: true,
                path: '/api/verify_token',
                maxAge: 30*24*60*60
            })

            res.json({
                msg: 'Login success!',
                user: {
                    ...user._doc,
                    password: ''
                },
                access_token
            })
        } 
        catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('verifytoken', {path: '/api/verify_token'})

            res.json({
                msg: 'Logout success!'
            })
        } 
        catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    verifyToken: (req, res) => {
        try {
            const rf_token = req.cookies.verifytoken

            if(!rf_token)
                return res.status(400).json({msg: 'Please login'})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN, async (err, result) => {
                if(err) return res.status(400).json({msg: 'Please login'})

                const user = await User.findById(result.id).select('-password')

                if(!user) return res.status(400).json({msg: 'Please register'})

                const access_token = token.generateAccessToken({id: result.id})

                res.json({
                    msg: 'Login success!',
                    user,
                    access_token
                })
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }   
    }
}

module.exports = authCntrl