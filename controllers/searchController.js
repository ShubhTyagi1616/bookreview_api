const Book = require("../models/Book");

exports.searchBooks = async (req,res) => {
    const { q } = req.query;
    const regex = new RegExp(q, "i");
    const books = await Book.find({$or: [{title: regex},{author: regex}]});
    res.json(books);
};