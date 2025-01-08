/*
 * @Author: wingddd wongtaisin1024@gmial.com
 * @Date: 2024-11-21 11:46:40
 * @LastEditors: wingddd wongtaisin1024@gmial.com
 * @LastEditTime: 2024-11-21 11:48:46
 * @FilePath: \PCB-\src\axios\modules\pcbaList.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import $axios from '../index'

let urlJsonList = (obj: any) => {
	return Object.keys(obj)
		.map(k => {
			if (obj[k] !== '') {
				return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
			}
			return ''
		})
		.filter(Boolean)
		.join('&')
}

// 订单列表信息
export const orderList = async (params: any, page: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/orderList?` + urlJsonList(page),
		method: 'post',
		data: params
	})
	return data.data
}

// 订单详情
export const getorderInfo = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/getorderInfo`,
		method: 'get',
		params: params
	})
	return data.data
}

// 确认下单
export const affirmOrder = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/confirmOrder?` + urlJsonList(params),
		method: 'get'
	})
	return data.data
}

// 取消订单
export const cancelOrder = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/cancelOrder?` + urlJsonList(params),
		method: 'get'
	})
	return data.data
}

// 草稿列表信息
export const draftList = async (params: any, page: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/draftList?` + urlJsonList(page),
		method: 'post',
		data: params
	})
	return data.data
}

// 删除草稿
export const deleteDraft = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/delDraft?` + urlJsonList(params),
		method: 'get'
	})
	return data.data
}
