/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-13 17:03:06
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-13 17:07:48
 * @FilePath: \PCB-\vite-plugin-micro-app.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import fs from 'fs'
import path from 'path'

const VitePluginMicroApp = () => {
	let basePath = ''
	return {
		name: 'vite:micro-app',
		apply: 'build',
		configResolved(config: any) {
			basePath = `${config.base}${config.build.assetsDir}/`
		},
		writeBundle(options: any, bundle: any) {
			for (const chunkName in bundle) {
				if (!Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
					continue
				}
				const chunk = bundle[chunkName]
				if (!chunk.fileName?.endsWith('.js') && !chunk.fileName?.endsWith('.ts')) {
					continue
				}
				chunk.code = chunk.code.replace(
					/(from|import\()(\s*['"])(\.\.?\/)/g,
					(all: any, $1: any, $2: any, $3: any) => all.replace($3, new URL($3, basePath))
				)
				const fullPath = path.join(options.dir, chunk.fileName)
				fs.writeFileSync(fullPath, chunk.code)
			}
		}
	}
}

export default VitePluginMicroApp as any
