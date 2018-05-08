<template>
	<!-- 登陆部分 -->
	<div class="loginBox">
		<div class="loginUser">登录账户</div>
		<div class="X" @click="close">X</div>
		<ul class="fashion">
			<li class="user">账号登录</li>
			<li class="message">短信登录</li>
		</ul>
		<!-- 用户登陆 -->
		<div class="userLogin">
			<form @submit.prevent="submit">
				<input type="text" name="username" :value="username" class="userName" placeholder="用户名/手机号/邮箱">
				<input type="password" name="pwd" :value="password" class="password" placeholder="请输入密码">
				<label for="rememberMe">
					<input type="checkbox" name="memberMe" id="rememberMe">
					<span class="rememberMe"></span>
					<span>记住密码</span>
				</label>
				<label for="autoLogin">
					<input type="checkbox" name="autoLogin" id="autoLogin">
					<span class="autoLogin"></span>
					<span>自动登录</span>
				</label>
				<span class="registerUser">注册账号</span>
				<input type="submit" value="登　录" class="submit">
			</form>
			<div class="close"></div>
			<div class="open"></div>
			<div class="loginMode">
				<span class="line"></span>
				<span>其他方式登录</span>
				<span class="line"></span>
				<ul>
					<li>
						<img src="img/qq.png" alt="">
					</li>
					<li>
						<img src="img/weChat.png" alt="">
					</li>
					<li>
						<img src="img/weiBo.png" alt="">
					</li>
				</ul>
			</div>
		</div>
		<!-- 短信登陆 -->
		<div class="messageLogin">
			<form >
				<input type="text" name="phoneNumber" class="phoneNumber" placeholder="请输入手机号">
				<input type="text" name="VerificationCode" class="VerificationCode" placeholder="请输入密码">
				<div class="click">点击获取</div>
				<input type="submit" value="登　录" class="submit">
			</form>
			<div class="loginMode">
				<span class="line"></span>
				<span>其他方式登录</span>
				<span class="line"></span>
				<ul>
					<li>
						<img src="img/qq.png" alt="">
					</li>
					<li>
						<img src="img/weChat.png" alt="">
					</li>
					<li>
						<img src="img/weiBo.png" alt="">
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ['show'],
  data () {
    return {
      username: 'last order',
      password: '123456'
    }
  },
  methods: {
	  close () {
      this.$emit('close', this.show)
    },
    submit () {
      this.http({
        method: 'post',
        url: '/kuGouServer/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res) => {
        console.log(res)
				if (res.data.success.result === 0) {
					alert('登录成功')
				}
      })
    }
  }
}
</script>
<style>
.loginBox{
	width:398px;
	height:398px;
	position:absolute;
	top:0px;
	left:0px;
	right:0px;
	bottom:0px;
	margin:auto;
	z-index:1;
	overflow:hidden;
	background:white;
}
/* 账号登陆 */
.loginUser{
	width:378px;
	height:36px;
	background:#0188e2;
	color:white;
	font-size:15px;
	line-height:36px;
	padding-left:20px;
}
.loginBox .X{
	position:absolute;
	top:5px;
	right:10px;
	color:white;
	font-size:20px;
}
.loginBox .fashion{
	margin:10px 59px;
}
.loginBox .fashion li{
	width:140px;
	height:40px;
	float:left;
	text-align:center;
	line-height:40px;
	font-size:20px;
}
.user{
	color:#009ff3;
	border-bottom:2px solid #009ff3;
	margin-top:-1px;
}
.message{
	border-bottom:1px solid #cccccc;
}
.userLogin{
	width:284px;
	margin:70px auto;
	overflow:hidden;
	/*display:none;*/
}
.userLogin .userName,.password{
	width:275px;
	height:35px;
	margin:0px 0px 10px 0px;
	font-size:14px;
	padding-left:5px;
}
.close{
	position:absolute;
	top:163px;
	right:65px;
}
svg{
	vertical-align:middle;
}
.open{
	position:absolute;
	top:163px;
	right:65px;
	display:none;
}
label{
	margin:0px 10px 0px 0px;
}
label span{
	display:inline-block;
	vertical-align:middle;
}
.rememberMe,.autoLogin{
	width:14px;
	height:14px;
	background:url('../../../../static/img/sprite2.png');
	background-position:-64px -56px;
}
input[type="checkbox"]{
	display:none;
}
input[type="checkbox"]:checked+.rememberMe{
	background-position:-64px -86px;
}
input[type="checkbox"]:checked+.autoLogin{
	background-position:-64px -86px;
}
.userLogin label span:nth-of-type(2){
	color:#828082;
	font-size:14px;
}
.userLogin .registerUser{
	font-size:14px;
	margin-left:40px;
}
.submit{
	width:280px;
	height:35px;
	border:0px solid transparent;
	background:#009ff3;
	color:white;
	font-size:18px;
	position:absolute;
	top: 245px;
	left: 59px;
}
.loginMode{
	position: absolute;
	top: 300px;
	overflow: hidden;
	font-size: 16px;
}
.loginMode span{
	display: inline-block;
	vertical-align: middle;
	color: #828082;
}
.loginMode .line{
	width: 88px;
	height: 1px;
	background: #828082;
}
.loginMode ul{
	width: 130px;
	height: 28px;
	margin: 20px auto 0;
}
.loginMode ul li{
	float: left;
	margin :0 5px 0 5px;
}
.loginMode ul li img{
	width: 32px;
}
/* 短信登陆 */
.messageLogin{
	width: 284px;
	margin: 70px auto;
	display: none;
	
}
.messageLogin .phoneNumber{
	width: 280px;
	height: 35px;
	margin: 0px 0px 10px 0px;
	font-size: 14px;
}
.VerificationCode{
	width: 170px;
	height: 35px;
	font-size: 14px;
}
.click{
	width: 92px;
	height: 38px;
	border: 1px solid #cccccc;
	background: white;
	color: #828082;
	margin-left: 10px;
	display: inline-block;
	text-align: center;
	line-height: 38px;
}
</style>
