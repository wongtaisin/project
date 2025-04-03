/*
 * @作者: wingddd wongtaisin1024@gmail.com
 * @日期: 2025-04-03 14:16:34
 * @最后编辑者: wingddd wongtaisin1024@gmail.com
 * @最后编辑时间: 2024-12-02 11:19:12
 * @文件路径: /D:/project/src/pinia/token.ts
 * @描述: 用于管理令牌的 Pinia 存储，支持持久化存储。
 *
 * 版权所有 (c) 2024 wongtaisin1024@gmail.com, 保留所有权利。
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGlobalConfigStore = defineStore(
	'globalConfig',
	() => {
		// 存储全局配置的响应式引用
		const config = ref<Record<string, any>>({})

		/**
		 * 获取全局配置
		 * 优先从内存中获取，如果为空则从localStorage读取
		 * @returns {Record<string, any>} 全局配置对象
		 */
		const getConfig = computed(() =>
			Object.keys(config.value).length
				? config.value
				: JSON.parse(localStorage.getItem('globalConfig') || '{}')
		)

		/**
		 * 保存配置到内存和localStorage
		 * @param {Record<string, any>} data - 要保存的配置对象
		 */
		const saveConfig = (data: Record<string, any>): void => {
			config.value = data
			localStorage.setItem('globalConfig', JSON.stringify(data))
		}

		return { config, getConfig, saveConfig }
	},
	{
		persist: true // 开启持久化
	}
)
