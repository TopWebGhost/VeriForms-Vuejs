<script>
import loading from './components/loading.vue'
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'
export default {
  components: {
    'login': function(resolve) {
      require(['./components/login.vue'], resolve)
    },
    'modal': function(resolve) {
      require(['./components/modal.vue'], resolve)
    },
    'loading': loading,
    'topheader': navbar,
    'bottomfooter': footer,
  }
}
</script>
<template>
  <loading></loading>
  <topheader></topheader>
  <router-view></router-view>
  <login></login>
  <modal></modal>
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
.btn-primary:hover {
  background: #99cc53 !important;
  border-color: #99cc53 !important;
}
</style>
<link href="https://fonts.googleapis.com/css?family=Oswald:300|Roboto+Mono:100,100i,300,500,700" rel="stylesheet">
<style src="./assets/css/bootstrap.css"></style>
<style src="./assets/css/normalize.css"></style>
