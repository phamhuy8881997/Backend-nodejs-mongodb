var mongoose = require('mongoose');
var DataBaseAdminCart = new mongoose.Schema({
    user: { type: Array, required: true },
    Cart: { type: Array, required: true },
    MDH: { type: String, required: true },
    status: { type: Boolean, required: true }, 
    times:{ type: String, required: true }
})
// Biên dịch mô hình từ schema
module.exports = mongoose.model('DataBaseAdminCart', DataBaseAdminCart);