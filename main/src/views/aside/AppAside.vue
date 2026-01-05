<template>
	<div class="left-menu-item">
		<el-menu :default-active="onRoutes" router unique-opened>
			<div class="logo pt-20 pb-20" href="/">
				<img class="mr-10" src="@/assets/images/Vitejs-logo.png" />
				<h1>qiankun</h1>
			</div>
			<LeftMenuItem :item="item" :key="i" v-for="(item, i) in menu" />
		</el-menu>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import LeftMenuItem from './LeftMenuItem.vue'

interface MenuItem {
	value: string
	name: string
	title: string
	path: string
	icon: string
	menuType?: number
	children?: MenuItem[]
}

const menu = ref<MenuItem[]>([
	{
		value: '003',
		name: '空管理',
		title: 'kong-list',
		path: '/kong/order',
		icon: 'icon-caogao1',
		children: [
			{
				value: '003001',
				name: '空列表',
				title: 'kong-order',
				path: '/kong/order',
				icon: 'icon-dingdanliebiao'
			},
			{
				value: '003002',
				name: '草稿箱',
				title: 'kong-draft',
				path: '/kong/draft',
				icon: 'icon-caogao1'
			}
		]
	},
	{
		value: '004',
		name: 'app-vue3',
		title: 'app-vue3',
		path: '/app/app-vue3/home',
		icon: 'icon-MESpingtaitubiaoku-_chanpinbaozhuangleixing'
	},
	{
		value: '005',
		name: 'app-vue2',
		title: 'app-vue2',
		path: '/app/app-vue2/#/home',
		icon: 'icon-baozhuangleixing'
	}
])

const route = useRoute()

const onRoutes = computed(() => {
	return route.meta.activeMenu || route.path
})
</script>

<style lang="scss" scoped>
@include p(b, 20);
@include p(t, 20);
@include m(r, 10);

.left-menu-item {
	width: 200px;
	background: #001529;
	height: 100vh;
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 50px;
		}
		h1 {
			color: white;
			font-size: 20px;
			text-decoration: none;
		}
	}
}

:deep(.el-menu) {
	width: 200px;
	background: #001529;
	color: #fff;
	border: none;

	.el-sub-menu {
		&.is-active {
			> .el-sub-menu__title {
				color: white;
				background-color: #001529 !important;
			}
		}
	}

	.el-menu-item.is-active {
		background: #247bb4;
		color: #f1d070;
	}
}

:deep(.el-menu-item) {
	color: #fff;
	&:hover {
		background: rgba(26, 37, 47, 1);
	}
}

:deep(.el-sub-menu__title) {
	color: #fff;
	&:hover {
		background: #247bb4;
	}
}

:deep(.is-active) {
	background: #247bb4;
	color: #f1d070;
}
</style>
