<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-14 09:57:35
 * @FilePath: \project\src\views\home.vue
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<section class="container">
		<AppAside />
		<div class="content">
			<router-view :key="route.path" v-slot="{ Component }">
				<component :is="Component" />
			</router-view>
		</div>
	</section>
</template>

<script lang="ts" setup>
import AppAside from '@/views/aside/AppAside.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.container {
	flex: 1;
	@include flexbox(space-between, center);
	.content {
		flex: 1;
		padding: 20px;
		margin-left: 20px;
		margin-right: 20px;
		background: white;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	}
}
</style>
