<template>
	 <div class="nav gutter">
		<div class="nav-bar"  v-if="fixed">
			<ul class="nav-list flex-left">
				<li class="nav-item"> <router-link to="/login" class="zhihu" >知乎 </router-link></li>
				<li class="nav-item"><router-link to="/home/recommoned">首页</router-link></li>
				<li class="nav-item"><router-link to="/explore">发现</router-link></li>
				<li class="nav-item"><router-link  to="/question/waiting">等你来答</router-link></li>
				<li class="nav-item"><input type="search" placeholder="search"></li>
				<input type="button" value="提问">
			     <div class="icon">
			     	<i class="fa fa-bell fa-2x"></i>
			     	<i class="fa fa-comments fa-2x"></i>
			     </div>
				<li class="nav-item nav-item-last"><router-link to="/login"><img :src="user.avatar" v-if="token"
																				 style="width: 30px;height: 30px; border-radius: 5%;margin: -5px -20px"></router-link></li>
			</ul>
		</div>
		<div class="hide-nav-bar" v-if="!fixed">
			<ul class="nav-list flex-left">
				<li class="nav-item"> <router-link to="/login" class="zhihu" >知乎 </router-link></li>
				<li class="nav-item"><router-link to="/home/recommoned">推荐</router-link></li>
				<li class="nav-item"><router-link to="/home/follow">关注</router-link></li>
				<li class="nav-item"><router-link  to="/home/hot">热榜</router-link></li>
				<li class="nav-item  search2"><input type="search" placeholder="search"></li>
				<input type="button" value="提问" class="button2">
			</ul>
		</div>
		<!-- 二级路由入口 -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {
				/*导航栏切换*/
				fixed:true,
				position:0,
				/*导航栏切换结束*/
				flag:true,
				token:this.$store.state.token,
				user:this.$store.state.user
			};
		},
		/*导航栏切换*/
		mounted() {
			// 等到页面产生滚动，执行onscroll函数，监听滚动条位置变化
			this.$nextTick(function () {
				window.addEventListener('scroll',this.onScroll);
			})
		},
		methods:{
			onScroll() {
				// 取得滚动的起点，也就是文档流的顶部
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				this.position = scrollTop;
				console.log(this.position)
				this.fixed = scrollTop <= 100;
			}
		},
		/*导航栏切换结束*/
		created() {}
	};
</script>

<style lang="scss" scoped>
	/*引入SDN样式图标*/
	@import url('../assets/css/basic.css');

	.gutter{
		min-width: 1024px;
		margin: 0;
		padding: 0;
		.nav-bar{
			position: sticky;
		}
		.nav-bar,
		.hide-nav-bar{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			margin-bottom: 55px;
			height: 55px;
			z-index: 9999;

			.nav-list{
				background:#fff;
				margin: 0 auto;
				display: flex;
				width: 1034px;
				height:50px;
				line-height: 50px;
				.nav-item:nth-child(5){
					width: 44%;
					margin-left: 4%;
					padding-right: 3%;

				}
				.nav-item:nth-child(1){
					margin-left:-3%;
					font-size: 15px;
					width:15%;
				}
				.nav-item:nth-child(4){
					width: 16%;
				}

				.nav-item:nth-child(8){
					padding-left:9%;
				}

				.nav-item{
					font-size:1em;
					color:#8590a6;
					margin-left:2%;
					width:9%;
					height: 55px;
					.zhihu{
						font-size:2em;
						font-weight: normal;
						color:#0084ff;
					}


				}


			}
		}
	}
	.nav-bar{
		background: #fff;
		box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2);

	}
	.nav-bar-enter-active,
	.nav-bar-leave-active {
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.nav-bar-enter,
	.nav-bar-leave-to {
		transform: translateY(-52px);
		opacity: 0;
	}

	.hide-nav-bar-enter-active,
	.hide-nav-bar-leave-active {
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.hide-nav-bar-enter,
	.hide-nav-bar-leave-to {
		transform: translateY(52px);
		opacity: 0;
	}



	.hide-nav-bar{
		background-color: #fff;
		box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2);
	}
	input[type = search]{
		border-radius: 4px ;
		margin-left:9%;
		box-sizing: border-box;
		border: none;
		line-height: 35px;
		width:100%;
		border: 1px ;
		background: #f6f6f6;
	}
	a{
		color: #999;
		display: inline-block;
		height: 55px;

	}

	.nav-bar .router-link-active {
		font-weight: 600;
		color: #444;
		border-bottom: 3px solid #0084ff;
	}
	.hide-nav-bar .router-link-active{
		color: #0084ff;
	}


	.icon{
		width: 20%;
		margin: 10px 4%;
		display: flex;
		padding-left:5%;
		i{
			color: #8590a6;
			margin-left:59%;
			font-size: 20px;
		}
	}
	input[type=button]{
		width: 60px;
		height: 35px;
		background: #0084ff;
		margin:8px 1%;
		border-radius: 4px;
		color: #fff;
	}
	.search2{
		padding-left: 8%;
		input[type=search]{
			width:60%;
			margin-left:48%;
		}

	}
	.button2{
		width: 60px;
		height: 35px;
		background: #0084ff;
		margin:8px 8%;
		border-radius: 4px;
		color: #fff;
	}

</style>
