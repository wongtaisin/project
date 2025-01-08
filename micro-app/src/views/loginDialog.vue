<template>
	<el-dialog :before-close="handleClose" v-model="dialogVisible" width="400">
		<div class="login">
			<el-form :model="loginForm" :rules="loginRules" class="login-form" ref="loginFormRef">
				<h3 class="title">骏亚数字</h3>
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" auto-complete="off" placeholder="账号" type="text">
						<template #prefix>
							<svg-icon class="el-input__icon input-icon" icon-class="user" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" @keyup.enter="handleLogin" auto-complete="off" placeholder="密码" type="password">
						<template #prefix>
							<svg-icon class="el-input__icon input-icon" icon-class="password" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="code" v-if="captchaEnabled">
					<el-input v-model="loginForm.code" @keyup.enter="handleLogin" auto-complete="off" placeholder="验证码" style="width: 63%">
						<template #prefix>
							<svg-icon class="el-input__icon input-icon" icon-class="validCode" />
						</template>
					</el-input>
					<div class="login-code">
						<img :src="codeUrl" @click="getCode" class="login-code-img" alt="验证码" />
					</div>
				</el-form-item>
				<el-checkbox v-model="loginForm.rememberMe" style="margin-bottom: 20px">记住密码</el-checkbox>
				<el-form-item style="width: 100%">
					<el-button :loading="loading" @click="handleLogin" size="large" style="width: 100%" type="primary">
						{{ loading ? '登 录 中...' : '登 录' }}
					</el-button>
					<div v-if="register" style="float: right">
						<router-link class="link-type" to="/register">立即注册</router-link>
					</div>
				</el-form-item>
			</el-form>
			<div class="el-login-footer">
				<span>Copyright ©2024 All Rights Reserved.</span>
			</div>
		</div>
	</el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { FormRules, ElMessageBox, FormInstance } from 'element-plus'
import Cookies from 'js-cookie'
import { getCodeImg } from '../axios/login'
import { encrypt, decrypt } from '../utils/jsencrypt'
import { setToken, setloginUserKey } from '../utils/auth'
import { login } from '../axios/login'

interface RuleForm {
	username: string
	password: string
	rememberMe: boolean
	code: string
	uuid: string
}

const codeUrl = ref('')
const loading = ref(false)
const captchaEnabled = ref(true)
const register = ref(false)
const loginFormRef = ref<FormInstance>()
const dialogVisible = ref(true)

const loginForm = reactive<RuleForm>({
	username: '',
	password: '',
	rememberMe: false,
	code: '',
	uuid: ''
})

const loginRules = reactive<FormRules<RuleForm>>({
	username: [{ required: true, trigger: 'blur', message: '请输入您的账号' }],
	password: [{ required: true, trigger: 'blur', message: '请输入您的密码' }],
	code: [{ required: true, trigger: 'blur', message: '请输入验证码' }]
})

onMounted(() => {
	getCode()
	getCookie()
})

const getCode = async () => {
	try {
		const res = await getCodeImg()
		captchaEnabled.value = res.captchaEnabled ?? true
		if (captchaEnabled.value) {
			codeUrl.value = 'data:image/gif;base64,' + res.img
			loginForm.uuid = res.uuid
		}
	} catch (error) {
		console.error('获取验证码失败:', error)
	}
}

const getCookie = () => {
	const username = Cookies.get('username')
	const password = Cookies.get('password')
	const rememberMe = Cookies.get('rememberMe')
	
	loginForm.username = username ?? ''
	loginForm.password = password ? decrypt(password) : ''
	loginForm.rememberMe = rememberMe === 'true'
}

const router = useRouter()
const handleLogin = async () => {
	if (!loginFormRef.value) return
	
	try {
		await loginFormRef.value.validate()
		loading.value = true
		
		if (loginForm.rememberMe) {
			Cookies.set('username', loginForm.username, { expires: 30 })
			Cookies.set('password', encrypt(loginForm.password), { expires: 30 })
			Cookies.set('rememberMe', String(loginForm.rememberMe), { expires: 30 })
		} else {
			Cookies.remove('username')
			Cookies.remove('password')
			Cookies.remove('rememberMe')
		}

		const params = {
			username: loginForm.username.trim(),
			password: loginForm.password,
			code: loginForm.code,
			uuid: loginForm.uuid
		}

		const res = await login(params)
		setToken(res.token)
		setloginUserKey(res.login_user_key)
		router.push('/pcba/valuation')
	} catch (error) {
		loading.value = false
		console.error('登录失败:', error)
		if (captchaEnabled.value) {
			getCode()
		}
	}
}

const opens = () => {
	dialogVisible.value = true
}

const handleClose = (done: () => void) => {
	ElMessageBox.confirm('不进行登录无法保存草稿和提交订单?')
		.then(() => {
			done()
		})
		.catch(() => {
			// catch error
		})
}

defineExpose({
	dialogVisible,
	opens
})
</script>

<style rel="stylesheet/scss" lang="scss">
.login {
	margin: 0 10px;
}

.title {
	margin-bottom: 30px;
	text-align: center;
	color: #707070;
}

.login-form {
	width: 350px;

	.el-input {
		height: 38px;

		input {
			height: 38px;
		}
	}

	.input-icon {
		height: 39px;
		width: 14px;
		margin-left: 2px;
	}
}

.login-code {
	width: 33%;
	height: 38px;
	float: right;

	img {
		cursor: pointer;
		vertical-align: middle;
	}
}

.login-code-img {
	height: 38px;
}

.el-login-footer {
	height: 40px;
	line-height: 40px;
	position: fixed;
	bottom: 0;
	width: 100%;
	text-align: center;
	color: #fff;
	font-family: Arial;
	font-size: 12px;
	letter-spacing: 1px;
}
</style>
