// 一、引导各种包

// 1.1 导入项目依赖的Vue相关包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// 1.2 因为咱们模块化开发一个文件代表一个模块，每个模块中的变量都不是全局变量，
// 我们引入的Vue也不是全局变量，那么相应的VueResource与VueRouter插件在
// 执行的时候就无法自动完成初始化工作。
// 所以我们要手动use一下。
Vue.use(VueResource);
Vue.use(VueRouter);

// 1.3 引入mint-ui包
// 因为mintUI是一个Vue组件库，所以这里需要先use一下，
// use完毕后就可以使用mintUI提供的各种组件了。
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
Vue.use(MintUI);  

// 1.4 引入mui包，mui不依赖vue
import '../lib/mui/css/mui.css';
import '../lib/mui/css/icons-extra.css';

// 二、引入我们自己写的各种组件

// 2.1、引入项目根组件
import App from './App.vue';

// 2.2、引入项目头部尾部组件
import comHeader from './components/frame/header.vue';
import comFooter from './components/frame/footer.vue';

// 2.3、引入项目首页组件
import comHome from './components/home/home.vue';
import news from './components/news/news.vue';
import settings from './components/settings/settings.vue';
import shoops from './components/shoops/shoops.vue';

// 2.3、引入新闻相关组件
// import me from './components/me/me.vue';

// 2.4、引入图片相关组件
// import comPhotoList from './components/photo/photoList.vue';
// 三、注册全局组件
Vue.component('v-header', comHeader);
Vue.component('v-footer', comFooter);

// 四、创建vue实例，启动整个项目

// 4.1 创建实例
var vm = new Vue({
	
	// 4.2、关联页面视图
	el: '#app',
	render: function(c) {
		return c(App);
	},
	
	// 4.4、添加页面路由配置，根据url切换页面中间部分的组件
	router: new VueRouter({
		routes: [
			{ path: '/', component: comHome },
			{ path: '/news', component: news },
			{ path: '/settings', component: settings },
			{ path: '/shoops', component: shoops },
			
			// { path: '/photo/list', component: comPhotoList }
		]
	})
});
