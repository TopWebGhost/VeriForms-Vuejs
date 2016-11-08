<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'

export default {
  data() {
    return {
      login: {
        username:"",
        password:"",
        passwordType:'password'
      },
      sign: {
        username:"",
        password:"",
        passwordType:'password'
      }
    }
  },
  computed: {
    login() {
      return store.state.login;
    },
  },
  ready: function() {
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{
    hideLogin() {
      store.actions.hideLogin();
    },
    Signup() {

    },
    logIn() {

    },
    selectRole(element) {
      var d = document.getElementsByClassName("roleSelected");
      if(d.length > 0)
         d[0].className = "";
      element.className += "roleSelected";
      console.log(event);
    },
    selectDesigner() {
       this.selectRole(document.getElementById("designerRole"));
    },
    selectGuest() {
      this.selectRole(document.getElementById("guestRole"));
    }

  }
    
}
</script>
<style>
  #login-dlg {
    position: absolute;
    width: 300px;
    right: 10%;
    z-index: 90;
    background: white;
    top: 100px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-top: solid 5px #8dc63f;
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
    padding: 20px 30px;
    position: relative;

  }
  #login-dlg .title p {
    margin: 0;
    padding: 0;
    font-size: 25px;
  }
  #login-dlg .title p i{
    margin-right: 10px;
  }
  #login-dlg .title > i {
    position: absolute;
    top: 16px;
    right: 10px;
    font-size: 21px;
    width: 30px;
    height: 30px;
    border: solid 1px;
    padding: 3px 5px;
    color: white;
    background: rgb(153, 204, 83);
    border-radius: 15px;
  }
  #login-dlg .info {
    padding: 10px 20px 20px;
  }
  .loginAs {
    padding: 20px 0;
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
  .selectRole {
    display: inline-flex;
    padding: 0;
    margin: 0;
   }
   .selectRole li.roleSelected {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.3);
   }
  .selectSocials {
    display: inline;
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

  .selectSocials  button {
    width: 250px;
    margin-bottom: 20px;
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
  .btn-facebook {
      color: #FFFFFF;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      background-color: #586B93;
      background-image: -moz-linear-gradient(top, #7787a7, #586b93);
      background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#7787a7), to(#586b93));
      background-image: -webkit-linear-gradient(top, #7787a7, #586b93);
      background-image: -o-linear-gradient(top, #7787a7, #586b93);
      background-image: linear-gradient(to bottom, #7787a7, #586b93);
      background-repeat: repeat-x;
      border-color: #586B93;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7787A7', endColorstr='#586B93', GradientType=0);
      filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .btn-google {
        color: #FFFFFF;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        background-color: #df4a32;
        background-image: -moz-linear-gradient(top, #dd4b39, #df4a32);
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#dd4b39), to(#df4a32));
        background-image: -webkit-linear-gradient(top, #dd4b39, #df4a32);
        background-image: -o-linear-gradient(top, #dd4b39, #df4a32);
        background-image: linear-gradient(to bottom, #dd4b39, #df4a32);
        background-repeat: repeat-x;
        border-color: #df4a32;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dd4b39', endColorstr='#df4a32', GradientType=0);
        filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
<template>
  <transition name="my-transition">
    <div id="login-dlg"  v-if="login.show">
      <div class="title">
        <p><i class="fa fa-lock"></i>Login</p>
        <i class="fa fa-close" @click="hideLogin"></i>
      </div>
      <div class="info">
        <div class="loginWith">
          <div class="selectSocials">
            <button class="btn btn-loginwith btn-facebook">Connect with <strong>Facebook</strong>
            <button class="btn btn-loginwith btn-google">Connect with <strong>Google</strong>
          </div>
        </div>
        <div class="loginAs">
           <h3>Login as</h3>
           <ul class="selectRole">
            <li @click="selectDesigner" id="designerRole" class="roleSelected"><i class="fa fa-pencil"></i><p>Designer</p></li>
            <li @click="selectGuest" id="guestRole"><i class="fa fa-user"></i><p>Guest</p></li>
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