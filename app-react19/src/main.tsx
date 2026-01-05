/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2026-01-05 11:08:08
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-05 14:45:04
 * @FilePath: \app-react19\src\main.tsx
 * @Description:
 *
 * Copyright (c) 2026 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import App from './App'
import './index.css'

let appRoot: any = null

function getContainer(container?: HTMLElement) {
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    return container?.querySelector('#app-react19') ?? null
  }
  return document.getElementById('app-react19')
}

const render = (props: any = {}) => {
  const { container } = props
  const dom = getContainer(container)

  if (!dom) return

  if (!appRoot) {
    appRoot = createRoot(dom)
  }

  appRoot.render(
   <StrictMode>
    <App />
  </StrictMode>)
}

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('react app bootstraped')
    },
    mount(props: any) {
      console.log('react app mount', props)
      render(props)
    },
    unmount(props: any) {
      console.log('react app unmount', props)
      appRoot?.unmount()
      appRoot = null
    },
    update(props: any) {
      console.log('update props', props)
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
