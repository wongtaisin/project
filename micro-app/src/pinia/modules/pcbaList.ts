/*
 * @Author: wingddd wongtaisin1024@gmial.com
 * @Date: 2024-11-18 15:12:36
 * @LastEditors: wingddd wongtaisin1024@gmial.com
 * @LastEditTime: 2024-11-22 16:07:18
 * @FilePath: \PCB-\src\pinia\modules\pcbaList.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import $axios from '../../axios/index'

// 继续编辑草稿信息
export const draftInfo = defineStore('orderList', {
	state: () => ({
		data: reactive<any>({})
	}),
	actions: {
		async getDraftInfo(params: any) {
			const data = await $axios({
				method: 'get',
				url: `/api/fmsmart/customer/getDraftInfo`,
				params: params
			})
			return data.data
		},
		setDraftInfo(data: any) {
			this.data = data
		}
	},
	persist: {
		key: 'draftInfo',
		storage: sessionStorage,
		pick: ['data']
	}
})
