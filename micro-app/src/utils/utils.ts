/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-16 18:04:21
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-10 08:10:11
 * @FilePath: \PCB-\src\utils\utils.ts
 * @Description: 通用工具函数库
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
export default {
	/**
	 * @desc 深拷贝
	 * @param {any} data - 要拷贝的数据
	 * @returns {any} 拷贝后的数据
	 */
	deepClone(data: any) {
		return window.JSON.parse(window.JSON.stringify(data))
	},

	/**
	 * 根据时间戳和格式返回格式化的日期字符串
	 * @param {number} timestamp - 时间戳
	 * @param {string} format - 日期格式
	 * @returns {string} 格式化后的日期字符串
	 * @example
	 * formatDate(1507513800642, 'yyyy/MM/dd hh:mm:ss') => '2017/10/09 09:50:00'
	 * formatDate(1507513800642, 'yyyy-MM-dd hh:mm:ss') => '2017-10-09 09:50:00'
	 * formatDate(1507513800642, 'yyyy.MM.dd , hh-mm-ss') => '2017.10.09 , 09-50-00'
	 */
	formatDate(timestamp: number, format: string): string {
		if (!timestamp) return ''
		
		const date = new Date(timestamp)
		
		const timeUnits = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(), 
			'm+': date.getMinutes(),
			's+': date.getSeconds(),
			'q+': Math.floor((date.getMonth() + 3) / 3),
			'S': date.getMilliseconds()
		}

		// 处理年份
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (date.getFullYear() + '').slice(-RegExp.$1.length))
		}

		// 处理其他时间单位
		for (const unit in timeUnits) {
			if (new RegExp(`(${unit})`).test(format)) {
				const value = timeUnits[unit as keyof typeof timeUnits]
				format = format.replace(RegExp.$1,RegExp.$1.length === 1 ? String(value) : ('00' + value).slice(-2))
			}
		}

		return format
	},

	/**
	 * @desc 格式化日期时间
	 * @param {Date} date - 日期对象
	 * @param {boolean} [includeTime] - 是否包含时间,默认false只返回日期
	 * @returns {string} 格式化后的日期时间字符串
	 */
	formatDateTime(date: any, includeTime?: boolean): string {
		const padZero = (num: number): string => num.toString().padStart(2, '0') // 补零
		
		const year = date.getFullYear()
		const month = padZero(date.getMonth() + 1)
		const day = padZero(date.getDate())
		
		if (!includeTime) return `${year}-${month}-${day}`
		
		const hour = padZero(date.getHours())
		const minute = padZero(date.getMinutes())
		return `${year}-${month}-${day} ${hour}:${minute}`
	},

	/**
	 * @desc 验证并格式化数字
	 * @param {number | string} value - 要验证的数值
	 * @returns {number} 格式化后的数值,非法输入返回0
	 */
	validateNumber(value: number | string): number {
		const strValue = String(value) // 转换为字符串处理
		if (/^[1-9]\d*$/.test(strValue)) return Number(strValue) // 判断是否为正整数
		if (/^\d+(\.\d+)?$/.test(strValue)) return Number(Number(strValue).toFixed(4)) // 判断是否为合法小数，保留4位小数
		return 0	// 非法输入返回0
	},

	/**
	 * @desc 节流函数 - 限制函数在指定时间内只执行一次
	 * @param {Function} callback - 需要执行的函数
	 * @param {number} wait - 等待时间(毫秒)
	 * @returns {Function} 节流后的函数
	 */
	throttle<T extends (...args: any[]) => any>(callback: T, wait: number): (...args: Parameters<T>) => void {
		let timeoutId: number | null = null
		let lastExecTime = 0

		return function(this: unknown, ...args: Parameters<T>) {
			const currentTime = Date.now()

			if (lastExecTime && currentTime < lastExecTime + wait) {
				// 如果距离上次执行未超过等待时间,则设置定时器
				if (timeoutId) clearTimeout(timeoutId)
				timeoutId = window.setTimeout(() => {
					lastExecTime = currentTime
					callback.apply(this, args)
				}, wait)
			} else {
				// 已超过等待时间,立即执行
				lastExecTime = currentTime
				callback.apply(this, args)
			}
		}
	},

	/**
	 * @desc 将对象转换为URL查询字符串
	 * @param {Record<string, any>} params - 要转换的参数对象
	 * @returns {string} 转换后的URL查询字符串
	 */
	urlJsonList(params: Record<string, any>): string {
		return Object.entries(params)
			.filter(([_, value]) => value !== null && value !== undefined && value !== '')
			.map(([key, value]) => {
				const encodedKey = encodeURIComponent(key)
				const encodedValue = encodeURIComponent(String(value))
				return `${encodedKey}=${encodedValue}`
			}).join('&')
	},

	/**
	 * @desc 验证手机号码
	 * @param {string | number} value - 要验证的电话号码
	 * @returns {Promise<void>} 验证结果
	 */
	isMobileNumber(value: string | number): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (!value) {
				reject(new Error('请输入电话号码'))
			} else {
				const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
				const isPhone = reg.test(String(value))
				if (!isPhone) {
					reject(new Error('手机号码格式如:138xxxx8754'))
				} else {
					resolve()
				}
			}
		})
	}
}
