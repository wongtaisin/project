/*
 * @Author: wingddd wongtaisin1024@gmial.com
 * @Date: 2024-11-20 08:31:59
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-11 10:44:44
 * @FilePath: \PCB-\src\axios\modules\pcbaValuation.ts
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

// 上传文件
export const uploadFile = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/file/upload`,
		method: 'post',
		params: params,
		// processData: false,
		// contentType: false,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
	return data.data
}

// 预估价格
export const estimatedPrice = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/estimatedPrice`,
		method: 'post',
		data: params
	})
	return data.data
}

// 创建订单、草稿
export const createOrder = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/creteaOrderOrDraft`,
		method: 'post',
		data: params
	})
	return data.data
}

// 客户地址设置默认
export const setLocation = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/contact/setFirstAdrress?` + urlJsonList(params),
		method: 'post'
	})
	return data.data
}

// 新增客戶联系方式地址
export const postAddaddress = async (params: any) => {
	let data = await $axios({
		url: '/api/fmsmart/contact/add',
		method: 'post',
		data: params
	})
	return data.data
}

// 修改地址
export const changeAddress = async (params: any) => {
	let data = await $axios({
		url: '/api/fmsmart/contact/edit',
		method: 'post',
		data: params
	})
	return data.data
}

// 删除收货地址联系人
export const deleteContact = async (id: string) => {
	let data = await $axios({
		url: `/api/fmsmart/contact/remove/${id}`,
		method: 'get'
	})
	return data.data
}

//客户技术联系方式设置默认
export const setAdrress = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/techni/setFirstAdrress?` + urlJsonList(params),
		method: 'post'
	})
	return data.data
}

// 新增客戶技术联系方式
export const postContact = async (params: any) => {
	let data = await $axios({
		url: '/api/fmsmart/techni/add',
		method: 'post',
		data: params
	})
	return data.data
}

//修改客户技术联系方式
export const postTechni = async (params: any) => {
	let data = await $axios({
		url: '/api/fmsmart/techni/edit',
		method: 'post',
		data: params
	})
	return data.data
}

//删除客户技术联系方式
export const deleteTechni = async (id: string) => {
	let data = await $axios({
		url: `/api/fmsmart/techni/remove/${id}`,
		method: 'get'
	})
	return data.data
}
