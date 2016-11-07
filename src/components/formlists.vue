<script>
export default {

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
	padding: 0 30px 0 0;
	border-top: solid 1px #8dc63f;
}
.formItem {
	width: 100%;
	padding: 20px 0;
}
.formItem > ul {
	display: inline-flex;
	width: 100%;
}
.formItem > ul > li {
	width: 25%;
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
</style>
<template>
	<div id="formlists" class="container">
		<div class="filter">
			<input type="search" placeholder="search">
			<i class="fa fa-search"></i>
			<select>
            	<option> Blank </option>
            	<option> From Template </option>
            </select>
			<select>
				<option> Blank </option>
				<option> From Template </option>
			</select>
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
		</ul>
	</div>
</template>