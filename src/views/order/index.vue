<!--
 * @Author: wingddd wongtaisin1024@gmial.com
 * @Date: 2024-11-13 10:12:45
 * @LastEditors: wingddd wongtaisin1024@gmial.com
 * @LastEditTime: 2024-11-15 08:38:38
 * @FilePath: \project\src\views\order\index.vue
 * @Description: PCB在线下单平台
-->
<template>
	<section>
		<OrderTop />
		<div class="order">
			<OrderLeft />
			<OrderMiddle />
			<OrderRight />
		</div>
	</section>
</template>

<script lang="ts" setup>
import OrderLeft from './common/left.vue'
import OrderMiddle from './common/middle.vue'
import OrderRight from './common/right.vue'
import OrderTop from './common/top.vue'
</script>

<style lang="scss" scoped>
.order {
	max-width: 1540px;
	min-width: 1280px;
	margin: 0 auto;
	display: flex;
	padding-top: 20px;
}
</style>
