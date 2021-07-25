var mongoose = require("mongoose");
var DataBaseCarousel = new mongoose.Schema({
  img: { type: String, required: true },
  text: { type: String, required: true },
  toLink: { type: String, required: true },
  textLink: { type: String, required: true },
});
// Biên dịch mô hình từ schema
module.exports = mongoose.model("DataBaseCarousel", DataBaseCarousel);
