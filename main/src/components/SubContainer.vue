<template>
	<div id="sub-container" />
</template>

<script lang="ts" setup>
import { registerApps } from '@/utils/qiankun'
import { start } from 'qiankun'
import { onMounted } from 'vue'

onMounted(() => {
	if (!window.qiankunStarted) {
		window.qiankunStarted = true
		registerApps()
		start({
			sandbox: {
				experimentalStyleIsolation: true // 样式隔离
			}
		})
	}
})
</script>
