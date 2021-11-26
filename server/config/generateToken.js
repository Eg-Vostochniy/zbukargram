const jwt = require('jsonwebtoken')

const token = {
    generateAccessToken: (payload) => {
        return jwt.sign(
            payload,
            `${process.env.ACCESS_TOKEN}`,
            {expiresIn: '15m'}
        )
    },
    generateRefreshToken: (payload) => {
        return jwt.sign(
            payload,
            `${process.env.REFRESH_TOKEN}`,
            {expiresIn: '30d'}
        )
    }
}

module.exports = token