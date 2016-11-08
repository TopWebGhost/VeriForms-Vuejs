<script>
export default {

}

</script>
<style>
	.banner img {
		width: 100%;
		min-height: 700px;
		min-width: 1400px;
		position: absolute;
		z-index: 8;
	}
	.banner {
		position: relative;
		height: 600px;
		background-image: url(../assets/img/cover_image_paceholder.jpg);
		background-color: transparent;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}
	.overlay {
		position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2a2d36;
        opacity: .54;
        z-index: 9;
	}
	.image-banner {
		overflow: hidden;
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.text-banner {
        position: absolute;
        top: 200px;
		left: 100px;
		width: 50%;
        z-index: 10;
	}
	.text-banner .text-div {
		font-size: 50px;
        line-height: 67px;
        font-weight: 100;
        color: white;
	}
	.text-banner .btn-div .btn-video{
	    border-color: rgba(255, 255, 255, 0.2);
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
	}
	.text-banner .btn-outline:hover {
        border-color: rgba(255, 255, 255, 0.4);
        color: white;
        background-color: rgba(255, 255, 255, 0.2);
    }
    #homepage .scroll-div {
        position: absolute;
        bottom: -25px;
        left: 50%;
        z-index: 12;
        text-align: center;
    }
    .arrow {
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background: #8dc63f;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
    }
    .arrow i{
        top: 14px;
     	font-size: 25px;
        position: relative;
        color: #fff;
        vertical-align: middle;
    }
</style>
<template>
	<div id="homepage">
		<div class="banner">
			<div class="overlay">
			</div>

			<div class="text-banner">
            	<h2 class="animate-box text-div">Create Awesome Things for Better Web</h2>
            	<p class="animate-box btn-div">
            		<a href="https://vimeo.com/channels/staffpicks/93951774" class="btn btn-outline btn-video"><i class="fa fa-play"></i> Watch video</a>
            		<a href="http://freehtml5.co" target="_blank" class="btn btn-outline btn-primary">Try Demo</a>
            	</p>
            </div>
            <div class="animate-box scroll-div">
            	<a href="#" class="scroll-btn">
                   	<span class="arrow"><i class="fa fa-angle-down"></i></span>
                </a>
            </div>
		</div>
		<div class="">

		</div>
	</div>
</template>