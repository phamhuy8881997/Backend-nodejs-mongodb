const express = require("express");
const cors = require("cors");
require("dotenv").config();
var bodyParser = require("body-parser");
var postRoute = require("./routes/post");
var postDataCart = require("./routes/postDataCart");
var postCarousel = require("./routes/postCarousel");
var postNews = require("./routes/postNews");
var postBanner = require("./routes/postBanner");
// =========express==setup=========
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// =========express==setup=========

//=======cors==============
// co dinh ten mien nhan data
var corsOptions = {
  origin: "http://localhost:3000",
  origin1: "https://hieule.web.app/",
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// ================= Mongoose =====================

var mongoose = require("mongoose");
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("mongo conect successful");
  }
);

// ============== Express Router ==================

app.get("/", (req, res) => {
  res.send("nodejs mongoose req database");
});
app.use("/0011001111001100/api", postRoute);
app.use("/0011001111001100/cart", postDataCart);
app.use("/0011001111001100/carousel", postCarousel);
app.use("/0011001111001100/news", postNews);
app.use("/0011001111001100/banner", postBanner);

// ====== listen sever ===============================
var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
