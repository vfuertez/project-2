require("dotenv").config()
const express = require("express")
const app = express()
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000








app.listen(PORT, (req, res) => {
    console.log(`connected to port ${PORT}`)
})