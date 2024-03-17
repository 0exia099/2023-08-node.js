const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('port', 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/nine.html")
})
app.post('/', (req, res) => {
    console.log('req.body: ', req.body)
    res.render('gugu', req.body)
})
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})