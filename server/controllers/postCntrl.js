const Post = require('../models/postModel')

const postCntrl = { 
    createPost: async (req, res) => {
        try{
            const {content, imgs} = req.body
            const user = req.user

            if(content && content.length > 25) return res.status.json({msg: 'Content up to 25 char long'})
            if(imgs.length === 0) return res.status.json({msg: 'Add your image'})

            const newPost = new Post({
                content,
                imgs,
                user: user._id
            })

            res.json({
                msg: 'Post created',
                newPost
            })
        } catch(err) {
            return res.status(500).json({msg: err.message})
        }

    },
    getPosts: async (req, res) => {

    }
}

module.exports = postCntrl