import React from 'react'
import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'

const routes: RouteObject[] = [
  {
    path: '/discover',
    // jsx 语法
    element: <Discover />
  }
]

export default routes
