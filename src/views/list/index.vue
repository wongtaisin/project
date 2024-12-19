<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-21 11:44:41
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-14 13:40:22
 * @FilePath: \project\src\views\list\index.vue
 * @Description: PCBA订单和草稿列表页面
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<div class="order">
		<el-tabs @tab-click="handleClick" class="demo-tabs" type="card" v-model="activeName">
			<el-tab-pane label="订单" name="order" />
			<el-tab-pane label="草稿" name="draft" />
			<router-view :key="activeName" v-slot="{ Component }">
				<component :is="Component" />
			</router-view>
		</el-tabs>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref('order')

const handleClick = (tab: any) => {
	const path = tab.props.name === 'order' ? '/pcba/order' : '/pcba/draft'
	router.push({ path })
}
</script>

<style lang="scss" scoped>
.order {
	flex: 1;
}
</style>
