<script>
import store from '../store/index'
export default {
  methods:{
    showLogin(){
      store.actions.showLogin();
    },
  },
  ready:function(){
      console.log(this.$route);
  },
  watch: {
    '$route': function() {
        var domElement = document.getElementById("header");
        domElement.className = "";
        if(this.$route.path != "/")
            domElement.className += "inOtherRoute";
        console.log(domElement);
    }
  }
}

</script>
<style>
#header {
    background: #fbfefe;
	position: fixed;
	z-index: 99;
	width: 100%;
	font-family: 'Oswald', sans-serif;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
}
#header.inOtherRoute {

}
#header .container {
    padding: 20px 0;
}
#header #logo {
    left: 0;
    top: -12px;
    margin: 0;
    z-index: 1;
}
#logo img {
    width: 150px;
}
#header #logo a {
	font-size: 30px;
}
#header nav {
	position: relative;
}
#header nav .left-menu,#header nav .right-menu  {
	z-index: 2;
	position: relative;
	margin: 0;
	margin-top: 10px;
	padding: 0;
}
#header nav ul li {
	display: inline;
}
#header nav ul.left-menu li{
	margin-right: 20px;
}
#header nav ul.right-menu li {
  margin-left: 20px;
}
#header nav ul li a{
    font-size: 18px;
    color: #212121;
    font-weight: 400;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}
#header nav ul li a:hover {
	color: #8dc63f;
}
#header nav .menu-btn a{
    padding: 7px 20px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    border-radius: 7px;
}
#header .btn {
	border-color:  #99cc53;
    color: white;
    background-color: #99cc53;
    padding: 4px 15px !important;
    min-width: 50px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#header .btn:hover {
    background: #70af1a !important;
    border-color: #70af1a !important;
    color: white;
}
#header .btn:focus {
	outline: none;
}
</style>
<template>
	<div id="header">
		<div class="container">
			<nav role="navigation">
				<h1 class="pull-left" id="logo"><a href="/"><img src="../assets/img/logo.png"></a></h1>
				<ul class="pull-right right-menu">
                    <li><a href="about.html">Home</a></li>
                    <li><a href="tour.html">About</a></li>
                    <li><a href="pricing.html">Forms</a></li>
                    <li><a href="tour.html">Pricing</a></li>
                    <li><a href="pricing.html">Contact</a></li>
					<li><button class="btn btn-outline" @click="showLogin">Login</button></li>
					<li ><button class="btn btn-outline">Sign up</button></li>
				</ul>
			</nav>
		</div>
	</div>
</template>