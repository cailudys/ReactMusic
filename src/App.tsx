import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import { useAppSelector, useAppDispatch, shallEqualApp } from './store'
import { changeMessage } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

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
      {/* <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleMessageChange}>修改message</button> */}
      <Suspense fallback="">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
