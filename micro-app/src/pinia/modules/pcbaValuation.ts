/*
 * @Author: wingddd wongtaisin1024@gmial.com
 * @Date: 2024-11-22 15:44:36
 * @LastEditors: wingddd wongtaisin1024@gmial.com
 * @LastEditTime: 2024-11-22 15:57:05
 * @FilePath: \PCB-\src\pinia\modules\pcbaValuation.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import $axios from '../../axios/index'

export const customerInit = defineStore('customerInit', {
	// 状态库
	state: () => ({
		data: ref({
			expressCompanyList: [{ code: '', id: 0, name: '', sort: 0 }],
			packingTypeList: [{ priceName: '', priceCode: '' }],
			productTypeList: [{ typeName: '', productCode: '' }],
			programmingWayList: [{ priceName: '', priceCode: '' }],
			fileTypeList: [{ id: 0, remakes: '', sort: 0, typeName: '' }]
		}) // 使用ref初始化数据
	}),
	actions: {
		async getCustomerInfo() {
			const data = await $axios({
				method: 'get',
				url: '/api/fmsmart/customer/init'
			})
			return data.data
		},
		setCustomerInfo(data: any) {
			this.data = data
		}
	},
	// 开启数据缓存
	persist: {
		key: 'customerInit', // 存储名字
		storage: sessionStorage, // 存储方式 sessionStorage, localStorage
		pick: ['data'] // 指定state 那些参数需要持久化, [] 表示 undefind 或者 null
	}
})

// 根据用户id客戶联系方式地址列表
export const contactList = defineStore('contactList', {
	state: () => ({
		list: ref([
			{
				id: '',
				userId: null,
				contactName: '',
				telPhone: '',
				province: '',
				city: '',
				address: '',
				sort: ''
			}
		])
	}),
	actions: {
		async getContactList(params: any) {
			const data = await $axios({
				method: 'get',
				url: '/api/fmsmart/contact/getContactList',
				params: params
			})
			return data.data
		},
		setContactList(data: any) {
			this.list = data
		}
	},
	persist: {
		key: 'contactList',
		storage: sessionStorage,
		pick: ['list']
	}
})

// 根据用户id查询技术联系列表
export const techniList = defineStore('techniList', {
	state: () => ({
		list: ref([
			{
				contacts: '',
				creatTime: '',
				createBy: null,
				createTime: null,
				id: '',
				params: {},
				remakes: null,
				remark: null,
				searchValue: null,
				sort: '',
				status: '',
				techniName: '',
				techniTel: '',
				telPhone: '',
				updateBy: null,
				updateTime: '',
				userId: '',
				userName: null
			}
		])
	}),
	actions: {
		async getTechniList(params: any) {
			const data = await $axios({
				method: 'get',
				url: '/api/fmsmart/techni/getTechniList',
				params: params
			})
			return data.data
		},
		setTechniList(data: any) {
			this.list = data
		}
	},
	persist: {
		key: 'techniList',
		storage: sessionStorage,
		pick: ['list']
	}
})

// 预估价格存储
export const orderEstimate = defineStore('orderEstimate', {
	state: () => ({
		data: ref({
			engineeringFee: '',
			processFee: '',
			otherFee: '',
			sum1: '',
			taxationFee: '',
			estimatedAmount: '',
			ihtFee: '',
			freightFee: '',
			smtFee: ''
		})
	}),
	actions: {
		setOrderEstimate(data: any) {
			this.data = data
		}
	},
	getters: {}
	// persist: {
	// 	key: 'orderEstimate',
	// 	storage: sessionStorage,
	// 	pick: ['data']
	// }
})
