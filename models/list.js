const mongoose = require('./connection')

const {Schema, model} = mongoose

// Schema
const listSchema = new Schema({
    name: {type: String, required: true},
    language: String,
    url: String,
    creator: String,
    note: String,
    
})

// model
const List = model("List", listSchema)

module.exports = List