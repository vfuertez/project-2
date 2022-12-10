const express = require("express");
const List = require("../models/list");

// Router
const router = express.Router();

// Error Handler
function errorHandler(error, res) {
  res.json(error);
}

// Index Route
router.get("/", (req, res) => {
  List.find({})
    .then((lists) => {
      // res.json(lists)
      res.render("list/index.ejs", { lists });
    })
    .catch((err) => console.log(err));
});

// New Route
router.get("/new", (req, res) => {
  res.render("list/new.ejs");
});

// Create Route
router.post("/", (req, res) => {
  List.create(req.body, (err, theList) => {
    //console.log(theList);
    res.redirect("/list");
  });
});

// Delete Route
router.delete("/:id", (req, res) => {
  List.findByIdAndRemove(req.params.id, (err, animal) => {
    res.redirect("/list");
  });
});

// Edit ROute
router.get("/:id/edit", (req, res) => {
  List.findById(req.params.id, (err, list) => {
    res.render("list/edit.ejs", { list });
  });
});

// Update Route
router.put("/:id", (req, res) => {
  List.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updateList) => {
      res.redirect(`/list/${req.params.id}`);
    }
  );
});

// Show Route
router.get("/:id", async (req, res) => {
  const list = await List.findById(req.params.id);
  res.render("list/show.ejs", { list });
});

// Seed Route
router.get("/seed", async (req, res) => {
  await List.remove({}).catch((error) => errorHandler(error, res));
  const lists = await List.create([
    {
      name: "Input Types Tutorial",
      url: "https://youtu.be/oPXy55dEIiM",
      creator: "codecourse",
      note: "coding tutorial",
    },
    {
      name: "Express Mongoose Guide",
      url: "https://www.youtube.com/@AlexMercedCoder",
      creator: "Alex",
      note: "coding tutorial",
    },
    {
      name: "Making souffle pancakes",
      url: "https://youtu.be/tBTNMo77h2Q",
      creator: "Qiong Cooking",
      note: "Ingredients: 2pcs egg, 20ml(4tsp) Milk, (30g) All purpose flour, (1/4 tsp) vanilla extract(optional), (2tbsp) Sugar ",
    },
    {
      name: "Music tutorial",
      url: "https://youtu.be/dQw4w9WgXcQ",
      creator: "Rick",
      note: "!",
    },
  ]).catch((error) => errorHandler(error, res));
  res.json(lists);
});

module.exports = router;
