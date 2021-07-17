var mongoose = require("mongoose");
var DataBaseAdminCart = new mongoose.Schema({
  data: { type: Object, required: true },
});
// Biên dịch mô hình từ schema
module.exports = mongoose.model("DataBaseAdminCart", DataBaseAdminCart);
