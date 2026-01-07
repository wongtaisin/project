/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2025-12-29 15:51:44
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-07 08:28:02
 * @FilePath: \project\app-react19\src\pages\Layout\index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { Suspense } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

const Layout = () => {
  const navigation = useNavigation()
  const { state } = navigation
  const loading = state === 'loading'
  return (
    <div>
      {loading === true ? (
        <div> react-router19的页面加载中...</div>
      ) : (
        <Suspense fallback={<div>子应用的页面加载中...</div>}>
          <Outlet />
        </Suspense>
      )}
    </div>
  )
}

export default Layout
