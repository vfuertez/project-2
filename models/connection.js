require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
  .on("open", () => console.log("Mongoose Connected"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", (error) => console.log("Mongoose error", error));

module.exports = mongoose;
