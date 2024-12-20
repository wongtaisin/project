// vite.config.ts
import vue from 'file:///D:/project/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import { defineConfig } from 'file:///D:/project/node_modules/vite/dist/node/index.js'
import path, { resolve } from 'path'
var __vite_injected_original_dirname = 'D:\\project'
var vite_config_default = defineConfig({
	plugins: [vue()],
	base: process.env.NODE_ENV === 'production' ? './' : './',
	//注意： 设置开发者模式以及生产模式访问路径
	assetsInclude: resolve(__vite_injected_original_dirname, './src/assets'),
	// 静态资源处理
	resolve: {
		alias: {
			'@': path.resolve(__vite_injected_original_dirname, 'src'),
			assets: resolve(__vite_injected_original_dirname, 'assets'),
			build: path.resolve(__vite_injected_original_dirname, 'build')
		}
	},
	// 开发服务器配置
	server: {
		// https: true, //(使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
		host: true,
		// 监听所有地址
		port: 81,
		//指定开发服务器端口：默认3000
		open: true,
		//启动时自动在浏览器中打开
		cors: false,
		//为开发服务器配置 CORS
		proxy: {
			'/api': {
				target: 'http://192.168.38.31:9000',
				// 业务
				changeOrigin: true,
				//是否跨域
				rewrite: path2 => path2.replace('/api', '')
			},
			'/admin': {
				target: 'http://192.168.38.31:8080',
				// 登录
				changeOrigin: true,
				rewrite: path2 => path2.replace('/admin', '')
			}
		}
	},
	// 项目构建配置
	build: {
		target: 'modules',
		//设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
		outDir: 'dist',
		// 构建得包名  默认：dist
		assetsDir: 'assets',
		// 静态资源得存放路径文件名  assets
		sourcemap: false,
		//构建后是否生成 source map 文件
		// brotliSize: false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
		minify: 'esbuild',
		// 项目压缩 :boolean | 'terser' | 'esbuild'
		chunkSizeWarningLimit: 1e3,
		//chunk 大小警告的限制（以 kbs 为单位）默认：500
		cssTarget: 'chrome61'
		//防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
	}
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQQ0ItXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQQ0ItXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9QQ0ItL3ZpdGUuY29uZmlnLnRzXCI7LypcclxuICogQEF1dGhvcjogd2luZ2RkZCB3b25ndGFpc2luMTAyNEBnbWlhbC5jb21cclxuICogQERhdGU6IDIwMjQtMTEtMTMgMDg6MDQ6NTZcclxuICogQExhc3RFZGl0b3JzOiB3aW5nZGRkIHdvbmd0YWlzaW4xMDI0QGdtaWFsLmNvbVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTExLTIzIDA4OjM2OjU4XHJcbiAqIEBGaWxlUGF0aDogXFxQQ0ItXFx2aXRlLmNvbmZpZy50c1xyXG4gKiBARGVzY3JpcHRpb246XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAyNCBieSAke2dpdF9uYW1lX2VtYWlsfSwgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICovXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyByZXNvbHZlLCBqb2luIH0gZnJvbSAncGF0aCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHBsdWdpbnM6IFt2dWUoKV0sXHJcblx0YmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcuLycgOiAnLi8nLCAvL1x1NkNFOFx1NjEwRlx1RkYxQSBcdThCQkVcdTdGNkVcdTVGMDBcdTUzRDFcdTgwMDVcdTZBMjFcdTVGMEZcdTRFRTVcdTUzQ0FcdTc1MUZcdTRFQTdcdTZBMjFcdTVGMEZcdThCQkZcdTk1RUVcdThERUZcdTVGODRcclxuXHRhc3NldHNJbmNsdWRlOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cycpLCAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTU5MDRcdTc0MDZcclxuXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0J0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcblx0XHRcdGFzc2V0czogcmVzb2x2ZShfX2Rpcm5hbWUsICdhc3NldHMnKSxcclxuXHRcdFx0YnVpbGQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdidWlsZCcpXHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyBcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTkxNERcdTdGNkVcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdC8vIGh0dHBzOiB0cnVlLCAvLyhcdTRGN0ZcdTc1MjhodHRwcylcdTU0MkZcdTc1MjggVExTICsgSFRUUC8yXHUzMDAyXHU2Q0U4XHU2MTBGXHVGRjFBXHU1RjUzIHNlcnZlci5wcm94eSBcdTkwMDlcdTk4NzkgXHU0RTVGXHU4OEFCXHU0RjdGXHU3NTI4XHU2NUY2XHVGRjBDXHU1QzA2XHU0RjFBXHU0RUM1XHU0RjdGXHU3NTI4IFRMU1xyXG5cdFx0aG9zdDogdHJ1ZSwgLy8gXHU3NkQxXHU1NDJDXHU2MjQwXHU2NzA5XHU1NzMwXHU1NzQwXHJcblx0XHRwb3J0OiA4MSwgLy9cdTYzMDdcdTVCOUFcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTdBRUZcdTUzRTNcdUZGMUFcdTlFRDhcdThCQTQzMDAwXHJcblx0XHRvcGVuOiB0cnVlLCAvL1x1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUyRFx1NjI1M1x1NUYwMFxyXG5cdFx0Y29yczogZmFsc2UsIC8vXHU0RTNBXHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXHU1NjY4XHU5MTREXHU3RjZFIENPUlNcclxuXHRcdHByb3h5OiB7XHJcblx0XHRcdCcvYXBpJzoge1xyXG5cdFx0XHRcdHRhcmdldDogJ2h0dHA6Ly8xOTIuMTY4LjM4LjMxOjkwMDAnLCAvLyBcdTRFMUFcdTUyQTFcclxuXHRcdFx0XHRjaGFuZ2VPcmlnaW46IHRydWUsIC8vXHU2NjJGXHU1NDI2XHU4REU4XHU1N0RGXHJcblx0XHRcdFx0cmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoJy9hcGknLCAnJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Jy9hZG1pbic6IHtcclxuXHRcdFx0XHR0YXJnZXQ6ICdodHRwOi8vMTkyLjE2OC4zOC4zMTo4MDgwJywgLy8gXHU3NjdCXHU1RjU1XHJcblx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxyXG5cdFx0XHRcdHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKCcvYWRtaW4nLCAnJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8gXHU5ODc5XHU3NkVFXHU2Nzg0XHU1RUZBXHU5MTREXHU3RjZFXHJcblx0YnVpbGQ6IHtcclxuXHRcdHRhcmdldDogJ21vZHVsZXMnLCAvL1x1OEJCRVx1N0Y2RVx1NjcwMFx1N0VDOFx1Njc4NFx1NUVGQVx1NzY4NFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NTE3Q1x1NUJCOVx1NzZFRVx1NjgwNyAgLy9lczIwMTUoXHU3RjE2XHU4QkQxXHU2MjEwZXM1KSB8IG1vZHVsZXNcclxuXHRcdG91dERpcjogJ2Rpc3QnLCAvLyBcdTY3ODRcdTVFRkFcdTVGOTdcdTUzMDVcdTU0MEQgIFx1OUVEOFx1OEJBNFx1RkYxQWRpc3RcclxuXHRcdGFzc2V0c0RpcjogJ2Fzc2V0cycsIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NUY5N1x1NUI1OFx1NjUzRVx1OERFRlx1NUY4NFx1NjU4N1x1NEVGNlx1NTQwRCAgYXNzZXRzXHJcblx0XHRzb3VyY2VtYXA6IGZhbHNlLCAvL1x1Njc4NFx1NUVGQVx1NTQwRVx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMCBzb3VyY2UgbWFwIFx1NjU4N1x1NEVGNlxyXG5cdFx0Ly8gYnJvdGxpU2l6ZTogZmFsc2UsIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjggYnJvdGxpIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVx1MzAwMiBcdTc5ODFcdTc1MjhcdThCRTVcdTUyOUZcdTgwRkRcdTUzRUZcdTgwRkRcdTRGMUFcdTYzRDBcdTlBRDhcdTU5MjdcdTU3OEJcdTk4NzlcdTc2RUVcdTc2ODRcdTY3ODRcdTVFRkFcdTYwMjdcdTgwRkRcclxuXHRcdG1pbmlmeTogJ2VzYnVpbGQnLCAvLyBcdTk4NzlcdTc2RUVcdTUzOEJcdTdGMjkgOmJvb2xlYW4gfCAndGVyc2VyJyB8ICdlc2J1aWxkJ1xyXG5cdFx0Y2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLCAvL2NodW5rIFx1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1NzY4NFx1OTY1MFx1NTIzNlx1RkYwOFx1NEVFNSBrYnMgXHU0RTNBXHU1MzU1XHU0RjREXHVGRjA5XHU5RUQ4XHU4QkE0XHVGRjFBNTAwXHJcblx0XHRjc3NUYXJnZXQ6ICdjaHJvbWU2MScgLy9cdTk2MzJcdTZCNjIgdml0ZSBcdTVDMDYgcmdiYSgpIFx1OTg5Q1x1ODI3Mlx1OEY2Q1x1NTMxNlx1NEUzQSAjUkdCQSBcdTUzNDFcdTUxNkRcdThGREJcdTUyMzZcdTdCMjZcdTUzRjdcdTc2ODRcdTVGNjJcdTVGMEYgIChcdTg5ODFcdTUxN0NcdTVCQjlcdTc2ODRcdTU3M0FcdTY2NkZcdTY2MkZcdTVCODlcdTUzNTNcdTVGQUVcdTRGRTFcdTRFMkRcdTc2ODQgd2VidmlldyBcdTY1RjYsXHU1QjgzXHU0RTBEXHU2NTJGXHU2MzAxIENTUyBcdTRFMkRcdTc2ODQgI1JHQkEgXHU1MzQxXHU1MTZEXHU4RkRCXHU1MjM2XHU5ODlDXHU4MjcyXHU3QjI2XHU1M0Y3KVxyXG5cdH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsU0FBUyxlQUFxQjtBQWI5QixJQUFNLG1DQUFtQztBQWdCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsTUFBTSxRQUFRLElBQUksYUFBYSxlQUFlLE9BQU87QUFBQTtBQUFBLEVBQ3JELGVBQWUsUUFBUSxrQ0FBVyxjQUFjO0FBQUE7QUFBQSxFQUVoRCxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsUUFBUSxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUNuQyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFBQTtBQUFBLElBRVAsTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLFFBQ2QsU0FBUyxDQUFBQSxVQUFRQSxNQUFLLFFBQVEsUUFBUSxFQUFFO0FBQUEsTUFDekM7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNULFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFBQSxVQUFRQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDM0M7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLElBQ1IsV0FBVztBQUFBO0FBQUEsSUFDWCxXQUFXO0FBQUE7QUFBQTtBQUFBLElBRVgsUUFBUTtBQUFBO0FBQUEsSUFDUix1QkFBdUI7QUFBQTtBQUFBLElBQ3ZCLFdBQVc7QUFBQTtBQUFBLEVBQ1o7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
