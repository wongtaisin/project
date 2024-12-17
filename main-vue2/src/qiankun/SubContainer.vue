<template>
	<div id="sub-container" />
</template>

<script>
import { start } from 'qiankun'
import { registerApps } from './qiankun'

export default {
	name: 'SubContainer',
	mounted() {
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
	},
	beforeDestroy() {
		window.qiankunStarted = false
	}
}
</script>
