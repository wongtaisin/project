<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:34:45
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 17:34:37
 * @FilePath: \project\main\src\components\SubContainer.vue
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<div id="sub-container" />
</template>

<script lang="ts" setup>
import { start } from 'qiankun'
import { onMounted, onUnmounted } from 'vue'
import { registerApps } from '../utils/qiankun'

declare global {
	interface Window {
		qiankunStarted: boolean
	}
}

onMounted(() => {
	if (!window.qiankunStarted) {
		window.qiankunStarted = true
		registerApps()
		start({
			sandbox: {
				experimentalStyleIsolation: true
			},
			singular: false, // 允许同时存在多个子应用
			prefetch: true // 预加载
		})
	}
})

onUnmounted(() => {
	window.qiankunStarted = false
})
</script>
