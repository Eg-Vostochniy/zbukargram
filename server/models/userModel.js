const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add your username'],
        trim: true,
        maxLength: [20, 'Your name is up to 20 chars long'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add your password']
    },
    status: {
        type: String,
        maxLength: [15, 'Your status is up to 15 chars long']
    },
    avatar: {
        type: String,
        default: 'https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png'
    },
    fullname: {
        type: String,
        required: [true, 'Please add your fullname'],
        maxLength: [20, 'Your fullname is up to 20 chars long'],
        trim: true,
        default: ''
    },
    website: {
        type: String,
        default: ''
    },
    aboutMe: {
        type: String,
        default: '',
        maxLength: [25, 'Your story is up to 25 chars long']
    },
    address: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        default: 'male'
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    saved: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)