const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const app = express()
// Create : http post(입력할 내용) : req.body에
// Retrieve : http get(/ or /:id)
// Update : http put(수정할 내용, /:id)
// Delete : http delete(/:id)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use('/', indexRouter)
app.use('/user', userRouter)
const DB = []
// {id:, name:, age:}
app.set('port', 3000)
// app.use((req, res, next)=>{
//     console.log('모든 요청에 실행')
//     next()
// })
app.get('/', (req, res) => {
    // console.log('Cookies: ', req.cookies)
    // res.cookie('name', 'asfd')
    // res.json(DB)
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})
app.post('/', (req, res) => {
    DB.push(req.body)
    res.redirect('/')
})
app.get('/:id', (req, res) => {
    let record = DB.find(x => x.id === Number(req.params.id))
    res.json(record)
})
app.put('/:id', (req, res) => {
    const idx = DB.findIndex(x => x.id === Number(req.params.id))
    DB[idx] = req.body
    res.redirect('/')
})
app.delete('/:id', (req, res) => {
    const idx = DB.findIndex(x => x.id === Number(req.params.id))
    DB.splice(idx, 1)
    res.redirect('/')
})

//app.
app.listen(app.get('port'), () => {console.log(app.get('port'), '번 포트에서 대기 중')})