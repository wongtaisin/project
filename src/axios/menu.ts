import $axios from '@/axios/index'

// 获取所有菜单列表
export const getAllMenu = () => {
	return $axios.get('/data/menu.json')
}
