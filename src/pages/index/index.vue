<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2025-02-07 08:32:24
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-04-10 17:18:18
 * @FilePath: \project\src\pages\index\index.vue
 * @Description:
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello wongtaisin1024')
</script>

<style scoped lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
}
</style>
