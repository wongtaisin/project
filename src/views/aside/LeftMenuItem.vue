<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-10 11:20:06
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-11 16:28:59
 * @FilePath: \project\src\views\aside\LeftMenuItem.vue
 * @Description: 左侧菜单项组件
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<el-menu-item :index="item.path" v-if="!item.children">
		<i :class="`iconfont ${item.icon}`" />
		<span v-text="item.name" />
	</el-menu-item>

	<el-sub-menu :index="item.path" v-if="item.children">
		<template #title>
			<i :class="`iconfont ${item.icon}`" />
			<span v-text="item.name" />
		</template>
		<LeftMenuItem v-for="sub in item.children" :key="sub.path" :item="sub" />
	</el-sub-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface MenuItem {
	path: string
	name: string
	icon?: string
	children?: MenuItem[]
}

interface Props {
	item: MenuItem
}

const props = defineProps<Props>()
const item = ref(props.item)
</script>

<style lang="scss" scoped>
.iconfont {
	font-size: 16px;
	margin-right: 5px;
}
</style>
