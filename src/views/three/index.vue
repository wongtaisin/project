<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2025-04-03 11:20:58
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-04-03 16:20:12
 * @FilePath: \project\src\views\three\index.vue
 * @Description:
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<div class="three-container w-100">
		<router-view :key="route.path" v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<script lang="tsx" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
@include w(100);
</style>
