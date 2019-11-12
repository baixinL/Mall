const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var userSchema = new Schema({
  "userId": String,
  "userName": String,
  "userPwd": String,
  "orderList": Array,
  "cardList": [
    {
      "productId": String,
      "productName": String,
      "prodcutPrice": Number,
      "prodcutImg": String,
      "checked": String,
      "productNum": Number
    }
  ],
  "addressList": [
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": String,
      "tel": String,
      "isDefault": Boolean
    }
  ]
})
module.exports = mongoose.model('User', userSchema, 'users');
