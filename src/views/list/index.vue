<template>
	<div class="order">
		<router-view :key="route.path" v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.order {
	width: 100%;
	height: 100vh;
}
</style>
