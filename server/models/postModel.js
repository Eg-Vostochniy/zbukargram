const mongoose = require('mongoose')

const Post = mongoose.Schema({
    content: {
        type: String,
        maxLength: [25, 'Your content is up to 25 chars long']
    },
    imgs: {
        type: Array,
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('post', Post)