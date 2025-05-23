const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../middleware/auth");
const { addReview, updateReview, deleteReview } = require("../controllers/reviewController");

router.post("/books/:id/reviews",authenticateJWT,addReview);
router.put("/:id", authenticateJWT, updateReview);
router.delete("/:id", authenticateJWT, deleteReview);
module.exports = router;