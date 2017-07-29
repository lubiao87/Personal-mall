<template>
	<section id="home">
		<mt-search v-model="q"></mt-search>
		<ul class="mui-table-view" v-if="isShow">
			<li class="mui-table-view-cell mui-media" v-for="val in list">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" v-bind:src="val.image">
					<div class="mui-media-body">
						<p class="mui-ellipsis">{{ val.title }}</p>
						<p class="">{{ val.summary }}</p>
					</div>
				</a>
			</li>
		</ul>
	
		<!-- 首页轮播图 => 使用mint-ui中的swipe组件 -->
		<mt-swipe :auto="4000" id="books">
			<header>
				<h4>豆瓣纸书</h4>
				<span class="fr cl">更多</span>
			</header>
			<mt-swipe-item v-for=" val in lunbos">
				<a class="swipe-a" v-bind:href="val.alt">
					<img class="cover" v-bind:src="val.image" alt="">
					<div class="content">
						<div>
							<span>￥{{ val.price}}</span>
							<h4>
								<<{{ val.title }}>></h4>
							<p>{{ val.series.title }}</p>
							<p>{{ val.publisher }}</p>
						</div>
						<p></p>
					</div>
				</a>
			</mt-swipe-item>
	
		</mt-swipe>
	
		<div class="bottom">
			<div class="bottom-content">
				<h3>分类浏览</h3>
				<div class="bottom-i-content">
					<ul>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										小说
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										爱情
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										历史
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										外国文学
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										青春
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										励志
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										随笔
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										传记
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										推理
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										旅行
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										奇幻
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
						<li>
							<a href="/" class="bottom-a router-link-active">
								<button class="mint-button half cl mint-button--default mint-button--large">
									<!---->
									<label class="mint-button-text">
										经管
										<span class="half-r">&gt;</span>
									</label>
								</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

// 这里导出的对象写法与咱们之前Vue.component定义组件时传入的对象写法一致
// 只是这里不需要指定template模版了。
export default {

	// 这里使用的是es6的语法，es6中对象定义方法通过这种语法可以省去function关键字，
	// 类似于箭头函数也省去了function关键字。
	data() {
		return {
			isShow: false,
			q: '',
			list: [],
			lunbos: [],
			title: '分类浏览',
			msg: ['小说', '爱情', '历史', '外国文学', '青春', '励志', '随笔', '传记', '推理', '旅行', '奇幻', '经管']

		};
	},

	created() {
		this.getLunbos();
	},
	updated() {
		this.getList();
	},
	methods: {
		//搜索小说
		getList() {
			let opt = {
				params: {
					'apikey': '00fa6c0654689a0202ef4412fd39ce06'
				}
			}
			var url = 'https://api.douban.com/v2/book/search?q=' + this.q + '&count=8';
			if (this.q) {

				this.$http.jsonp(url, opt).then((rep) => {
					if (rep.body.start === 0) {
						this.isShow = true;
						this.list = rep.body.books;
					}
				})
			} else {
				this.isShow = false;
				return;
			}

		},
		// 获取轮播图数据
		getLunbos() {
			let opt = {
				params: {
					'apikey': '00fa6c0654689a0202ef4412fd39ce06'
				}
			}
			// var n = Math.ceil(Math.random() * 100);
			var n = 4;
			var url = 'https://api.douban.com/v2/book/series/' + n + '/books?count=5';
			this.$http.jsonp(url, opt).then(rep => {
				if (rep.body.start === 0) {
					this.lunbos = rep.body.books;
				}
			});
		}

	}

};

</script>
<style lang="less" rel="stylesheet/less" scoped>
	.mint-search {
	height: 100%;
}

	.mui-ellipsis {
		color: red;
	}

	#books {
		background-color: #fff;
	}

	header h4 {
		display: inline-block;
		font-weight: 400;
	}

	.fr {
		float: right;
	}

	.swipe-a {
		display: block;
		overflow: hidden;
		margin: 15px 1.12rem 0px;
	}

	.mint-swipe {
		height: 230px;
	}

	.mint-swipe img {
		// float: left;
		display: inline-block;
	}


	.content {
		display: inline-block;
		width: 70%;
		padding: 0 10px;
		position: relative;
		top: -30px;
		h4 {
			margin-bottom: 30px;
		}
		span {
			float: right;
			color: #E76648;
			font-size: 16px;
			line-height: 22px
		}
	}

	.bottom {
		padding-top: 1.3rem;
		h3 {
			padding: 0 1.12rem;
		}
		.half {

			color: #42bd56;
			text-align: left;
			box-sizing: border-box;
			padding: 0 1rem;
			.half-r {
				float: right;
				width: 3%;
				font-weight: normal;
				font-family: Consolas;
				color: #ccc;
			}
		}
		.bottom-content {
			.bottom-a {
				display: block;
			}
			.bottom-i-content {
				margin-left: 0.94rem;
				>ul {
					width: 100%;
					padding: 1.12rem 0 1.88rem;
					color: #eee;
					font-size: .9rem;
					overflow: hidden;
					>li {
						float: left;
						width: 49%;
						display: inline-block;
						margin-right: 1%;
					}
				}
			}
		}
	}
</style>
