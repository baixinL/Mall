const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  "productId": String,
  "productName": String,
  "prodcutPrice": Number,
  "prodcutImg": String,
  "checked": String,
  "productNum": Number
})
//输出一个模型
module.exports = mongoose.model('Good', productSchema);
