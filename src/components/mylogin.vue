<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'

export default {
  data(){
    return{
      login:{
        username:"",
        password:"",
        passwordType:'password'
      },
      sign:{
        username:"",
        password:"",
        passwordType:'password'
      }
    }
  },
  computed:{
    login(){
      return store.state.login;
    },
    sign(){
      return store.state.sign;
    }
  },
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{
    hideLogin() {
      store.actions.hideLogin();
    },
    Signup(){

    },
    logIn(){

    }
  }
    
}
</script>
<style>
  #login-dlg {
    position: absolute;
    width: 300px;
    right: 50px;
    z-index: 100;
    background: white;
    top: 100px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-top: solid 5px white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  #login-dlg p, #login-dlg h3 {
    margin: 0;
    padding: 0;
  }
  #login-dlg ul li{
    display: inline;
  }
  #login-dlg .title {
    padding: 15px;
    text-align: center;
    position: relative;
    background: #8dc63f;
    color: white;
  }
  #login-dlg .title p {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  #login-dlg .title i {
    position: absolute;
    top: 16px;
    right: 10px;
    font-size: 20px;
  }
  #login-dlg .info {
    padding: 30px 20px;
  }
  .loginAs, .loginWith {
      border-bottom: solid 1px #ededed;
      text-align: center;
  }
  .loginAs h3, .loginWith h3 {
    text-align: left;
    font-size: 20px;
  }
  #login-dlg .loginAs h3 {
    margin-bottom: 10px;
  }
  .selectRole i {
    float: left;
    padding: 5px;
  }
  .selectRole p {
    padding-left: 30px;
  }
  .selectRole, .selectSocials {
    display: inline-flex;
    padding: 0;
  }
  .selectRole li {
    padding: 5px;
    margin-right: 20px;
    border: solid 2px black;
    border-radius: 4px;
    width: 120px;
    cursor: pointer;
  }
  .selectRole li:hover {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
  .loginWith {
    padding: 10px 0;
    font-size: 30px;
  }
  #login-dlg .loginWith h3 {
    margin-bottom: 10px;
  }
  .selectSocials li {
    width: 50px;
    height: 50px;
    border-radius: 25px;;
    margin-right: 20px;
  }

  .selectSocials li a {
    padding: 10px;
    top: 10px;
    font-size: 30px;
    position: relative;
  }
  .github {
    background:black;
  }
  .facebook {
    background: #455ca8;
  }
  .google {
    background: #f74833;
  }
  .info .form-control {
    height: 40px;
    margin-bottom: 10px;
  }
  .info form{
    padding: 10px 0;
  }
  .info .btn-primary {
    width: 100%;
  }
  .other a{
    color: #8dc63f;
  }
</style>
<template>
  <transition name="my-transition">
    <div id="login-dlg"  v-if="login.show">
      <div class="title">
        <p>Login</p>
        <i class="fa fa-close" @click="hideLogin"></i>
      </div>
      <div class="info">
        <div class="loginAs">
           <h3>Login as</h3>
           <ul class="selectRole">
            <li><i class="fa fa-pencil"></i><p>Designer</p></li>
            <li><i class="fa fa-user"></i><p>Guest</p></li>
           </ul>
        </div>
        <div class="loginWith">
          <h3>Login with</h3>
          <ul class="selectSocials">
            <li class='github'><a><i class="fa fa-github"></i></a></li>
            <li class='facebook'><a><i class="fa fa-facebook"></i></a></li>
            <li class='google'><a><i class="fa fa-google"></i></a></li>
          </ul>
        </div>
        <form>
          <input class="form-control" type="email" name="email" placeholder="Email">
          <input class="form-control" type="password" name="password" placeholder="Password">
          <button class="btn btn-primary" type="submit">LOGIN</button>
        </form>
        <div class="other">
          <a>Forgotten Password?</a>
          <p>Looking to <a>create an account</a> ?</p>
        </div>
      </div>
    </div>
  </transition>
</template>