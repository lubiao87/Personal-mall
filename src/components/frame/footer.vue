<template>
	<footer id="footer">
	
		<!-- 底部 => 使用了Mui的tabBar选项卡 -->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#/">
				<router-link to="/">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">图书</span>
				</router-link>
			</a>

			<a class="mui-tab-item" href="#/">
				<router-link to="/shoops">
					<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
					<span class="mui-tab-label">我的</span>
				</router-link>
			</a>

			<a class="mui-tab-item" href="#/">
				<router-link to="/news">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">广播</span>
				</router-link>
			</a>

			<a class="mui-tab-item" href="#/">
				<router-link to="/settings">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
				</router-link>
			</a>
		</nav>
	
	</footer>
</template>

<script>
</script>

<style>
.mint-header {
	    background-color: #FF5722;
}
</style>