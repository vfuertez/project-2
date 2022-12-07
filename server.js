require("dotenv").config()
const express = require("express")
const app = express()
const methodOverride = require('method-override')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

// Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.static('public'))
const ListRouter = require('./controllers/list')


//Routes
app.get("/", (req, res) => {
    res.send('Server is working')
})

app.use('/list', ListRouter)


// Server Listener
app.listen(PORT, (req, res) => {
    console.log(`connected to port ${PORT}`)
})

