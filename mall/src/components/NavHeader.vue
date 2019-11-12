<template>
    <header class="header">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
          </symbol>
          <symbol id="icon-status-ok" viewBox="0 0 32 32">
            <title>status-ok</title>
            <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
            <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
          </symbol>
          <symbol id="icon-cart" viewBox="0 0 38 32">
            <title>cart</title>
            <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
            <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
            <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path
              class="path1"  fill="#fff"
              d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"
            />
          </symbol>
        </defs>
      </svg>
        <div class="navbar">
            <div class="navbar-left-container">
              <a href="/">
                <img class="navbar-brand-logo" v-lazy="'/static/logo.png'"><!--src="/static/logo.png"-->
              </a>
            </div>
            <div class="navbar-right-container" style="display: flex;">
              <div class="navbar-menu-container">
                <span class="navbar-link" v-text="nickName" v-if="nickName"></span>
                <a href="javascript:void(0)" class="navbar-link" @click="loginModalFlag=true" v-if="!nickName">Login</a>
                <a href="javascript:void(0)" class="navbar-link" @click="logOut" v-else>Logout</a>
                <div class="navbar-cart-container">
                  <span class="navbar-cart-count" v-text="cartCount" v-if="cartCount"></span>
                  <a class="navbar-link navbar-cart-link" href="javascript:void(0);" @click.prevent="toCart('/cart')">
                    <svg class="navbar-cart-logo">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <!-- 登录弹框 开始-->
        <div class="md-modal md-modal-big modal-msg md-modal-transition" v-bind:class="{'md-show':loginModalFlag}">
          <div class="md-modal-inn md-modal-inner">
            <div class="md-top">
              <div class="md-title">Login in</div>
              <button class="md-close" @click="loginModalFlag=false">Close</button>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">Name or password error</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password" @keyup.enter="login">
                  </li>
                </ul>
              </div>
              <div class="go-register">
                <a href="javascript:void(0)" @click="goToRegister">Sign up?</a>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="login">Login in</a>
              </div>
            </div>
          </div>
        </div>
         <!-- 登录弹框 结束-->
        <!-- 注册弹框 开始-->
        <div class="md-modal md-modal-big modal-msg md-modal-transition" v-bind:class="{'md-show':registerModalFlag}">
          <div class="md-modal-inn md-modal-inner">
            <div class="md-top">
              <div class="md-title">Sign up</div>
              <button class="md-close" @click="registerModalFlag=false">Close</button>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorRegisterTip">{{registerTipText}}</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password">
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="3"  name="password2" v-model="userPwd2" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Re-enter password" @keyup.enter="register">
                  </li>
                </ul>
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip_pwd">The two passwords are inconsistent!</span>
                </div>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="register">Sign up</a>
              </div>
            </div>
          </div>
        </div>
         <!-- 注册弹框 结束-->
        <div class="md-overlay" v-if="loginModalFlag||registerModalFlag" @click="loginModalFlag=registerModalFlag=false"></div>
        <!-- 注册成功 -->

        <one-line-model v-bind:mdShow="mdSucc">
          <p slot="message" style="line-height: 80px;">
            <i class="" style="width: 26px;height: 26px;border-radius: 50%;background:orange">
              <svg style="width: 18px;height: 18px;">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ok" />
              </svg>
            </i>

            <span style="text-align:base">Success!</span>
          </p>

        </one-line-model>
    </header>
</template>
<style>
  .header {
    width: 100%;
    height: 70px;
    background-color: white;
    font-family: "moderat",sans-serif;
    font-size: 16px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px 20px;
  }
  .navbar-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -20px;
  }
  .navbar-brand-logo {
    width: 60px;
    height: 60px;
  }
  .header a, .footer a {
    color: #666;
    text-decoration: none;
  }
  a {
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  .navbar-right-container {
    display: none;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-link {
    padding-left: 15px;
  }
  .navbar-cart-container {
    position: relative;
  }
  .navbar-cart-count {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    right: -11px;
    width: 20px;
    border-radius: 10px;
    color: white;
    background-color: #eb767d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .navbar-cart-logo {
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
  }
  .go-register {
    float: right;
  }
  .go-register a{
    color: #61b1ef;
    font-size: 12px;
  }
  @media screen and (max-width: 767px) {
    .go-register {
      margin-right: 20px;
    }
  }
  .go-register::after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }
</style>
<script>
    import './../assets/css/login.css'
    import './../assets/css/base.css'
    import axios from 'axios'
    import { mapState } from 'vuex'
    import Modal from "./../components/Modal";
    import OneLineModel from "./../components/OneLineModel";
    import { checkCookie } from "../util/cookie";
    import { reload } from "../util/reload";
    import Axios from 'axios'
    export default{
      props:['loginFlag'],
        data() {
            return{
              userName: '',
              userPwd: '',
              userPwd2: '',
              errorTip: false,
              errorRegisterTip:false,
              registerTipText:'',
              errorTip_pwd: false,
              loginModalFlag: false,
              registerModalFlag: false,
              mdSucc: false,
              nickName:'',
              cartCount:0
            }
        },
        components:{
          Modal,
          OneLineModel
        },
        watch:{
          "loginFlag": function(newVal) {
            console.log("loginFlag", newVal);

            if(newVal) this.loginModalFlag = true;
          }
        },
        // computed: {
        //   ...mapState(['nickName','cartCount'])
        // },
        /*nickName(){
          return this.$store.state.nickName;
        },
        **/

        cartCount(){
          // return this.$store.state.cartCount;
        },
        mounted () {
          //初始化
            this.checkLogin();
        },
        methods: {
            // closeLoginOrSignUp()
            // {
            //   this.loginMFlag = false;
            //   this.registerModalFlag = false;
            // },
            // closeLogin () {
            //   this.loginMFlag = false;
            // },
            toCart(path) {
              if( checkCookie('userId') ) {
                this.$router.push({path: path});
              } else {
                alert("You Need to Sign in!");
              }

              },
            showSucc () {
              this.mdSucc = true;
              setTimeout(() => {
                  this.mdSucc = false;
              }, 600);
            },
            goToRegister () {
              this.loginModalFlag = false;
              this.registerModalFlag = true;
            },
            checkLogin(){
              axios.get('/users/checkLogin').then((result) => {
                let res = result.data;
                if(res.status == '0') {
                  this.nickName = res.result.userName;
                }
              }).catch((err) => {

              });
            },
            register () {
              if(!this.userName || !this.userPwd || !this.userPwd2){
                this.errorRegisterTip = true;
                this.errorTip_pwd = false;
                this.registerTipText ="Not completed";
                // console.log("信息未填完");

                return;
              } else if(this.userPwd != this.userPwd2){
                this.errorTip_pwd = true;
                this.errorRegisterTip = false;
                // console.log("两次密码输入不一致");
                return
              }else {
                this.errorRegisterTip = false;
                this.errorTip_pwd = false;
              }
              // console.log("发注册请求");
              //发注册请求
               axios.post("/users/register", {
                userName: this.userName,
                userPwd: this.userPwd
               }).then((result) => {
                  let res = result.data;
                  if(res.status=='0') {
                    this.registerModalFlag = false;
                    this.nickName = res.result.userName;
                    //  alert("login register");
                    this.showSucc();
                  } else {
                    this.errorRegisterTip = true;
                    this.registerTipText = res.msg ? res.msg : "Failed！";
                  }
               }).catch((err) => {
                    // console.log("catch((err)",err);
                    this.registerTipText = err.message ? err.message : "Failed！";
               });
            },
            login () {
                if(!this.userName || !this.userPwd){
                  this.errorTip = true;
                  return;
                }
                this.errorTip = false;

                axios.post("/users/login", {
                  userName: this.userName,
                  userPwd: this.userPwd
                }).then((result) => {
                  let res = result.data;
                  if(res.status=='0') {
                    this.errorTip = false;
                    this.loginModalFlag = false;
                    this.nickName = res.result.userName;
                    this.showSucc();
                    reload(this.$router);
                  } else {
                    this.errorTip = true;
                  }
                }).catch((err) => {
                    this.errorTip = true;
                });
            },
            logOut () {
              axios.post('/users/logout').then((result) => {
                let res = result.data;
                if(res.status === '0') {
                  this.nickName = '';
                  reload(this.$router);
                }
                else
                {
                  // alert('logOut failed');
                }
              }).catch((err) => {

              });
            },
            getCartCount () {
              // axios.get("users/getCartCount").then(res=>{
              //   var res = res.data;
              //   this.$store.commit("updateCartCount",res.result);
              // });
            }
        }
    }
</script>
