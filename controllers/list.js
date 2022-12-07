const express = require('express')
const List = require('../models/list')

// ROuter
const router = express.Router()

// error handler
function errorHandler(error, res) {
    res.json(error)
}

// Routes

// seed route
router.get('/seed', async (req, res) => {
    await List.remove({}).catch((error) => errorHandler(error,res))
    const lists = await List.create([
        {
            name: "Input Types Tutorial",
            url: "https://youtu.be/oPXy55dEIiM",
            creator: "codecourse",
            note: "coding tutorial"
        },
        {
            name: "Express Mongoose Guide",
            url: "https://www.youtube.com/@AlexMercedCoder",
            creator: "Alex",
            note: "coding tutorial"
        },
        {
            name: "Making souffle pancakes",
            url: "https://youtu.be/tBTNMo77h2Q",
            creator: "Qiong Cooking",
            note: "Ingredients: 2pcs egg, 20ml(4tsp) Milk, (30g) All purpose flour, (1/4 tsp) vanilla extract(optional), (2tbsp) Sugar "
        },
        {
            name: "Music tutorial",
            url: "https://youtu.be/dQw4w9WgXcQ",
            creator: "Rick",
            note: "!"
        },
        
    ]).catch((error) => errorHandler(error, res))
    res.json(lists)
})


module.exports = router