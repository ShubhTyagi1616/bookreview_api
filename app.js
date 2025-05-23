require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const reviewRoutes = require("./routes/reviews");
const searchRoutes = require("./routes/search");

app.use(express.json());

app.use("/api",authRoutes);
app.use("/api/books",bookRoutes);
app.use("/api/reviews",reviewRoutes);
app.use("/api/search",searchRoutes);


const PORT = process.env.PORT || 5000;
console.log("Mongo URI from .env", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));