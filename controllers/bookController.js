const Book = require("../models/Book");
const Review = require("../models/Review");

exports.addBook = async (req,res) => {
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book);
    }catch(err){
        res.status(400).json({ error: err.message});
    }
};

exports.getBooks = async (req,res) =>{
    const {author, genre, page = 1, limit = 10 } = req.query;
    const query = {};
    if(author) query.author = new RegExp(author,"i");
    if(genre) query.genre = new RegExp(genre, "i");
    const books = await Book.find(query).skip((page - 1)* limit).limit(Number(limit));
    res.json(books);
};

exports.getBookById = async (req,res) => {
    try{
        const book = await Book.findById(req.params.id);
        const reviews = await Review.find({book: req.params.id}).populate("user", "username");
        const avgRating = reviews.reduce((acc,cur) => acc + cur.rating, 0)/ (reviews.length || 1);
        res.json({book,avgRating,reviews});
    }catch(err){
        res.status(404).json({error: "Book not found"});
    }
};