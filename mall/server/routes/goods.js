var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Good = require('../models/goods');

//连接数据库
mongoose.connect('mongodb://baixinL:123456@47.52.97.152/vueMall', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", function () {
  console.log("mongodb connected success.");
})
mongoose.connection.on("error", function () {
  console.log("mongodb connected failed.");
})
mongoose.connection.on("disconnected", function () {
  console.log("mongodb connected disconnected.");
})
//查询商品列表,类型get：req.param
router.get("/list", function (req, res, next) {
  let sort = parseFloat(req.param('sort', 1)); //获取请求的参数sort的值
  let page = parseInt(req.param('page', 1));
  let pageSize = parseInt(req.param('pageSize',4));
  let priceLevel = req.param('priceLevel', 'all');

  let params = {};
  if (priceLevel != 'all') {
    let priceGt = 0, priceLte = 0;
    switch (priceLevel) {
      case '0': priceGt = 0; priceLte = 100; break;
      case '1': priceGt = 100; priceLte = 500; break;
      case '2': priceGt = 500; priceLte = 1000; break;
      case '3': priceGt = 1000; priceLte = 5000;break;
    }
    params = {
      prodcutPrice: {
        $gt: priceGt,
        $lte: priceLte
      }
    }
  }

  let skip_num = (page - 1) * pageSize;
  let goodsModel = Good.find(params).skip(skip_num).limit(pageSize); //拿到符合条件的数据,.skip跳过多少条后，.limit取多少条
  goodsModel.sort({
    'prodcutPrice': sort
  }); //排序(1升序，-1降序)
  goodsModel.exec(function (err, doc) {
    if(err) {
      //输出json文件
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list:doc
        }
      })
    }

  })
})

//加入到购物车,类型post：req.body
router.post('/addCart', function (req, res, next) {
  var userId = req.cookies.userId, productId = req.body.productId;
  var User = require('./../models/user');
  User.findOne({_id: userId}, function (err1, userDoc) {
        if(err1) {
          res.json({
            status:'1',
            msg: err1.message
          })
        } else {
          if (userDoc) {
            let ifHadItem = false;
            userDoc.cardList.forEach((item) => {
              if(item.productId === productId) {
                ifHadItem = true;
                if (item.productNum) item.productNum++;
                else {
                  item.productNum = 2;
                }
              }
            });
            if (ifHadItem) {
              userDoc.save(function (err3, doc3) {
                console.log("doc3", doc3);
                if (err3) {
                  res.json({
                    status: '1',
                    msg: err3.message
                  })
                } else {
                  res.json({
                    status: '0',
                    msg: '',
                    result: 'succ'
                  })
                }
              })
            } else {
              Good.findOne({
                productId: productId
              }, function (err2, goodDoc) {
                if (err2) {
                  res.json({
                    status: '1',
                    msg: err2.message
                  })
                } else {
                  if (goodDoc) {
                    goodDoc._id = mongoose.Types.ObjectId(goodDoc._id);



                    goodDoc.productNum = 1;
                    goodDoc.checked = '1';
                    console.log(`goodDoc ${goodDoc}`);
                    userDoc.cardList.push(goodDoc);
                    userDoc.save(function (err3, doc3) {
                      console.log("doc3", doc3);
                      if (err3) {
                        res.json({
                          status: '1',
                          msg: err3.message
                        })
                      } else {
                        res.json({
                          status: '0',
                          msg: '',
                          result: 'succ'
                        })
                      }
                    })
                  }
                }

              })
            }

          }
        }
  })
})
module.exports = router;
