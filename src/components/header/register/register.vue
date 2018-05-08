<template>
  <!-- 注册账号 -->
	<div class="registerBox">
		<div class="registerUser">注册账号</div>
		<div class="X">X</div>
		<form action="" method="post">
			<ul>
				<li>
					<span class="spa">用户名</span>
					<input type="text" name="username" class="username" placeholder="请输入手机号码">
				</li>
				<li>
					<span class="spa">密码</span>
					<input type="password" name="pwd" class="password" placeholder="请输入密码">
				</li>
				<li>
					<span class="spa">重复密码</span>
					<input type="password" name="repeatPassword" class="password" placeholder="请再输入一遍密码">
				</li>
				<li>
					<span class="spa">性别</span>
					<label for="sex" class="label">
						<input type="radio" name="sex[]" id="sex" class="radio" value="0">
							<div class="circle">
								<div class="sex"></div>
							</div>
							<div>基佬</div>
					</label>
					<label for="sex1">
					<input type="radio" name="sex[]"  id="sex1" class="radio" value="1">
						<div class="circle">
							<div class="sex"></div>
						</div>
						<div>腐女</div>
				</label>
				</li>
				<li>
					<label for="read">
						<input type="checkbox" name="read" id="read" class="checkbox" checked>
						<span class="read"></span>
						<span>我已阅读并同意</span>
						<a href="">用户协议</a>
						<a href="">隐私政策</a>
					</label>
				</li>
				<li>
					<input type="submit" value="注 册" class="register">
				</li>
				<li>
					<span>已注册,</span>
					<span>去登录</span>
				</li>
			</ul>
		</form>
	</div>
</template>
<script>
export default {
	props: ['show'],
	data () {
		return {

		}
	}
}
</script>
<style>
.registerBox{
	width:419px;
	height:414px;
	background:white;
	position:absolute;
	top:0px;
	left:0px;
	right:0px;
	bottom:0px;
	margin:auto;
	z-index:100;
	overflow:hidden;
	display:none;
}
.registerBox .X{
	position:absolute;
	top:5px;
	right:10px;
	color:white;
	font-size:20px;
}
.registerBox .registerUser{
	width:100%;
	height:36px;
	background:#0188e2;
	color:white;
	font-size:14px;
	line-height:36px;
	padding-left:20px;
}
.registerBox ul{
	margin:20px auto;
}
.registerBox ul li{
	height:40px;
	line-height:40px;
	padding-left:100px;
	font-size:14px;
	margin:10px 0px;
}
.registerBox ul li .spa{
	/* float: left; */
	margin-left: -100px;
	text-align: right;
	width:100px;
	display:inline-block;
}
.registerBox ul li .username{
	width:230px;
	height:35px;
	font-size:14px;
	margin-left:10px;
	padding-left:5px;
}
.registerBox ul li .password{
	width:230px;
	height:35px;
	font-size:14px;
	margin-left:10px;
}

.registerBox .circle{
	width:16px;
	height:16px;
	border:1px solid #cccccc;
	border-radius:50%;
	display:inline-block;
	margin:0px 4px 0px 0px;
	line-height:0px;
	vertical-align:middle;
}

.registerBox ul li div{
	display:inline-block;
}
.radio{
	display:none;
}
.sex{
	width:10px;
	height:10px;
	border-radius:50%;
	margin:3px;
}
.label{
	margin-left:8px;
}
input[type="radio"]:checked+ .circle .sex{
	background:#009ff3;
}

.read{
	width:14px;
	height:14px;
	background:url('../../../../static/img/sprite2.png');
	background-position:-64px -56px;
}

input[type="checkbox"]:checked+.read{
	background-position:-64px -86px;
}
.registerBox ul li:nth-of-type(4){
	margin:0px 0px;
}
.registerBox ul li:nth-of-type(5){
	margin:0px 0px 0px 8px;
}
.registerBox ul li a{
	color:#888888;
	font-family:sans-serif;
}

.register{
	width:106px;
	height:35px;
	background:#169af3;
	border:0px solid transparent;
	color:white;
	font-size:14px;
	position:absolute;
	left:100px;
}
.registerBox ul li:nth-of-type(7) span:nth-of-type(2){
	color:#169af3;
}

</style>


