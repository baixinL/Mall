var express = require('express');
var router = express.Router();
var User = require("./../models/user");

var cookieParser = require('cookie-parser');
/*  GET users listing.
这里配置的二级路由，
/是一级，   ==》/user/
/user 是二级路由  ==》/user/user  **/
router.get('/', (req, res, next) => {
  res.send('hello users');
});
router.get('/hello',  (req, res, next) => {
  res.send('hello everyone.');
});

//注册
router.post('/register', (req, res, next) => {
    let userName = req.body.userName;
    let userPwd = req.body.userPwd;
    // console.log("register");

  //拿到参数，帅选数据
  User.findOne({userName: userName}, (err, doc) => {
    if (doc)
    {
      res.json({
        status: '1',
        msg: '用户名已注册',
        result: ''
      })
    } else {
      User.create({
        userName: userName,
        userPwd: userPwd,
        "orderList": [],
        "cardList": [],
        "addressList": []
      }).then((new_user) => {
        if (new_user) {
          //设置cookie
          res.cookie('userId', new_user._id, {
            path: '/',
            maxAge: 1000 * 60 * 60
          })
          res.cookie('userName', new_user.userName, {
            path: '/',
            maxAge: 1000 * 60 * 60
          })
          //本地
          res.locals.userId = new_user._id;
          res.locals.userName = new_user.userName;
          //cookie可能会伪造
          // res.session.user = doc;
          //返回数据
          res.json({
            status: '0',
            msg: '',
            result: {
              userName: userName
            }
          })
        }
      }).catch((err1) => {
        res.json({
          status: '1',
          msg: err1.message,
          result: ''
        })
      });
    }
  });

});


router.post('/login',  (req, res, next) => {
  let params ={
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  console.log("login");
  //拿到参数，帅选数据
  User.findOne(params, function (err, doc) {
    if (err || !doc) {
      res.json({
        status:'1',
        msg: err.message,
      })
    } else {
      if (doc) {
        //设置cookie
        res.cookie('userId', doc._id, {
          path:'/',
          maxAge: 1000 * 60 * 60
        })
        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.locals.userId = doc._id;
        res.locals.userName = doc.userName;
        //cookie可能会伪造
        // res.session.user = doc;
        //返回数据
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: params.userName
          }
        })
      }

    }
  })
  // res.send('login.');
});


//登出
router.post('/logout',  (req, res, next) => {
  //清cookies,
  // console.log("登出");
  res.cookie("userId",'',{
    'path': '/',
    maxAge: -1
  });
  res.cookie("userName", '', {
    'path': '/',
    maxAge: -1
  });
  res.json({
    status:'0',
    msg:'',
    result:''
  })
})
//用户校验
router.get('/checkLogin',  (req, res, next) => {
  if(req.cookies.userId) { //登录还有效
      res.json({
        status:'0',
        msg:'',
        result: {
          userName: req.cookies.userName
        }
      })
  } else {
    res.json({
      status: '1',
      msg: 'Not logged in',
      result: {
        userName: ''
      }
    })
  }
})

//获取购物车数据
router.get('/cartList', (req, res, next) => {
  var userId = req.cookies.userId;
  // console.log("获取购物车数据");
  User.findOne({
        _id: userId
      }, (err, doc) => {
    // console.log("findOne");
    if(err) {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    } else {
      if(doc) {
        res.json({
          status: '0',
          msg: '',
          result: doc.cardList
        })
      }
    }
  })
})
//购物车删除数据
router.post('/delCart', (req, res, next) => {
  let productId = req.body.productId;
  let userId = req.cookies.userId;
  User.updateOne({
    _id: userId
  }, {
    $pull: {
      'cardList': {'productId': productId}
    }
  }, (err, raw) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result:''
      })
    } else {
      res.json({
        status: '0',
        msg: ''
      })
    }

  })
})
//购物车修改商品数量
router.post('/editCard',(req, res, next) => {
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  let productNum = req.body.productNum;
  let checked = req.body.checked;
  User.updateOne({
    _id: userId,
    'cardList.productId': productId
  }, {
    'cardList.$.productNum': productNum,
    'cardList.$.checked': checked
  }, (err, raw) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: ''
      })
    }

  })
})
//全选或全不选
router.post('/editCheckAll', (req, res, next) => {
   let userId = req.cookies.userId;
   let checkAll = req.body.checkAll ? '1' : '0';
   User.findOne({
     _id: userId
   }, (err, user) => {
     if (err || !user) {
       res.json({
         status: '1',
         msg: err.message,
         result: ''
       })
     } else {
       user.cardList.forEach(element => {
        element.checked = checkAll;
       });
       user.save((err1, doc) => {
          if (err1) {
            res.json({
              status: '1',
              msg: err1.message,
              result: ''
            })
          } else {
            res.json({
              status: '0',
              msg: '',
              result:'suc'
            })
          }
       })
     }
   })
})
//查询用户地址
router.get('/addressList', function (req, res, next) {
  let userId = req.cookies.userId;
  User.findOne({
    _id: userId
  },(err, user) => {
    if(err) {
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: user.addressList
      })
    }
  })
})
//设置默认地址
router.post('/setDefault', (req, res, next) => {
  let userId = req.cookies.userId;
  let addrId = req.body.addressId;
  if (!addrId) {
    res.json({
      status: '1',
      msg: 'miss addressId',
      result: ''
    })
    return
  }
  User.findOne({
        _id: userId
      }, (err, user) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      user.addressList.forEach(addr => {
        if (addr.addressId == addrId) addr.isDefault = true;
            else addr.isDefault = false;
      })
      user.save((err2, doc2) => {
        if (err2) {
          res.json({
            status: '1',
            msg: err2.message,
            result: ''
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
  })
})

//删除地址
router.post('/delAddress', (req, res, next) => {
  let userId = req.cookies.userId;
  let addrId = req.body.addressId;
  if (!addrId) {
    res.json({
      status: '1',
      msg: 'miss addressId',
      result: ''
    })
    return
  }
  User.updateOne({
    _id: userId
  }, {
      $pull: {
          'addressList': { "addressId": addrId }
        }
     }, (err, raw) => {
       if (err) {
          res.json({
            status: '1',
            msg: err.message,
            result: ''
          })
        } else  {
          res.json({
            status: '0',
            msg: '',
            result: 'succ'
          })
        }
    })
})
//创建订单

module.exports = router;
