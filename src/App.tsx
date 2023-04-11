import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessage } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>

      <Suspense fallback="">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
