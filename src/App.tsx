import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import AppHeader from './components/app-header'

import routes from './router'
import { useAppSelector, useAppDispatch, shallEqualApp } from './store'
import { changeMessage } from './store/modules/counter'
import Demo2 from './views/demo/demo02'

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
      <AppHeader></AppHeader>
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
