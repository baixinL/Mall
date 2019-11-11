var express = require('express');
var router = express.Router();
var User = require("./../models/user");

var cookieParser = require('cookie-parser');
/*  GET users listing.
这里配置的二级路由，
/是一级，   ==》/user/
/user 是二级路由  ==》/user/user  **/
router.get('/', function(req, res, next) {
  res.send('hello users');
});
router.get('/hello', function (req, res, next) {
  res.send('hello everyone.');
});
router.post('/login', function (req, res, next) {
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
router.post('/logout', function (req, res, next) {
  //清cookies,
  console.log("登出");
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
router.get('/checkLogin', function (req, res, next) {
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
module.exports = router;
