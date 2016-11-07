<script>
import store from '../store/index'
export default {
  methods:{
    showLogin(){
      store.actions.showLogin();
    },
  }
}

</script>
<style>
#header {
	position: absolute;
	z-index: 99;
	width: 100%;
	padding-top: 50px;
	font-family: 'Oswald', sans-serif;
}
#header .container {

}
#header #logo {
    text-align: center;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    top: -12px;
    margin: 0 0 20px 0;
    z-index: 1;
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
}
#header nav ul li {
	display: inline;
}
#header nav ul.left-menu li{
	margin-right: 20px;
}
#header nav ul.right-menu li {
  margin-left: 30px;
}
#header nav ul li a{
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}
#header nav ul li a:hover {
	color: white;
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
	border-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4px 15px !important;
    min-width: 50px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
#header .btn:hover {
    background: #99cc53 !important;
    border-color: #99cc53 !important;
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
				<ul class="pull-left left-menu">
					<li><a href="about.html">Home</a></li>
					<li><a href="tour.html">About</a></li>
					<li><a href="pricing.html">Forms</a></li>
					<li><a href="tour.html">Pricing</a></li>
                    <li><a href="pricing.html">Contact</a></li>
				</ul>
				<h1 id="logo"><a href="index.html">VeriForms<span></span></a></h1>
				<ul class="pull-right right-menu">
					<li><button class="btn btn-outline" @click="showLogin">Login</button></li>
					<li ><button class="btn btn-outline">Sign up</button></li>
				</ul>
			</nav>
		</div>
	</div>
</template>