const express = require('express')
const router = express.Router()
router.get('/', (req, res) => { // GET /user 라우터
    res.send('Hello, User')
})
router.get('/login', (req, res) => { // GET /user 라우터
    res.send('login page')
})
module.exports = router