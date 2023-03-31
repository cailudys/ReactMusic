// 第三方的东西
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import { Provider } from 'react-redux'

// 重置的东西
import '@/assets/css/index.less'

// 自己写的东西
import store from './store'
import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
