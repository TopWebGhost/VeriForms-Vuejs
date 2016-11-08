<script>
import mylogin from './components/mylogin.vue'
import loading from './components/loading.vue'
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'
import store from './store/index'
export default {
  components: {
    'loading': loading,
    'topheader': navbar,
    'bottomfooter': footer,
    'mylogin': mylogin,
  }
}
</script>
<template>
  <loading></loading>
  <topheader></topheader>
  <mylogin></mylogin>
  <router-view></router-view>
  <bottomfooter></bottomfooter>
</template>
<style src="material-design-lite/material.css"></style>

<style>
body {
  font-family: 'Roboto Mono', monospace;
}
.app-loading {
  display: none;
}

a {
  color: white;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
a:hover {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6 {
    color: #484c50;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    margin: 0 0 30px 0;
}
.mdl-progress.mdl-progress--indeterminate > .bar1, .mdl-progress.mdl-progress__indeterminate > .bar1 {
  background-color: #8cc53e !important;
}
.btn-primary {
    background: #8dc63f;
    color: #fff;
    border: 2px solid #8dc63f;
}
.btn-outline {
   padding: 20px 30px !important;
   min-width: 200px;
   font-size: 18px;
}
.btn-primary:focus, .btn-primary.focus {
  background: #99cc53 !important;
  border-color: #99cc53 !important;
}
.btn-primary:hover {
  background: #99cc53 !important;
  border-color: #99cc53 !important;
}
.form-control {
    box-shadow: none;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    height: 54px;
    font-size: 18px;
    font-weight: 300;
}

.my-transition-enter-active {
    transition: all 0.3s ease;
}
.my-transition-leave-active {
    transition: all 0.8s ease;
}
.my-transition-enter, .my-transition-leave-enter {
    padding-left: 10px;
    opacity: 0;
}

.v-select .form-control{
    height: 30px;
}
.v-select {
    width: 170px;
}
.v-select input[type='search'] {
    visibility: hidden;
}
.v-select .dropdown-toggle {
    display: flex !important;
}
.v-select .selected-tag {
    background: white !important;
    border: none !important;
    display: table !important;
}
.v-select .highlight a, .v-select li:hover>a {
    background: #8dc63f !important;
    color: white !important;
}
.btn:hover, .btn:focus, .btn.focus {
    color: white;
}
</style>
<link href="https://fonts.googleapis.com/css?family=Oswald:300|Roboto+Mono:100,100i,300,500,700" rel="stylesheet">
<style src="./assets/css/font-awesome.min.css"></style>
<style src="./assets/css/bootstrap.css"></style>
<style src="./assets/css/normalize.css"></style>
