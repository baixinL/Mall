const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var adressSchema = new Schema({
  "addressId": String,
  "userName": String,
  "streetName": String,
  "postCode": String,
  "tel": String,
  "isDefault": Boolean
})
//输出一个模型
module.exports = mongoose.model('Adress', adressSchema);
