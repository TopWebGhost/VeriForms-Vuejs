<script>
export default {

}

</script>

<style>
	#subscribe-div {
		background: #f9f9f9;
        padding: 3em 0;
	}
	#footer-div {
		background: white;
		padding-top: 30px;
	}
	#footer-div .copyright-div {
	    border-top: 1px solid #f0f2f3;
        padding: 10px 0;

	}
	#subscribe-div form {
	    position: relative;
	}
	#subscribe-div form i {
	    position: absolute;
        top: 50%;
        margin-top: -10px;
        left: 15px;
        font-size: 20px;
	}
	#subscribe-div form input[type='email'] {
		width: 100%;
        background: #ededed;
        border: none;
        padding-left: 50px;
        padding-right: 170px;
	}
	#subscribe-div form input[type='submit'] {
	    position: absolute;
        right: 0;
        top: 0;
        margin-right: -4px;
        height: 54px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 20px;
        font-weight: 300;
        width: 160px;
    }
    .footer-widget .links li{
    	padding: 0;
        margin: 0;
        list-style: none;
        margin-bottom: 15px;
        line-height: 24px;
    }
    .footer-widget .links,  .footer-widget .socials{
        padding: 0;
        margin: 0;
    }
    .socials li {
    	padding: 0;
        margin: 0;
        display: inline;
    }
    .socials li a {
        padding: 4px 7px;
        font-size: 22px;
    }
    .footer-widget a{
        color: #6a7885;
    }
</style>
<template>
	<div id="footer">
		<section id="subscribe-div">
			<div class="container">

				<h3 class="animate-box"><label for="email">Subscribe to our newsletter</label></h3>
				<form action="#" method="post" class="animate-box">
					<i class="glyphicon glyphicon-send"></i>
					<input type="email" class="form-control" placeholder="Enter your email" id="email" name="email">
					<input type="submit" value="Send" class="btn btn-primary">
				</form>

			</div>
		</section>

		<section id="footer-div">
			<div class="container">
				<div class="row row-bottom-padded-md">
					<div class="col-md-3 col-sm-6 col-xs-12 animate-box">
						<div class="footer-widget">
							<h3>Company</h3>
							<ul class="links">
								<li><a href="#">About Us</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">Feature Tour</a></li>
								<li><a href="#">Pricing</a></li>
								<li><a href="#">Team</a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 animate-box">
						<div class="footer-widget">
							<h3>Support</h3>
							<ul class="links">
								<li><a href="#">Knowledge Base</a></li>
								<li><a href="#">24/7 Call Support</a></li>
								<li><a href="#">Video Demos</a></li>
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 animate-box">
						<div class="footer-widget">
							<h3>Contact Us</h3>
							<p>
								<a href="mailto:info@freehtml5.co">info@freehtml5.co</a> <br>
								198 West 21th Street, <br>
								Suite 721 New York NY 10016 <br>
								<a href="tel:+123456789">+12 34  5677 89</a>
							</p>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 animate-box">
						<div class="footer-widget">
							<h3>Follow Us</h3>
							<ul class="socials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
								<li><a href="#"><i class="fa fa-youtube"></i></a></li>
							</ul>
						</div>
					</div>

				</div>

			</div>
			<div class="copyright-div animate-box">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="fh5co-left"><small>&copy; 2016 <a href="index.html">Guide</a>All Rights Reserved.</small></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>