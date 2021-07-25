var mongoose = require("mongoose");
var DataBaseNews = new mongoose.Schema({
  img: { type: Array, required: true },
  text: { type: Array, required: true },
  toLink: { type: String, required: true },
  textLink: { type: String, required: true },
});
// Biên dịch mô hình từ schema
module.exports = mongoose.model("DataBaseNews", DataBaseNews);
