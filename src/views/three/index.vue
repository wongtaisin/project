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
