const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let counter = 1;
let CountedId = {
  type: Number,
  default: () => counter++
};
var userSchema = new Schema({
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
