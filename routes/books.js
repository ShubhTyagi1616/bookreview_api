const express = require("express");
const router = express.Router();
const {authenticateJWT} = require("../middleware/auth");
const { addBook, getBooks, getBookById} = require("../controllers/bookController");

router.post("/",authenticateJWT,addBook);
router.get("/",getBooks);
router.get("/:id",getBookById);
module.exports = router;