export default {
    JWT: {
        secret: process.env.SECRET,
        expires: process.env.JWT_EXPIRATION
    }
}
