/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-20 08:31:59
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 15:11:43
 * @FilePath: \PCB-\src\axios\modules\pcbaValuation.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
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

// 预估价格
export const estimatedPrice = async (params: any) => {
	let data = await $axios({
		url: `/api/fmsmart/customer/estimatedPrice`,
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
