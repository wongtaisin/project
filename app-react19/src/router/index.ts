/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2025-12-29 15:47:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-05 14:00:31
 * @FilePath: \app-react19\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms))

const Layout = lazy(() => import('../pages/Layout'))

const Home = lazy(async () => {
  await sleep(1000) // 模拟加载延迟
  let Home = await import('../pages/Home')
  return Home
})

const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home }, // 默认路由
      { path: '/Home', Component: Home },
      { path: '*', Component: NotFound }
    ]
  }
])

export default router
