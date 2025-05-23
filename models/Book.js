const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: String,
    genre: String,
    description: String
});
module.exports = mongoose.model("Book",bookSchema);