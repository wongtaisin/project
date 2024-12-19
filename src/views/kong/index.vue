<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-21 11:44:41
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-11 15:35:52
 * @FilePath: \project\src\views\list\index.vue
 * @Description: PCBA订单和草稿列表页面
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<div class="common">
		<AppAside />
		<div class="list">
			<el-tabs @tab-click="handleClick" class="demo-tabs" type="card" v-model="activeName">
				<el-tab-pane label="订单" name="order" />
				<el-tab-pane label="草稿" name="draft" />
				<router-view :key="activeName" v-slot="{ Component }">
					<component :is="Component" />
				</router-view>
			</el-tabs>
		</div>
	</div>
</template>

<script lang="ts" setup>
import AppAside from '@/views/aside/AppAside.vue'
import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref('order')

const handleClick = (tab: TabsPaneContext) => {
	const path = tab.props.name === 'order' ? '/pcba/order' : '/pcba/draft'
	router.push({ path })
}
</script>

<style lang="scss" scoped>
.common {
	width: 100%;
	height: 100%;
	display: flex;

	.list {
		flex: 1;
		margin: 20px;
		margin-bottom: 0;
		background: white;
		padding: 20px;
	}
}
</style>
