import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'

import routes from './router'
import { useAppSelector, useAppDispatch, shallEqualApp } from './store'
import { changeMessage } from './store/modules/counter'

function App() {
  const dispatch = useAppDispatch()

  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallEqualApp
  )

  const handleMessageChange = () => {
    // dispatch({ type: changeMessage, payload: 'hahaha' })
    dispatch(changeMessage('哈哈哈'))
  }

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
      <button onClick={handleMessageChange}>修改message</button>
      <Suspense fallback="">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
