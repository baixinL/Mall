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
router.post('/login',  (req, res, next) => {
  let params ={
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  // console.log("login");
  //拿到参数，帅选数据
  User.findOne(params, function (err, doc) {
    if (err || !doc) {
      res.json({
        status:'1',
        msg: '用户名或密码错误',
      })
    } else {
      if (doc) {
        //设置cookie
        res.cookie('userId',doc.userId, {
          path:'/',
          maxAge: 1000 * 60 * 60
        })
        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
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
      msg: '未登录',
      result: {
        userName: ''
      }
    })
  }
})

//获取购物车数据
router.get('/cardList', (req, res, next) => {
  var userId = req.cookies.userId;
  // console.log("获取购物车数据");
  User.findOne({userId:userId},  (err, doc) => {
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
    userId: userId
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
    userId: userId,
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
     userId: userId
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
module.exports = router;
