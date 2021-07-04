var mongoose = require('mongoose');
var DataBaseProduct = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String, required: true },
    imgSale: { type: String, required: true },
    imgConfig: { type: String, required: true },
    descript: { type: String, required: true },
    tagName: { type: String, required: true },
    tagSearch: { type: String, required: true },
    sale: { type: String, required: true },
    video: { type: String, required: true },
    status: { type: String, required: true }
})
// Biên dịch mô hình từ schema
module.exports = mongoose.model('DataBaseProduct', DataBaseProduct);

