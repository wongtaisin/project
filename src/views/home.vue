<template>
	<el-container>
		<AppAside />
		<el-container class="header-and-main">
			<AppHeader />
			<el-main>
				<!-- Tab选项卡 -->
				<AppTabs />
				<!-- 路由容器 -->
				<el-scrollbar>
					<div class="container">
						<router-view v-slot="{ Component }">
							<keep-alive :include="keepAliveStore.keepAliveComponents">
								<Component :is="markRaw(shallowRef(Component).value)" :key="route.fullPath" />
							</keep-alive>
						</router-view>
					</div>
				</el-scrollbar>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
import AppAside from '@/views/aside/AppAside.vue'
import AppHeader from '@/views/aside/AppHeader.vue'
import AppTabs from '@/views/aside/AppTabs.vue'
import { markRaw, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

import { useKeepAliveStore } from '../pinia/global'

const route = useRoute()

const keepAliveStore = useKeepAliveStore()
</script>

<style lang="scss" scoped>
.el-main {
	background-color: #f0f2f5;
	overflow: hidden;
}

.header-and-main {
	flex-direction: column;
	height: 100vh;
}

.container {
	padding: 15px;
	overflow-x: hidden;
	padding-bottom: 55px;
}

.el-main {
	padding: 0;
	overflow-x: hidden;
}

.el-scrollbar__wrap {
	overflow-x: hidden;
}
</style>
