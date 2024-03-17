const express = require('express')
const router = express.Router()
router.get('/', (req, res) => { // GET / 라우터
    res.send('Hello, Express')
})
module.exports = router