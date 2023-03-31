import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import routes from './router'

function App() {
  const { count, message } = useSelector(
    (state: any) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <Suspense fallback="">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
