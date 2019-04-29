export default {
    port: 8899,
    secretKey: 'C0lS3cr3tK3y',
    payLoad: {
        iss: 'http://localhost/',
        aud: 'http://localhost',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }
}