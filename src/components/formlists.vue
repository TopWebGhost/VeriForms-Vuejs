<script>
import vueSelect from 'vue-select'
export default {
  	components: {
		'vue-select': vueSelect,
  	},
	data() {
		return {
			templateOptions: [
				'Blank',
				'From Template'
			],
			option2: [
			],
			selectedTemplate:"",
		}
	},
}
</script>
<style>
#formlists {
	padding-top: 100px;
	color: #6c6c6c;
}
#formlists ul {
	list-style: none;
}
#formlists > ul {
	margin-top: 30px;
	padding: 0;
	border-top: solid 1px #8dc63f;
}
.formItem:hover {
	background: #1070ad;
	color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.formItem:hover .formTitle i {
	color: white;
}
.formItem {
	width: 100%;
	padding: 20px 0;
	-webkit-transition: .7s;
	transition: .7s;
	cursor: pointer;
}
.formItem > ul {
	display: inline-flex;
	width: 100%;
}
.formItem > ul > li {
	width: 25%;
}
.formItem:hover > ul > li:first-child {
	border-bottom: solid 2px #8dc63f;
}
.formItem > ul > li:first-child {
	width: 50%;
	padding-right: 20px;
	border-bottom: solid 2px #ededed;
}
.formItem >ul > li:nth-child(2) {
	display: inline-flex;
    text-align: center;
}
.formItem >ul > li:nth-child(2) .formProperty:first-child {
	margin-right: 20px;
}
.formTitle i{
	float: left;
	font-size: 35px;
    color: #8dc63f;
}
.formTitle p {
	padding-left: 45px;
	font-size: 25px;
	font-weight: 600;
}
.formDescritpion, .badges {
	padding: 0 45px;
}
.formProperty span:first-child {
	font-size: 25px;
	line-height: 33px;
}
.formDate span {
	font-weight: 600;
}
.btn-badge {

}
.btn-published {
	background: #8dc63f;
}
.btn-draft {
	background:
}
.filter {
	padding: 20px 30px;
}
.selectTemplate {
	float: left;
}
.searchTemplate {
	float: right;
	display: flex;
}
.searchBar {
	margin-left: 20px;
	position: relative;

}
.searchBar i {
	position: absolute;
	top: 0;
	left: 0;
	font-size: 20px;
	padding: 5px;
}
.searchBar button {
	padding: 2px;
	position: absolute;
  	top: 3px;
    right: 2px;
}
.searchBar input {
	padding: 7px;
	padding-left: 25px;
	padding-right: 60px;
	border: 1px solid rgba(60,60,60,.26);
    border-radius: 4px;
}
</style>
<template>
	<div id="formlists" class="container">


		<div class="filter">
			<div class="selectTemplate">
            	<vue-select class="vue-select"  :options="templateOptions" :model.sync="selectedTemplate" :searchable="true">
                </vue-select>
            </div>
            <div class="searchTemplate">
            	<vue-select class="vue-select"  :options="templateOptions" :model.sync="selectedTemplate" :searchable="true">
                </vue-select>
            	<div class="searchBar">
            		<input type="search" placeholder="search">
                    <i class="fa fa-search"></i>
                    <button class="btn btn-primary">Search</button>
            	</div>
            </div>
		</div>
		<ul>
			<li class="formItem">
				<ul>
					<li>
						<div class="formTitle">
							<i class="fa fa-file-text-o"></i>
							<p>Base Will Plan</p>
							<div class="badges">
								<a class="label label-success">published</a>
                            	<a class="label label-default">all states</a>
							</div>

						</div>
						<p class="formDescritpion">
							Simple power of attorney to support a base will plan.
						</p>
					</li>
					<li>
						<p class="formProperty"><span>2</span><br> <span>locations</span></p>
						<p class="formProperty"><span>1267</span><br> <span>locations</span></p>
					</li>
					<li>
						<p class="formDate">Created: <span>6 Jul 2016</span> </p>
						<p class="formDate">Last Modified: <span>2 Aug 2016</span></p>
					</li>
				</ul>
			</li>
			<li class="formItem">
				<ul>
					<li>
						<div class="formTitle">
							<i class="fa fa-file-text-o"></i>
							<p>VA Opinion Letter</p>
							<div class="badges">
                            	<a class="label label-warning">draft</a>
                            	<a class="label label-default">all states</a>
							</div>
						</div>
						<p class="formDescritpion">
							Vererans Association qualification letter
						</p>
					</li>
					<li>
						<p class="formProperty"><span>0</span><br> <span>locations</span></p>
						<p class="formProperty"><span>0</span><br> <span>locations</span></p>
					</li>
					<li>
						<p class="formDate">Created: <span>6 Jul 2016</span> </p>
						<p class="formDate">Last Modified: <span>2 Aug 2016</span></p>
					</li>
				</ul>
			</li>
			<li class="formItem">
				<ul>
					<li>
						<div class="formTitle">
							<i class="fa fa-file-text-o"></i>
							<p>VA Opinion Letter</p>
							<div class="badges">
                            	<a class="label label-success">published</a>
							</div>
						</div>
						<p class="formDescritpion">
							MPS opinion letter
						</p>
					</li>
					<li>
						<p class="formProperty"><span>3</span><br> <span>locations</span></p>
						<p class="formProperty"><span>675</span><br> <span>locations</span></p>
					</li>
					<li>
						<p class="formDate">Created: <span>6 Jul 2016</span> </p>
						<p class="formDate">Last Modified: <span>2 Aug 2016</span></p>
					</li>
				</ul>
			</li>
			<li class="formItem">
				<ul>
					<li>
						<div class="formTitle">
							<i class="fa fa-file-text-o"></i>
							<p>Enhanced Trust planr</p>
							<div class="badges">
                            	<a class="label label-success">published</a>
                            	<a class="label label-default">New York state only</a>
							</div>
						</div>
						<p class="formDescritpion">

						</p>
					</li>
					<li>
						<p class="formProperty"><span>8</span><br> <span>locations</span></p>
						<p class="formProperty"><span>78</span><br> <span>locations</span></p>
					</li>
					<li>
						<p class="formDate">Created: <span>6 Jul 2016</span> </p>
						<p class="formDate">Last Modified: <span>2 Aug 2016</span></p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>