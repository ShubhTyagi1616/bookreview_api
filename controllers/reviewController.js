const Review = require("../models/Review");

// add the review 
exports.addReview = async (req,res) => {
    try{
        const existing = await Review.findOne({ book: req.params.id, user: req.user.id});
        if(existing) return res.status(400).json({error: "Review already exists"});
        const review = await Review.create({...req.body, book: req.params.id, user: req.user.id});
        res.status(201).json(review);
    }catch(err){
        res.status(400).json({ error: err.message});
    }
};

// update the review
exports.updateReview = async (req,res) => {
    try{
        const review = await Review.findOneAndUpdate({ _id: req.params.id, user: req.user.id}, req.body, {new: true});
        if(!review) return res.status(404).json({error: "Review not found"});
        res.json(review);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

// delete existing review
exports.deleteReview = async (req,res) => {
    try{
        const review = await Review.findOneAndDelete({_id: req.params.id,user: req.user.id});
        if(!review) return res.status(404).json({ error: "Review not found"});
        res.json({ message: "Review deleted"});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}